import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import  GoogleButton  from 'react-google-button'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../Redux/appSlice'

export const Login = () => {

  var dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('reuslt', result);
      dispatch(setUser(
        {
          displayName : result.user.displayName,
          email : result.user.email,
          photoURL : result.user.photoURL
        }
      ))
    }
    catch (e) {
      console.log('ERROR', e)
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center  ' style={{
      background: 'linear-gradient(to right top,  black, #010859)'
    }} >
      <div className='w-[370px]  pt-6 pb-6 pl-4  pr-4 shadow-lg grid place-items-center ' style={{ backgroundColor: 'rgba(255, 255, 255)', backdropFilter: "blur(10px)", borderRadius: "10px" }}>
        <div className='w-full flex items-center justify-center  px-2 py-4 '>
          <p className='font-medium text-2xl '> LOGIN /</p> <span className='text-gray-500 pl-2'> Sign Up</span>
        </div>
        <div className="enteries">
          <GoogleButton onClick={signInWithGoogle} />
        </div>
        <div className=' p-4 flex flex-col items-center justify-center'>
          <div className='text-[15px] pb-2 font-medium items-center justify-center flex flex-col'>
            <p>By continuing you agree to FMail's</p> <span className='text-gray-600'>Terms of Service Privacy Policy </span>
          </div>
          <hr className='w-[280px] h-[1px] bg-black' />
          <div className='text-[12px] pt-2 font-medium text-gray-500 '>
            <p>@FMAil-certified 2024</p>
          </div>
        </div>
      </div>

    </div>
  )
}
