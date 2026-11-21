import { useClerk } from '@clerk/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const {signOut} = useClerk();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/sign-in');
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Page</h1>
        <p className="text-lg mb-8">You are successfully signed in!</p>
        <button onClick={handleSignOut} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Welcome