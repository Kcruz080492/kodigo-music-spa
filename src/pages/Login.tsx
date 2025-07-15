import '../styles/Login.css'

const Login = () => {
  return (
    <section className="login-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  )
}

export default Login