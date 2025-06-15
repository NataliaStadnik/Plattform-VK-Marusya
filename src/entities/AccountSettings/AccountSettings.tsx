import {animated} from 'react-spring'
import {useNavigate} from 'react-router-dom'

import './AccountSettings.css'
import {Button, Error, SettingElement} from '@/shared'
import {
  useLogout,
  useLogoutState,
  useMovieTransitions,
  useProfileState,
} from '@/hooks'
import {Mail} from '@/svg'
import {AppRouter} from '@/api'

const mail = <Mail fill={'white'} />

const AccountSettings = () => {
  const navigate = useNavigate()
  const profile = useProfileState()
  const transitions = useMovieTransitions([profile], () => profile.email)

  const logout = useLogout()
  const {isLoggingOut, logoutError} = useLogoutState()

  const handleSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault()
    void logout()
    navigate(AppRouter.home.path)
  }

  return transitions((style) => (
    <animated.div style={style} className={'container container--set'}>
      <div className="settings title--mb">
        <SettingElement
          name={`${profile.surname} ${profile.name}`}
          element={`${profile.surname[0]}${profile.name[0]}`}
          className="info__name"
          title="Имя Фамилия"
        />
        <SettingElement
          name={profile.email}
          element={mail}
          className="info__mail"
          title="Электронная почта"
        />
      </div>
      <Button
        onClick={handleSubmit}
        isLoading={isLoggingOut}
        name="Выйти из аккаунта"
        isActive
      />
      {logoutError && <Error message={logoutError} />}
    </animated.div>
  ))
}

export default AccountSettings
