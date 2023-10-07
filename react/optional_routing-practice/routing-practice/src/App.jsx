import './App.css'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function App() {

  const Home = (props) => {
    return <h1>Welcome</h1>;
  }

  const Number = (props) => {
    const {number} = useParams();

    return <h1>{ number }</h1>;
  }

  const Word = (props) => {
    const {word, color} = useParams();
    return <h1 style={{color: {color}}}>{word}</h1>
  }

  // const ColoredText = (props) => {
  //   const {word, color, background} = useParams();
  //   return <h1 style={{color: {color}, backgroundColor: {background}}}>{word}</h1>
  // }

  return (
    <>
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='/:number' element={<Number />} />
      {/* <Route path='/:word' element={<Word />} /> */}
      <Route path='/:word/:color' element={<Word />} />
    </Routes>
    </>
  )
}

export default App
