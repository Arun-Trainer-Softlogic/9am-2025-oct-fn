import Notification from "./Notification";


function LoginStatus() {

    const isLoggedIn = false;



    return (
        <>
            <h2> {isLoggedIn ? "welcome Back " : "Please Login"}</h2>

            <Notification />

        </>

    )


}

export default LoginStatus