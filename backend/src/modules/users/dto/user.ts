export interface createUserDTO {
  name: string;
  email: string;
  password: string;
}

export type updateUserDTO = Partial<createUserDTO>;