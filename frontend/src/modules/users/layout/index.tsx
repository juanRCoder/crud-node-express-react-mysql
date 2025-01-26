import { Button, Container } from "@mui/material";
import ListAllUsers from "../components/ListAllUsers";
import { useEffect, useState } from "react";
import ModalUsers from "../components/ModalUsers";
import useUsers from "../hooks/users.hooks";
import { User } from "../services/users.services";


export default function UserLayout() {
  const [updateUser, setUpdateUser] = useState({} as User);
  const [modal, setModal] = useState({
    create: false,
    update: false
  });
  const { users, getUsers } = useUsers();

  const toggleModal = (mode: string, state: boolean, user?: User) => {
    setModal((prev) => ({ ...prev, [mode]: state }));
    setUpdateUser(user || {} as User);
  }

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Container>
      <h1 className="my-[2rem] text-3xl">CRUD-NODE-REACT-MYSQL</h1>
      <section className="flex flex-col-reverse lg:flex-row gap-10 lg:items-start">
        <ListAllUsers users={users} onUnpdate={(state, user) => toggleModal("update", state, user)} />
        <div className="flex flex-col gap-5 sm:min-w-72">
          <Button variant="contained" color="success" sx={{ py: "10px" }} onClick={() => toggleModal("create", true)}>
            Agregar Usuario
          </Button>
          <Button variant="contained" color="error" sx={{ py: "10px" }}>
            Eliminar Usuarios
          </Button>
        </div>
      </section>
      {modal.create && <ModalUsers toggleModal={() => toggleModal("create", false)} mode="create" />}
      {modal.update && <ModalUsers toggleModal={() => toggleModal("update", false)} mode="update" user={updateUser} />}
    </Container>
  )
}
