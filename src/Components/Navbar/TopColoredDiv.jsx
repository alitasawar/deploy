import React from 'react'

const TopColoredDiv = ({colors}) => {
    const colorSettings=(cl)=>{return {
        width:100/colors.length+'%',
        background:'#'+cl
    }}
    return (
        <div className='top-colors-div'>
            {colors.map(cl=><div key={cl} className="color" style={colorSettings(cl)}></div>)}            
        </div>
    )
}

export default TopColoredDiv;