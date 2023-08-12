import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App = () => {
  const [txt, setTxt] = useState('')
  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox text={txt} />
          <TextArea value={txt} setValue={setTxt} />
          <BottomResultBox text={txt} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
