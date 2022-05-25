import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import { Navigate } from "react-router-dom"
import Spinner from "../Components/Spinner"
import auth from "../firebase.init"

const RequireAdmin = ({ children }) => {
    const [user] = useAuthState(auth)
    const {
        isLoading,
        data: userData,
    } = useQuery(["userData", user], () =>
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

    if (userData?.roles === 'user') {
        toast('This is a only admin page')
        return <Navigate to={'/'} />
    } else {
        return children
    }
}


export default RequireAdmin