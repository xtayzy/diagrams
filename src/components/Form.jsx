import {useState} from "react";

export default function Form({diagrams, setDiagrams}) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [height, setHeight] = useState('');

    function addDiagram(event) {
        event.preventDefault()
        if(name === '' || color === '' || height === ''){
            return
        }
        let newDiagram = {
            name: name,
            color: color,
            percent: height > 100 || height < 0 || typeof height === "string" ? 50 : height,
        }

        setDiagrams([...diagrams, newDiagram])

        setName('')
        setColor('')
        setHeight('')
    }

    return (
        <>
            <form onSubmit={addDiagram} action="">
                <input value={name} onInput={e => setName(e.target.value)} type="text" placeholder="name"/>
                <input value={color} onInput={e => setColor(e.target.value)} type="text" placeholder="color"/>
                <input value={height} onInput={e => setHeight(e.target.value)} type="text" placeholder="0%"/>
                <button>Добавить</button>
            </form>
        </>
    )
}