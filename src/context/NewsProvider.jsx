import { NEWS_URL } from "../config"
import { useState } from "react";
import useFetch  from "../hooks/useFetch";
import { NewsContext } from "./NewsContext";

// Step 3: NewsProvider - keeps the news and gives them to the whole app through NewsContext.
// It is already used in main.jsx: <NewsProvider><App /></NewsProvider>

/**
 * Gives through the context: { stories, loading, addStory }
 *   stories  - the stories you created + the articles from the API (data.articles), the new ones first
 *   loading  - true while the API has not answered yet
 *   addStory - (story) => adds a new story to the top of stories (it is not sent to the API)
 */
export default function NewsProvider({ children }) {
  // TODO: useState for the stories you create by hand
  const { data, loading } = useFetch(NEWS_URL)   
  const [customStories, setCustomStories] = useState([])

  // TODO: addStory(story) - puts the new story first
  const addStory = (newStory) => {
    setCustomStories((prevStories) => [newStory, ...prevStories])
  }

  const apiStories = data?.articles || [];
  const stories = [...customStories, ...apiStories];

  // TODO: return <NewsContext.Provider value={{ stories, loading, addStory }}>{children}</NewsContext.Provider>
  return ( 
      <NewsContext.Provider value={{ stories, loading, addStory }}>
        {children}
      </NewsContext.Provider>
    )
}

