import React from 'react'

const Titles = ({ pokemon }) => {
    return (
        <div>
            {console.log("--------------------")}
            {
                pokemon.map((p , index) => (<div key={index}>{p}</div>))
                // pokemon.map((p , index) => (console.log(p.name)))
            }
        </div>
    )
}

export default Titles
