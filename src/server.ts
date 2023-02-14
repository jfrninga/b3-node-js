import expressWs, { Application } from "express-ws";
import express, { NextFunction, Request, Response } from "express";
import cookieParser from 'cookie-parser';
import path from 'path';
import { getLogin } from "./routes/getLogin";
import { getRoot } from "./routes/getRoot";
import { postLogin } from "./routes/postLogin";
import { getWs } from "./routes/getWs";
import { authenticationMiddleware } from "./middlewares/authenticationMiddleware";
import { getRegister } from "./routes/getRegister";
import { postRegister } from "./routes/postRegister";
import { getChat } from "./routes/getChat";
import { updateUser } from "./routes/updateUser";
import { delUser } from "./routes/delUser";
import { getLogout } from "./routes/getLogout";
// import { getWsPosts } from "./routes/getWsPosts";

const SECRET_KEY = 'MySecretKeyIsAwesome';

function main() {
    const app = express() as unknown as Application;
    expressWs(app);
    // const wsServer = new WebSocketServer({ server: app });
    const sockets = new Map();

    app.use((req, res, next) => {
        console.log(new Date().toISOString(), req.method, req.path)
        next()
    })

    app.use(cookieParser(SECRET_KEY));
    app.use(express.static(path.join(__dirname, '../public')))

    getLogin(app)
    postLogin(app)
    getRegister(app)
    postRegister(app)

    app.use(authenticationMiddleware);
    getLogout(app)
    getChat(app)
    getRoot(app)
    updateUser(app)
    delUser(app)
    getWs(app, sockets)
    // getWsPosts(app, sockets);

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(error)
        res.status(500).send('Internal Server Error')

        next()

    })


    app.listen(3000, () => {
        console.log('Exemple app listening on port 3000!');
    });
}

main()