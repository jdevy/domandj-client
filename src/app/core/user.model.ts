export interface User {
  username: string;
  roles?: string[];
  // ajoute ces 2 params pour signup
  password: string;
  email: string;
}
