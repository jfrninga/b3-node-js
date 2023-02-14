import { Link } from "react-router-dom";
import { Title } from "../components/Title";

export function Login() {
    return (
        <>
            <Title>Login</Title>
            <form method="POST" action="/login">
                <input type="email" name="email" placeholder="" />
                <button type="submit">Login</button>
            </form>
            <Link to="/register">Register</Link>
        </>
    )
}