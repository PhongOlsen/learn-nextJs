import {ChildrenType} from "../utils/others";
import React from "react";
import {Auth0Provider} from "@auth0/auth0-react";
// import {useRouter} from "next/router";

type AuthProviderProps = {
    children: ChildrenType;
};

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({children}) => {
    // const router = useRouter();

    return (
        <Auth0Provider
            domain={`${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`}
            clientId={`${process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}`}
            authorizationParams={{
                redirect_uri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL
            }}
        >
            {children}
        </Auth0Provider>
    )
};
export default AuthProvider;
