

export default function Diagram({diagram, diagrams, serDiagrams}) {
    return (
        <>
            <div className="block-diagram">
                <div className="diagram">
                    <div style={{backgroundColor: diagram.color, height: diagram.percent + '%'}} className="percentDiagram">

                    </div>
                </div>
                <div>{diagram.name}</div>
            </div>
        </>
    )
}