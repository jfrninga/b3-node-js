import bodyParser from 'body-parser';
import { Application } from "express-ws";
import { createUser, findUserByEmail } from '../repositories/userRepository';

export function postRegister(app: Application) {
    app.post('/register', bodyParser.urlencoded(), async (req, res) => {
        try {
            console.log(req.body);
            const { name, email } = req.body;
            if (!name || !email) {
                res.status(400).send('Bad Request')
                return
            }
            const user = await createUser(name, email)
            if (!user) {
                res.status(400).send('Email already used')
                return
            }

            res.cookie('ssid', user.id, { signed: true, httpOnly: true, sameSite: true });
            res.redirect('/');
        }
        catch(e) {
            console.error(e)
            res.status(500).send('Internal Server Error');
        }
        
    })
}