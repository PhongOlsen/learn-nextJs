import {useAuth0, LogoutOptions} from "@auth0/auth0-react";
import {useEffect} from "react";

const options = {
    returnTo: `${process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL}/login`,
} as LogoutOptions;

const Logout = () => {
    const { logout } = useAuth0();

    useEffect(() => {
        logout(options);
    }, [logout])

    return <>Loading ...</>
};
export default Logout
