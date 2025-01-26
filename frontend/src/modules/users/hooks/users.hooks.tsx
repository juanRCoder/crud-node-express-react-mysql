import { createUser, deleteUser, getAllUsers, updateUser, User } from "../services/users.services";
import { useStore } from "../../../zustand/store";


export default function useUsers() {
  const { setUsers } = useStore();

  const getUsers = async () => {
    const data = await getAllUsers();
    setUsers(data || []);
  };

  const addUser = async (body: User) => {
    await createUser(body);
    await getUsers();
  }

  const  editUser = async (body: Partial<User> ,id: string) => {
    await updateUser(body, id);
    await getUsers();
  }

  const removeUser = async (id: string) => {
    await deleteUser(id);
    await getUsers();
  }

  return { removeUser, editUser, addUser, getUsers}
}