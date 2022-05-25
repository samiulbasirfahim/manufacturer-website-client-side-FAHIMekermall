import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { Navigate } from "react-router-dom"
import Spinner from "../Components/Spinner"
import auth from "../firebase.init"

const OnlyUser = ({ children }) => {
    const [user] = useAuthState(auth)
    const {
        isLoading,
        data: userData,
    } = useQuery("userData", () =>
        fetch("https://manufacturer-website-server.herokuapp.com/user/" + user.email, {
            headers: {
                authorization_email: user.email,
                authorization_token: `Bearer ${localStorage.getItem(
                    "authorization_token"
                )}`,
            },
        }).then((res) => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    if (userData.roles === 'admin') {
        return <Navigate to={'/'} />
    } else {
        return children
    }
}


export default OnlyUser