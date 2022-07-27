import React from 'react'
import {Chips} from '../Chips'

let rows = []

for (var i = 0; i < 108; i++) {
    rows.push(<Chips></Chips>);
}

export const Board = ({}) => (
   <div className='grid grid-cols-12 bg-blue-400 '>
        {rows}
        
   </div>
)

