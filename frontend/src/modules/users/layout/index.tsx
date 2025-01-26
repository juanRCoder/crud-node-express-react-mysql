import { Button, Container } from "@mui/material";
import { lazy, Suspense, useEffect, useState } from "react";
import ModalUsers from "../components/ModalUsers";
import useUsers from "../hooks/users.hooks";
import { User } from "../services/users.services";
import { useStore } from "../../../zustand/store";

const ListAllUsers = lazy(() => import('../components/ListAllUsers'));

export default function UserLayout() {
  const { users } = useStore();
  const [updateUser, setUpdateUser] = useState({} as User);
  const [modal, setModal] = useState({
    create: false,
    update: false
  });
  const { getUsers } = useUsers();

  const toggleModal = (mode: string, state: boolean, user?: User) => {
    setModal((prev) => ({ ...prev, [mode]: state }));
    setUpdateUser(user || {} as User);
  }

  useEffect(() => { getUsers() }, []);

  return (
    <Container>
      <h1 className="my-[2rem] text-xl sm:text-3xl">CRUD-NODE-REACT-MYSQL</h1>
      <section className="flex flex-col-reverse lg:flex-row gap-10 lg:items-start my-10">
        <Suspense fallback={<div>Loading...</div>}>
          <ListAllUsers
            users={users || []}
            onUnpdate={(state, user) => toggleModal("update", state, user)}
          />
        </Suspense>
        <div className="flex flex-col gap-5 sm:min-w-72">
          <Button variant="contained" color="success" sx={{ py: "10px" }} size="small" onClick={() => toggleModal("create", true)}>
            Agregar Usuario
          </Button>
          <Button variant="contained" color="error" sx={{ py: "10px" }} size="small">
            Eliminar Usuarios
          </Button>
        </div>
      </section>
      {modal.create && <ModalUsers toggleModal={() => toggleModal("create", false)} mode="create" />}
      {modal.update && <ModalUsers toggleModal={() => toggleModal("update", false)} mode="update" user={updateUser} />}
    </Container>
  )
}
