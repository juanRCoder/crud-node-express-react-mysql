import { Button, TextField, Typography } from "@mui/material";

export default function ModalUsers({ toggleModal }: { toggleModal: (bool: boolean) => void }) {
  return (
    <section
      onClick={() => toggleModal(false)}
      className="fixed top-0 left-0 min-h-screen w-full backdrop-blur-sm flex sm:justify-center sm:items-start sm:pt-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:w-1/2 p-8 rounded-md bg-slate-100 text-black dark:bg-stone-950 dark:text-white"
      >
        <Typography variant="h5" component="h2">Nuevo Usuario</Typography>
        <TextField label="Username" variant="outlined" sx={{ my: "1rem" }} className="w-full" />
        <Button variant="contained" color="success" className="w-full">
          Registrar usuario
        </Button>
      </div>
    </section>
  )
}
