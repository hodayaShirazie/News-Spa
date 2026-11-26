/* eslint-disable no-unused-vars -- delete this line when you start writing the code */
// Step 8: App - chooses which screen to show (Single Page Application, no router).
import styles from './App.module.css'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import NewsList from './components/NewsList/NewsList';
import StoryDetails from './components/StoryDetails/StoryDetails';
import CreateStory from './components/CreateStory/CreateStory';

export default function App() {
  // TODO: useState for the current screen ("home" / "details" / "create")
  const [screen, setScreen] = useState('home');
  // TODO: useState for the selected story
  const [selectedStory, setSelectedStory] = useState(null);

  const handleSelectStory = (story) => {
    setSelectedStory(story);
    setScreen('details');
  };

  // TODO: always show <Navbar onNavigate={...} />
  // TODO: conditional rendering:
  //   "home"    -> <NewsList onSelectStory={...} />   (clicking a card: save the story + go to "details")
  //   "details" -> <StoryDetails story={selectedStory} />
  //   "create"  -> <CreateStory />

  return (
    <div className={styles.app}>
      <Navbar onNavigate={setScreen} />

      <main className={styles.main}>
        {screen === 'home' && <NewsList onSelectStory={handleSelectStory} />}
        {screen === 'details' && <StoryDetails story={selectedStory} />}
        {screen === 'create' && <CreateStory />}
      </main>
    </div>
  );
}
