import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import NewsStory from '../NewsStory/NewsStory';
import styles from './NewsList.module.css';

/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 5: NewsList - the list of all the stories (the home screen).

/**
 * Reads { stories, loading } with useContext(NewsContext).
 * @param {object} props
 * @param {(story: object) => void} props.onSelectStory - call it with the story whose card was clicked
 */
export default function NewsList({ onSelectStory }) {
  // TODO: const { stories, loading } = useContext(NewsContext)
  const { stories, loading } = useContext(NewsContext)

  // TODO: while loading -> show "Loading..."
  if (loading)
    return <p className={styles.loading}>Loading..</p>
    
  // TODO: otherwise map over stories -> <NewsStory key={...} ... onClick={() => onSelectStory(story)} />
  return (
    <section className={styles.grid}>
      {stories.map((story, index) => (
        <NewsStory 
          key={story.url || `${story.title}-${index}`}
          author={story.author}
          title={story.title}
          urlToImage={story.urlToImage}
          onClick={() => onSelectStory(story)}
        />

      ))}
    </section>
  )
}
