import React from 'react'
import { Collums } from "../Collums"

import { db } from '../../firebaseconfig';
import { ref, get } from 'firebase/database';
import { PlayerTag } from '../PlayerTag';

const board = ref(db, `pieces`);

let pieces = [];

export const Board = ({BoardData, handleTurn, turn}) => {

    // get the board from the database
    get (board).then ((snapshot) =>
    {
        const data = snapshot.val();

        console.log(snapshot.exists() ? data : "No data avaliable.")
        console.log(data['-N85x9zH33cvySpDma-J']);
    })
    
    // let rows = []
    
    // BoardData.forEach(({colors,setColors}) => {
    //     rows.push(<Collums colors={colors} setColors={setColors} /* handleTurn={handleTurn} turn={turn} */></Collums>)
    // });
    
    // return (
    // <div className='grid grid-cols-32 bg-blue-400 '>
    //     {rows}
    // </div>

    return (
        <>

            <h1>hi!</h1>

        </>
    )
}

