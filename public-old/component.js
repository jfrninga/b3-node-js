function ChatForm() {
    const [value, setValue] = React.useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSendMessage(value);
        }}>
            <input
                type="text"
                value={value}
                onChange={e => setConstantValue(e.target.value)}>
            </input>
            <button type="submit"> Send</button>
        </form>
    )
}


function Title({children}) {
    return (
        <h1 style= {{ fontFamily: 'Arial', fontSize: ' 2.5rem'}}>{children}</h1>
    )
}