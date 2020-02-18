import React from 'react'

const PageCard = (props) => {
    return (
     <div>
        <h1>{props.pageName}</h1>
        <p>{props.pageDesc}</p>
     </div>
    )
}

export default PageCard;