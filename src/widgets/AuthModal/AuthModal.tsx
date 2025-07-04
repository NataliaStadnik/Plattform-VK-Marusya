import {useState} from 'react'

import './AuthModal.css'
import {CloseButton} from '@/shared'
import logo from '@/assets/img/marusia-black.svg'
import {LoginForm, RegisterForm, SuccessForm} from '@/entities'
import {useClickOutside, useSetModalState} from '@/hooks'

export type ModalStates = 'login' | 'register' | 'succsess'

const AuthModal = () => {
  const {hideModal} = useSetModalState()
  const [modalState, setModalState] = useState<ModalStates>('login')
  const ref = useClickOutside('backdrop', hideModal)

  return (
    <div className="backdrop" ref={ref}>
      <div className={`login login__${modalState}`}>
        <CloseButton onClick={hideModal} name={'login'} fill={'black'} />
        <img className="login__img" src={logo} alt="Logo" />

        {modalState === 'login' && <LoginForm changeMode={setModalState} />}

        {modalState === 'register' && (
          <RegisterForm changeMode={setModalState} />
        )}

        {modalState === 'succsess' && (
          <SuccessForm changeMode={setModalState} />
        )}
      </div>
    </div>
  )
}

export default AuthModal
