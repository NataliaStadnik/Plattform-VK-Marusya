import {useSelector} from 'react-redux'
import {RootState} from '@/store'

export const useModalState = () => {
  return useSelector((state: RootState) => state.stateModal.value)
}
