import { Role } from "../enum/roles.enum";

export type CreateUserDetails = {
    name: string;
    email: string;
    password: string;
}