import { useState } from 'react'
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';



function App() {

  const [modalVisible, setModalVisibility] = useState(false);
  function hideModal() {
    setModalVisibility(false)
  }
  function showModal() {
    setModalVisibility(true)
    
  }
  return (
    <> 
    <MainHeader   onCreatePost={showModal}/>
    <main>
      <PostList isVisible = {modalVisible} onStopPost={hideModal} onCancel={hideModal} />
    </main>
    </>
  )
}

export default App
