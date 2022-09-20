import { Users } from "./data/users";

class Init {
    constructor() {
        Users.getRandomUsers().then((users) => {
            console.log(users);
        })
    }
}