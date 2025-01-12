import { Button, Container, Typography } from "@mui/material";
import ListAllUsers from "./components/ListAllUsers";
import { useState } from "react";
import ModalUsers from "./components/ModalUsers";

export default function UserLayout() {
  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = (state: boolean) => {
    setModal(state);
  }
  return (
    <Container>
      <Typography variant="h4" component="h1" align="left" sx={{ my: '2rem' }}>
        CRUD-NODE-REACT-MYSQL
      </Typography>
      <section className="flex flex-col-reverse sm:flex-row gap-10">
        <ListAllUsers />
        <section className="flex flex-col gap-5 sm:min-w-72">
          <Button variant="contained" color="success" sx={{ py: "10px" }} onClick={() => toggleModal(true)}>
            Agregar Usuario
          </Button>
          <Button variant="contained" color="error" sx={{ py: "10px" }}>
            Eliminar Usuarios
          </Button>
        </section>
      </section>
      {modal && <ModalUsers toggleModal={()=>toggleModal(false)}/> }
    </Container>
  )
}
