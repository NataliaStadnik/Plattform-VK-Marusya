import {useLocation} from 'react-router-dom'

export const usePathname = () => {
  return useLocation().pathname
}
