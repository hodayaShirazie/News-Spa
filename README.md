# News SPA

A Single Page Application built with Vanilla React and Vite that fetches live headlines from NewsAPI and allows users to read full articles or publish custom stories without page reloads.

## Features

- **Live News Feed (`NewsList` & `NewsStory`):** Fetches top headlines via a generic `useFetch` custom hook with `localStorage` caching to avoid redundant API requests.
- **Full Article View (`StoryDetails`):** Displays the full story content, description, author, and cover image (with automatic fallback to a default SVG image).
- **Create Custom Stories (`CreateStory`):** Uncontrolled form powered by `useRef` to add new articles directly to the top of the feed, including optional local image previews via `URL.createObjectURL`.
- **State-Driven SPA Navigation (`App` & `Navbar`):** Switches seamlessly between Home, Story Details, and Create Story views using React state and Context API (`NewsContext`) without an external router.

## Tech Stack

- **Frontend:** React (Hooks: `useState`, `useEffect`, `useContext`, `useRef`), CSS Modules
- **Build Tool & Testing:** Vite, Vitest, React Testing Library, JSDOM
- **API:** [NewsAPI](https://newsapi.org/)