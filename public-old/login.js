function Login() {
    return (
        <React.fragment>
            <h1>Login</h1>
            <form method="POST" action="/login">
                <input type="email" name="email" placeholder="" />
                <button type="submit">Login</button>
            </form>
            <a href="/register"><button type="submit" class="btn">register</button></a>
        </React.fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login />);