export class UsersService {
    private registeredUsers = ['Ederson', 'Juliana', 'Wagner', 'Nancy'];

getUsers() {
    return this.registeredUsers.slice();
}

}