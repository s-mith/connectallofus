import React from 'react'
import { Collums } from "../Collums"



export const Board = ({BoardData, handleTurn, turn}) => {
    
    let rows = []


    
    BoardData.forEach(({colors,setColors}) => {
        rows.push(<Collums colors={colors} setColors={setColors} handleTurn={handleTurn} turn={turn}></Collums>)
    });
    
    return (
    <div className='grid grid-cols-32 bg-blue-400 '>
        {rows}
    </div>
)}

