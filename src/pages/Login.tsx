import { useForm } from 'react-hook-form'
import '../styles/Login.css'


type FormData = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('Datos enviados:', data)
    alert(`Bienvenido/a ${data.email}`)
  }

  return (
    <section className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          {...register('email', { required: 'El correo es obligatorio' })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register('password', { required: 'La contraseña es obligatoria' })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  )
}

export default Login
