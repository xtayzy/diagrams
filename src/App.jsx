import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./components/Form.jsx";
import Diagrams from "./components/Diagrams.jsx";

function App() {
    const [diagrams, setDiagrams] = useState([
        {
            name:'diagram',
            color: 'blue',
            percent: 40
        },
        {
            name:'diagram',
            color: 'white',
            percent: 93
        },
        {
            name:'diagram',
            color: 'yellow',
            percent: 80
        },
        {
            name:'diagram',
            color: 'orange',
            percent: 50
        },
        {
            name:'diagram',
            color: 'blueviolet',
            percent: 80
        },

    ])
    return (
        <>
            <div className="container">
                <Form diagrams={diagrams} setDiagrams={setDiagrams}/>
                <Diagrams diagrams={diagrams} setDiagrams={setDiagrams}/>
            </div>
        </>
    )
}

export default App
