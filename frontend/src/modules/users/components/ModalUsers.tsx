import { Button, TextField } from "@mui/material";
import { X } from 'lucide-react';
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { User } from "../services/users.services";
import useUsers from "../hooks/users.hooks";
import { useStore } from "../../../zustand/store";

type modalUsersProps = {
  toggleModal: (bool: boolean) => void;
  mode: 'create' | 'update';
  user?: User;
}

export default function ModalUsers({ toggleModal, mode, user }: modalUsersProps) {
  const { themeMode } = useStore();
  const { editUser, addUser } = useUsers();

  const { handleSubmit, formState: { errors }, control, setValue } = useForm<User>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  useEffect(() => {
    if (user && mode === 'update') {
      setValue('name', user.name);
      setValue('email', user.email);
      setValue('password', user.password);
    }
  }, [user, mode, setValue]);

  const onSubmit = async (data: User) => {
    if (mode === 'create') await addUser(data); 
    else if (user && user.id) await editUser(data, user.id);
    toggleModal(false);
  };

  return (
    <section
      onClick={() => toggleModal(false)}
      className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex sm:justify-center sm:items-start sm:pt-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-50 w-full sm:w-1/2 p-8 rounded-md backdrop-blur-sm ${themeMode == 'dark' ? 'bg-black' : 'bg-white'}`}
      >
        <div className="mb-4 flex justify-between">
          <h2 className={`text-xl ${themeMode == 'dark' ? 'text-white' : 'text-black'} `}>
            {mode === 'create' ? 'Nuevo' : 'Actualizar'} Usuario
          </h2>
          <X className="cursor-pointer" onClick={() => toggleModal(false)} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: { value: true, message: 'Campo requerido!' } }}
            render={({ field }) => (
              <TextField 
                {...field}
                variant="outlined"
                color="primary"
                label="nombre de usuario"
                fullWidth={true}
              />
            )}
          />
          {errors.name && <p className="pt-1 text-xs text-red-500">{errors.name.message}</p>}
          <Controller
            name="email"
            control={control}
            rules={{
              required: { value: true, message: 'Campo requerido!' }, pattern: {
                value: /^[a-zA-Z0-9._-]+@gmail\.com$/,
                message: 'Por favor, ingresa un email válido'
              }
            }}
            render={({ field }) => (
              <TextField {...field}
              variant="outlined"
              color="primary"
              label="email del usuario"
              fullWidth={true}
              sx={{ mt: '1rem' }} 
            />
            )}
          />
          {errors.email && <p className="pt-1 text-xs text-red-500">{errors.email.message}</p>}
          <Controller
            name="password"
            control={control}
            rules={{
              required: { value: true, message: 'Campo requerido!' }, pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{5,}$/,
                message: 'La contraseña debe tener al menos 5 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial (@$!%*?&#).'
              }
            }}
            render={({ field }) => (
              <TextField {...field}
                variant="outlined"
                color="primary"
                label="contrasena del usuario"
                fullWidth={true}
                sx={{ mt: '1rem' }} 
              />
            )}
          />
          {errors.password && <p className="pt-1 text-xs text-red-500">{errors.password.message}</p>}
          <Button type="submit" variant="contained" color="success" fullWidth={true} sx={{ mt: '1rem', py: '0.6rem' }}>
            {mode === 'create' ? 'Nuevo' : 'Actualizar'} Usuario
          </Button>
        </form>
      </div>
    </section>
  );
}
