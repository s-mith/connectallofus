import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Board } from '../components/Board'
import { PlayerTag } from '../components/PlayerTag';
import { useState } from 'react'

// firebase imports
import { auth } from '../firebaseconfig';
import { db } from '../firebaseconfig';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { ref, set, push, onDisconnect, onValue, onChildAdded } from 'firebase/database';

function randomFromArray(array)
{
  return array[Math.floor(Math.random() * array.length)];
}

export default function Home() {

  const width = 32;

  const colors = 
  [
    'red',
    'green',
    'orange', 
  ]

  var players =
  [

  ]

  let board = []

  const boardRef = ref(db, 'pieces');

  for (let i = 0; i<width;i++) {
    const [row, setRow] = useState([]);
    const newPieceRef = push (boardRef);
    set (newPieceRef, 
    {
      color: 'red'
    });
  }
  
  const [turn,setTurn] = useState(0)
  
  // const handleTurn = () => {
    
  //   let newTurn = turn+1
  //   if (newTurn === players.length) {
  //     newTurn = 0
  //   }
  //   setTurn(newTurn)
  // }

  // FIREBASE
  let playerId;
  let playerRef;

  function initGame ()
  {
    const allPlayersRef = ref(db, 'players');

    console.log(playerRef)

    onValue(allPlayersRef, (snapshot) =>
    {
      // Fires whenever a change occurs
      const data = snapshot.val();
    });

    onChildAdded(allPlayersRef, (snapshot) =>
    {
      // Fires whenever a new node is added to the tree
      const addedPlayer = snapshot.val();

      players.push(addedPlayer);
    });

    console.log(players);
  }

  // sign in user
  signInAnonymously(auth).catch((error) =>
  {
    // error handler
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode, errorMessage);
  });

  // when user signs in
  onAuthStateChanged(auth, (user) => 
  {
    console.log(user)
    {
      if (user)
      {
        // Logged in!
        playerId = user.uid;
        playerRef = ref(db, 'players/' + playerId);
        
        // write data to database on player
        set(playerRef,
        {
          color: randomFromArray(colors)
        });

        // remove user when disconnected
        onDisconnect(playerRef).remove();

        // init game
        initGame();
      }
      else
      {
        // Logged out.
      }
    }
  })

  return (
    <>
      <div className='bg-blue-400 h-screen'>
        <Board /* BoardData={board} handleTurn={handleTurn} turn={players[turn]} */></Board>
      </div>
    </>
  )
}
