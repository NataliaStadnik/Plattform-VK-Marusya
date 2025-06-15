import {AppDispatch, logout, RootState} from '@/store'
import {useDispatch, useSelector} from 'react-redux'

export const useLogoutState = () => {
  return useSelector((state: RootState) => ({
    isLoggingOut: state.profile.isLoggingOut,
    logoutError: state.profile.logoutError,
  }))
}

export const useLogout = () => {
  const dispatch = useDispatch<AppDispatch>()
  return () => dispatch(logout())
}
