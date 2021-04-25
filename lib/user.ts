import Facebook from "../services/facebook";
import { Browser } from "./browser";

class User {
    browser: Browser

    constructor() {
        this.browser = new Browser('chrome')
    }

    facebook(): Facebook {
        let fb = new Facebook(this.browser)
        return fb
    }
}

export default User