import { useForm } from 'react-hook-form'

// Tipado para los datos del formulario
type FormData = {
  email: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  // Esta función maneja el envío del formulario y valida los campos de entrada
  const onSubmit = (data: FormData) => {
    console.log('Datos validados:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="Correo electrónico"
      />
      {errors.email && <span>Este campo es obligatorio</span>}

      <input
        {...register('password', { required: true, minLength: 6 })}
        type="password"
        placeholder="Contraseña"
      />
      {errors.password && <span>Debe tener al menos 6 caracteres</span>}

      <button type="submit">Iniciar Sesión</button>
    </form>
  )
}

export default LoginForm