import {usePathname} from './usePathname'
import {useDebounceSearch} from './useDebaunceSearch'
import {useLogout, useLogoutState} from './useLogout'
import {useSetModalState} from './useSetModalState'
import {useModalState} from './useModalState'
import {useGenres, useGenresLoaded, useFetchGenres} from './useGenres'
import {useClickOutside} from './useClickOutside'
import {useMovieTransitions, transitionStyles} from './useMovieTransitions'
import { useFetchProfile, useProfileLoaded, useProfileState } from './useFetchProfile'

export {
  usePathname,
  useDebounceSearch,
  useProfileState,
  useSetModalState,
  useModalState,
  useFetchGenres,
  useGenres,
  useGenresLoaded,
  useClickOutside,
  useMovieTransitions,
  transitionStyles,
  useFetchProfile,
  useProfileLoaded,
  useLogout,
  useLogoutState,
}
