import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate, removeAuth } from '../../redux/features/authSlice'

function useAuth() {
    const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated.isAuthenticated)
    const dispatch = useDispatch()
    const authenticateUser = () => dispatch(authenticate())
    const removeAuthenticateUser = () => dispatch(removeAuth())
    return {isAuthenticated,authenticateUser, removeAuthenticateUser}
}

export {useAuth}