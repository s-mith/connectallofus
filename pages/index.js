import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Board } from '../components/Board'
import { useState } from 'react'


export default function Home() {

  const width = 32;

  const players = [
    {color:"red"},
    {color:"orange"},
    {color:"green"},
  ]

  let board = []

  for (let i = 0; i<width;i++) {
    const [row,setRow] = useState([]);
    board.push({colors:row,setColors:setRow})
  }
  
  const [turn,setTurn] = useState(0)
  
  const handleTurn = () => {
    
    let newTurn = turn+1
    if (newTurn === players.length) {
      newTurn = 0
    }
    setTurn(newTurn)
  }

  return (
    <div className='bg-blue-400 h-screen'>
      <Board BoardData={board} handleTurn={handleTurn} turn={players[turn]}></Board>
    </div>

  )
}
