import User from "./lib/user";

async function viewBotFacebook(email: string, password: string, url: string) {
    let sim = new User()
    let fb = sim.facebook()

    await fb.Login(email, password)
    await setTimeout(() => {
        fb.openStreamPage(url)
    }, 5000)
}

export default viewBotFacebook