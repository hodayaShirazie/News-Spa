/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 7: CreateStory - a form to add a story by hand.
import styles from './CreateStory.module.css'
import { useContext, useRef, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';

export default function CreateStory() {
  // TODO: const { addStory } = useContext(NewsContext)
  const { addStory } = useContext(NewsContext)
  const [successMessage, setSuccessMessage] = useState('');
  // TODO: a ref for every field: title, author, description, content, image (a file input)
  const titleRef = useRef(null)
  const authorRef = useRef(null)
  const descriptionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)


  const handleSubmit = (event) => {
    event.preventDefault()
    
    const file = imageRef.current.files[0]
    const urlToImage = file ? URL.createObjectURL(file) : null

    const newStory = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      description: descriptionRef.current.value,
      content: contentRef.current.value,
      urlToImage,
    };

    addStory(newStory);
    setSuccessMessage('Story created successfully!');

    titleRef.current.value = '';
    authorRef.current.value = '';
    descriptionRef.current.value = '';
    contentRef.current.value = '';
    imageRef.current.value = '';

    titleRef.current.focus(); 

  }
  

  // TODO: a <form> with a <label> for every field (Title, Author, Description, Content, Image)
  //       and a submit button
  // TODO: on submit:
  //   - event.preventDefault()
  //   - read the values from ref.current.value, and the file from ref.current.files[0]
  //   - build a story object with the same fields as the API:
  //       { author, title, description, content, urlToImage }   (no file -> urlToImage: null)
  //   - addStory(story)
  //   - show the success message: "Story created successfully!"
  //   - clear the fields and put the cursor in the title field: titleRef.current.focus()
  
  


  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create a New Story</h2>

      {successMessage && (
        <p className={styles.success}>{successMessage}</p>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleRef} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="author">Author</label>
          <input id="author" type="text" ref={authorRef} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" ref={descriptionRef} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="content">Content</label>
          <textarea id="content" rows="5" ref={contentRef} required />
        </div>

        <div className={styles.field}>
          <label htmlFor="image">Image</label>
          <input id="image" type="file" accept="image/*" ref={imageRef} />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Publish Story
        </button>
      </form>
    </div>
  )
}


