
import { SignIn, SignUp, useAuth } from '@clerk/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './components/Welcome'

function App() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) return <p>Loading...</p>

  return (
      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to={isSignedIn ? "/home" : "/sign-in"}
              replace
            />
          }
        />

        <Route
          path="/sign-in/*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <SignIn
                routing="path"
                path="/sign-in"
                signUpUrl="/sign-up"
                forceRedirectUrl="/home"
              />
            </div>
          }
        />

        <Route
          path="/sign-up"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <SignUp
                routing="path"
                path="/sign-up"
                signInUrl="/sign-in"
                forceRedirectUrl="/home"
              />
            </div>
          }
        />

        <Route
          path="/home"
          element={
            isSignedIn
              ? <Welcome />
              : <Navigate to="/sign-in" replace />
          }
        />

      </Routes>
  )
}

export default App
