function Register() {
    return (
        <React.fragment>
            <h1>Register</h1>
            <form method="POST" action="/register">
                <label for="name">Nom<input type="text" name="name" placeholder=""></label>
                <label for="email">Email <input type="email" name="email" placeholder="" /></label>
                <button type="submit">register</button>
            </form>
        </React.fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Register />);