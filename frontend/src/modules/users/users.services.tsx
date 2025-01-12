import { HOSTLOCAL_BACK } from "../../config/env.config"
import { User } from "./users.interfaces";

export const fetchAllUsers = async (endpoint: string): Promise<User[] | null> => {
  try {
    const response = await fetch(`${HOSTLOCAL_BACK}${endpoint}`);
    if (!response.ok) throw new Error("No se ha podido realizar la solicitud");
    const data = await response.json();
    return data.users;
  } catch(error) {
    console.error(error);
    return null;
  }
}