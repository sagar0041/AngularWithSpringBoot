import { Roles } from './roles';

export class User {

    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public roles: any,
        public dept: string,
    ) { }
}