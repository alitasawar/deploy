import React from 'react'

const UlWrapper = ({dataArr:data,ChildLiComponent}) => {
    return (
        <ul>
            {data.map((dItem, i) => <ChildLiComponent 
            {...dItem} key={i} />)}
        </ul>
    )
}

export default UlWrapper;