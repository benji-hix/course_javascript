import './App.css'
import Tabs from './components/Tabs'
import { useState } from 'react'

function App() {
  const [content, setContent] = useState('')

  const changeTab = (stuff) => {
    setContent(stuff)
  }

  return (
    <>
    <div className='container-tabs'>
    <Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} changeTab={changeTab}/>
    </div>
    <div className='container-content'>
      <p>{content}</p>
    </div>
    </>
  )
}

export default App
