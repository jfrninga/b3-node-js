import { Link } from "react-router-dom";
import { Title } from "../components/Title";

export function Register() {
    return (
        <>
            <Title>Register</Title>
            <form method="POST" action="/register">
                <label htmlFor="name">Nom<input type="text" name="name" placeholder="" /></label>
                <label htmlFor="email">Email <input type="email" name="email" placeholder="" /></label>
                <button type="submit">register</button>
            </form>
            <Link to="/login">Login</Link>
        </>
    )
}