import {useAuth0} from "@auth0/auth0-react";
import {useEffect} from "react";

// const

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        loginWithRedirect({
            appState: {
                returnTo: `${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL}`,
            },
        }).then();
    }, [loginWithRedirect])

    return (
        <>Loading ...</>
    )
};
export default Login;
