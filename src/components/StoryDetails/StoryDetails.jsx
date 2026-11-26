/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 6: StoryDetails - the page of one story.
import styles from './StoryDetails.module.css'
import defaultImage from '../../assets/default-news.svg';

/**
 * @param {object} props
 * @param {{ title: string, author: string, description: string, content: string, urlToImage: string|null }} props.story
 */
export default function StoryDetails({ story }) {
  if (!story)
    return
  // TODO: show the image (or the default image), the description and the content (the title is welcome too)
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{story.title}</h1>
      <p className={styles.author}>By {story.author || 'Unknown Author'}</p>

      <img
        src={story.urlToImage || defaultImage}
        alt={story.title}
        className={styles.image}
        onError={(e) => {
          e.currentTarget.src = defaultImage;
        }}
      />

      <p className={styles.description}>{story.description}</p>
      <div className={styles.content}>{story.content}</div>
    </article>
    )
}


/*
import styles from './StoryDetails.module.css';
import defaultImage from '../../assets/default-news.svg';

export default function StoryDetails({ story }) {
  if (!story) return null;

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{story.title}</h1>
      <p className={styles.author}>By {story.author || 'Unknown Author'}</p>

      <img
        src={story.urlToImage || defaultImage}
        alt={story.title}
        className={styles.image}
        onError={(e) => {
          e.currentTarget.src = defaultImage;
        }}
      />

      <p className={styles.description}>{story.description}</p>
      <div className={styles.content}>{story.content}</div>
    </article>
  );
}
*/
