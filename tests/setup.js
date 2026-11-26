// Runs before every test file. You don't need to change this file.
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

const store = new Map();
const localStorageMock = new Proxy(
  {
    getItem: (key) => (store.has(String(key)) ? store.get(String(key)) : null),
    setItem: (key, value) => {
      store.set(String(key), String(value));
    },
    removeItem: (key) => {
      store.delete(String(key));
    },
    clear: () => {
      store.clear();
    },
    key: (index) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size;
    },
  },
  {
    ownKeys: () => Array.from(store.keys()),
    getOwnPropertyDescriptor: (target, prop) => {
      if (store.has(String(prop))) {
        return { enumerable: true, configurable: true, value: store.get(String(prop)) };
      }
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
  }
);

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
  configurable: true,
});

// Tells React that the tests wrap updates in act() (React Testing Library does it for us).
globalThis.IS_REACT_ACT_ENVIRONMENT = true

// Errors thrown inside event handlers (onClick, onSubmit...) don't reach the test directly.
// We collect them here, and the helpers turn them into a clear test failure.
globalThis.__pageErrors = []
window.addEventListener('error', (event) => {
  globalThis.__pageErrors.push(event.error ?? event.message)
  event.preventDefault()
})

// React warnings (for example a missing "key" in a list) are collected, so tests can check them.
// React prints a key warning only once per component, so the key warnings are kept for the whole test file.
globalThis.__consoleErrors = []
globalThis.__keyWarnings = []
const originalError = console.error
console.error = (...args) => {
  const message = args.map(String).join(' ')
  globalThis.__consoleErrors.push(message)
  if (/unique "key"|same key/i.test(message)) globalThis.__keyWarnings.push(message)
  if (process.env.SHOW_CONSOLE) originalError(...args)
}

// jsdom has no URL.createObjectURL - this one works like the browser's (it needs a File / Blob).
URL.createObjectURL = (blob) => {
  if (!(blob instanceof Blob)) {
    throw new TypeError(
      "Failed to execute 'createObjectURL' on 'URL': Overload resolution failed.",
    )
  }
  return `blob:http://localhost/${Math.random().toString(16).slice(2)}`
}
URL.revokeObjectURL = () => {}

afterEach(() => {
  cleanup()
  localStorage.clear()
  vi.unstubAllGlobals()
  vi.unstubAllEnvs()
  globalThis.__pageErrors.length = 0
  globalThis.__consoleErrors.length = 0
})
