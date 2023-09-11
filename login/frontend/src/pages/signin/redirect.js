function Redirect() {
    let code = new URL(window.location.href).searchParams.get('code');

    return (
        <div>
            <h1>Redirect</h1>
        </div>
    );
}

export default Redirect;