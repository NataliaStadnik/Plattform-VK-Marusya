import {act, renderHook} from '@testing-library/react'
import {MemoryRouter, Route, Routes, useNavigate} from 'react-router-dom'
import {usePathname} from '../usePathname'

const wrapper = ({children}: {children: React.ReactNode}) => (
  <MemoryRouter
    initialEntries={['/initial']}
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
  >
    <Routes>
      <Route path="*" element={children} />
    </Routes>
  </MemoryRouter>
)

describe('usePathname', () => {
  it('should return the current pathname', () => {
    const {result} = renderHook(() => usePathname(), {wrapper})
    expect(result.current).toBe('/initial')
  })

  it('should update when the pathname changes', () => {
    const {result} = renderHook(
      () => {
        const navigate = useNavigate()
        return {pathname: usePathname(), navigate}
      },
      {wrapper}
    )

    expect(result.current.pathname).toBe('/initial')

    act(() => {
      result.current.navigate('/new-path')
    })

    expect(result.current.pathname).toBe('/new-path')
  })
})
