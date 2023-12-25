import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export default function OAuth() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleGoogleClick = async () => {
      try {
        const Provider = new GoogleAuthProvider()
        const auth = getAuth(app)

        const results = await signInWithPopup(auth, Provider);

        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: results.user.displayName,
                email: results.user.email,
                photo: results.user.photoURL,
              }),
        });

        const data = await res.json();
        dispatch(signInSuccess(data));
        navigate('/');
        
      } catch (error) {
         console.log('could not sign in with google', error)
        
      }


  }

  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled: opacity-80'>
      Continue with Google
    </button>
    
    )
}
