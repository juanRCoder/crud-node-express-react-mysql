import { Button, Container } from "@mui/material";
import ListAllUsers from "./components/ListAllUsers";
import { useState } from "react";
import ModalUsers from "./components/ModalUsers";
// import useUsers from "./users.hooks";

export default function UserLayout() {
  const [modal, setModal] = useState<boolean>(false);
  // const { getUsers } = useUsers();
  const toggleModal = (state: boolean) => {
    setModal(state);
  }
  
// useEffect(() => {
//   getUsers();
// },[]);

  return (
    <Container>
      <h1 className="my-[2rem] text-3xl">CRUD-NODE-REACT-MYSQL</h1>
      <section className="flex flex-col-reverse lg:flex-row gap-10 lg:items-start">
        <ListAllUsers />
        <div className="flex flex-col gap-5 sm:min-w-72">
          <Button variant="contained" color="success" sx={{ py: "10px" }} onClick={() => toggleModal(true)}>
            Agregar Usuario
          </Button>
          <Button variant="contained" color="error" sx={{ py: "10px" }}>
            Eliminar Usuarios
          </Button>
        </div>
      </section>
      {modal && <ModalUsers toggleModal={() => toggleModal(false)} />}
    </Container>
  )
}
