export type UserRoles = "reader" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  role: UserRoles;
}
