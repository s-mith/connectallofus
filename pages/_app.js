import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseconfig';
import { db } from '../firebaseconfig';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const colors = 
[
  'red',
  'blue',
  'yellow'
]

function MyApp ({ Component, pageProps }) 
{
  let playerId;
  let playerRef;

  const color = randomFromArray(colors);

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
        
        set(playerRef, // write data to database on player
        {
          color: 'blue'
        });
      }
      else
      {
        // Logged out.
      }
    }
  })

  return <Component {...pageProps} />
}

export default MyApp;

function randomFromArray(array)
{
  return array[Math.floor(Math.random() * array.length)];
}
