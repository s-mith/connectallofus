import '../styles/globals.css'

import { PlayerTag } from '../components/PlayerTag';

// firebase imports
import { auth } from '../firebaseconfig';
import { db } from '../firebaseconfig';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { ref, set, onDisconnect, onValue, onChildAdded } from 'firebase/database';

const colors = 
[
  'red',
  'blue',
  'yellow',
  'purple',
  'orange'
]

function MyApp ({ Component, pageProps }) 
{
  let colorMap =
  [
    { 
      color: 'red' 
    },
    { 
      color: 'blue' 
    }
  ];

  let playerId;
  let playerRef;

  function initGame ()
  {
    const allPlayersRef = ref(db, `players`);
    const board = ref(db, `pieces`);

    onValue(allPlayersRef, (snapshot) =>
    {
      // Fires whenever a change occurs
    });

    onChildAdded(allPlayersRef, (snapshot) =>
    {
      // Fires whenever a new node is added to the tree
      const addedPlayer = snapshot.val();

      colorMap.push
      ({
        color: addedPlayer.color
      });
      console.log(colorMap);
    });
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
          color: randomFromArray(colors),
          pieces: [[1, 1], [1, 2]]
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

      // TODO: Fix this map (not working at all)
      <div>
        {
          colorMap.map (item => 
          {
            <PlayerTag 
              color={item.color}
            />
          })
        }
      </div>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp;

function randomFromArray(array)
{
  return array[Math.floor(Math.random() * array.length)];
}
