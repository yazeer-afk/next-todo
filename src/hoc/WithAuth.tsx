import { FC } from "react";
import Router from "next/router";
import { useAuth } from "@/context/AuthContext";

export default function withAuth(WrappedComponent: FC<any>) {
    const WithAuth = (props: any) => {
        const { currentUser } = useAuth();
        if (!currentUser && Router.pathname !== "/sign") {
            Router.push("/sign");
        } else if (currentUser && Router.pathname === "/sign") {   
            Router.push("/");
        } else {
            return <WrappedComponent {...props} />;
        }
    };
    WithAuth.displayName = `WithAuth(${
        WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    return WithAuth;
}
