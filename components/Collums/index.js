import React from 'react'


import {Chips} from '../Chips'



export const Collums = ({colors, setColors, handleTurn, turn}) => {
    
    
    let chips = []  

    if (colors.length > 0) { 
        for(let i = 0; i<colors.length; i++){
            chips.push(<Chips chip={colors[i]}></Chips>)
        }
    }

    while (chips.length < 18) {
        chips.push(<Chips color="slate"></Chips>)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (colors.length < 18) {
            setColors([...colors,{color:turn.color}])
            handleTurn()
        }
        
      };

    

    chips.reverse()
    
    return (
   <button className='group' onClick={onSubmit}>
        {chips}
   </button>
)}

