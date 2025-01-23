import { Button, TextField } from "@mui/material";
import { X } from 'lucide-react';
import { Controller, useForm } from "react-hook-form";
import useUsers from "../users.hooks";
import { User } from "../users.interfaces";

export default function ModalUsers({ toggleModal }: { toggleModal: (bool: boolean) => void }) {
  const { fetchUser } = useUsers();
  const { handleSubmit, formState: { errors }, control } = useForm<User>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = (data: User) => {
    fetchUser(data);
    toggleModal(false);
  }


  return (
    <section
      onClick={() => toggleModal(false)}
      className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex sm:justify-center sm:items-start sm:pt-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-1/2 p-8 rounded-md bg-stone-950"
      >
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl text-white">Nuevo Usuario</h2>
          <X className="cursor-pointer" onClick={() => toggleModal(false)} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: { value: true, message: 'Campo requerido!' } }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" color="primary" label="nombre de usuario" fullWidth={true} />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: 'Campo requerido!' }, pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: 'Por favor, ingresa un email válido'
              }
            }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" color="primary" label="email del usuario" fullWidth={true} sx={{ mt: '1rem' }} />
            )}
          />
          {errors.email && <p className="pt-1 text-xs text-red-500">{errors.email.message}</p>}
          <Controller
            name="password"
            control={control}
            rules={{
              required: { value: true, message: 'Campo requerido!' }, pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
                message: 'La contraseña debe tener al menos 5 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial.'
              }
            }}
            render={({ field }) => (
              <TextField {...field} variant="outlined" color="primary" label="contrasena del usuario" fullWidth={true} sx={{ mt: '1rem' }} />
            )}
          />
          {errors.password && <p className="pt-1 text-xs text-red-500">{errors.password.message}</p>}
          <Button type="submit" variant="contained" color="success" fullWidth={true} sx={{ mt: '1rem', py: '0.6rem' }}>
            Crear Usuario
          </Button>
        </form>
      </div>
    </section>
  )
}
