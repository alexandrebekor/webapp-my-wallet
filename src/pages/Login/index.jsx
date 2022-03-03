const Login = () => {
  const handleLogin = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_FIREBASE_AUTH_URL}?key=${
        import.meta.env.VITE_FIREBASE_KEY
      }`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: `${import.meta.env.VITE_FIREBASE_EMAIL}`,
          password: `${import.meta.env.VITE_FIREBASE_PASSWORD}`,
          returnSecureToken: true
        })
      }
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <p>Login</p>
      <button onClick={handleLogin}>Logar</button>
    </>
  )
}

export default Login
