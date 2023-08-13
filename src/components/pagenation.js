import React from 'react'

const Pagenation = (props) => {
    return (
        <div>
            {props.prevPage && (<button onClick={props.prevPage}>previuos</button>)}
            {props.nextPage && <button onClick={props.nextPage}>next</button>}
        </div>
    )
}

export default Pagenation
