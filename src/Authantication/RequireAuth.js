import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import Spinner from "../Components/Spinner"
import auth from "../firebase.init"

const RequireAuth = () => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    if (loading) {
        return <Spinner />
    }
    if (!user) {
        toast.error('Your should login first')
        return <Navigate to="/login" state={{ from: location }} replace />
    } else {
    return <Outlet />
    }

}


export default RequireAuth