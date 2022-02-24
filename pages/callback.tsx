import {useRouter} from "next/router";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";

const Callback = () => {
    const router = useRouter();
    const { user, getAccessTokenSilently, getIdTokenClaims, isLoading, isAuthenticated, error } = useAuth0();

    useEffect(() => {
        router.push('/').then();
    }, [router])
    return <></>
}
export default Callback;
