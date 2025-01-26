import { useCallback, useState } from "react";
import { createUser, fetchAllUsers, User } from "../services/users.services";


export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    const data = await fetchAllUsers();
    setUsers(data || []);
  }, []);

  const CreateUser = async (body: User) => {
    await createUser(body);
    await getUsers();
  }

  return { users, CreateUser, getUsers}
}