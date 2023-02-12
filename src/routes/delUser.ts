import { Application } from "express-ws";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { deleteUser } from "../repositories/userRepository";

export function delUser(app: Application) {
    app.get('/delete', authenticationMiddleware, async (req, res) => {
        const user = await deleteUser(req.signedCookies.ssid)
        if (!user) {
            res.clearCookie('ssid')
            res.redirect('/login')
            return
        }

        res.send('profile deleted')
    })
}