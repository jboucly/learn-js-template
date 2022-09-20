import { Axios } from "axios";

export class Users {
    /**
    *  @description Return list for random users
    */
    static async getRandomUsers(): Promise<any> {
        try {
            const axios = new Axios();
            const res = await axios.get("https://random-data-api.com/api/users/random_user?size=100");
            return res.data;
        } catch (err) {
            console.error(`[INDEX JS ERROR] : ${err}`);
        }
    }
}