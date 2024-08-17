import Diagram from "./Diagram.jsx";


export default function Diagrams({diagrams, setDiagrams}) {
    return (
        <>
            <div className="diagrams">
                {diagrams.map((e, index) => <Diagram key={index}
                                            diagrams={diagrams}
                                            setDiagrams={setDiagrams}
                                            diagram={e}
                />)}
            </div>
        </>
    )
}