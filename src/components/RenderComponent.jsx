import React from 'react'

function RenderComponent() {
    let fruits = ["Apple", "Mango", "Banana"];
    return (
        <div>
            <h2>Fruits List</h2>
            <ul>
                {fruits.map((fruit,index) => {
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </div>
    )
}

export default RenderComponent
