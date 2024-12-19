
export default class LoginDTO {
    constructor(data = {}) {
        this.username = data.username || null;
        this.password = data.password || null;
    }

    toJSON() {
        return  {
            username: this.username,
            password: this.password
        };
    }
}

