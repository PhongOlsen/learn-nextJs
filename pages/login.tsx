import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

// const

const Login = () => {
    const { loginWithRedirect, user } = useAuth0();

    useEffect(() => {
        loginWithRedirect({
            appState: {
                returnTo: `${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL}`,
            },
        }).then(() => console.log(user));
    }, [loginWithRedirect, user])

    return (
        <>Loading ...</>
    )
};
export default Login;
