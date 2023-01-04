import path from "path";
import { Application } from "express-ws";

export function getLogin(app: Application) {
    app.get('/login', (req, res) => {
        // const ssid = parseInt(req.signedCookies.ssid ?? '', 10)
        if (req.signedCookies.ssid) {
            res.redirect('/')
            return
        }
        res.sendFile(path.join(__dirname, '../../pages/login.html'))
    })
}