import { useEffect, useState } from "react";
import { User } from "./users.interfaces";
import { fetchAllUsers } from "./users.services";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const effectAllUser = async () => {
      const data = await fetchAllUsers('/users/all');
      if (data) setUsers(data);
    }
    effectAllUser();
  }, [])
  return { users }
}