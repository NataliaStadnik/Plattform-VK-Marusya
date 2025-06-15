import {useDispatch} from 'react-redux'
import {openModal, closeModal} from '@/store'

export const useSetModalState = () => {
  const dispatch = useDispatch()

  const showModal = () => dispatch(openModal())
  const hideModal = () => dispatch(closeModal())

  return {showModal, hideModal}
}
