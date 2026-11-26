/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 2: a custom hook that gets JSON from any url.
// It knows nothing about news - you can use it again in every project.

import { useEffect, useState } from "react"

/**
 * @param {string} url - the address to fetch
 * @returns {{ data: any, loading: boolean }}
 *   data    - the JSON that the url returned (null until it arrives)
 *   loading - true while waiting for the answer
 */
export default function useFetch(url) {
  // TODO: useState for data and for loading
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)


  
  // TODO: useEffect with an empty dependency array [] that runs once:
  //   1. check localStorage first - if the answer of this url is saved there, use it (no fetch!)
  //   2. otherwise fetch(url) -> response.json() -> save it in data AND in localStorage
  //   3. at the end, loading = false

   useEffect(() => {
    if (!url) return 

    const fetchData = async () => {
      setLoading(true)

      const cachedData = localStorage.getItem(url)

      if (cachedData) {
        setData(JSON.parse(cachedData))
        setLoading(false)
        return
      }
      else {
        try {
          const response = await fetch(url)

          if (!response)
            throw new Error(`HTTP error: status: ${response.status}`)

          const result = await response.json();
          localStorage.setItem(url, JSON.stringify(result))

          setData(result)

        } catch(error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false)
        }

      }
    }

    fetchData()

  }, [])
  return { data, loading }
}
