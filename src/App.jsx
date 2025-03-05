import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpeedTyping from './components/speedTyping.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <SpeedTyping />
      </div>
    </>
  )
}

export default App

/*import './App.css';
import speedTyping from './components/speedTyping';

function App() {
  return (
    <div className="App">
      <speedTyping />
    </div>
  );
}

export default App;*/