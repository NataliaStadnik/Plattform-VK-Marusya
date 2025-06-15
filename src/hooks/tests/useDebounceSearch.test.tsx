import {renderHook, act} from '@testing-library/react'
import {useDebounceSearch} from '../useDebaunceSearch'

jest.useFakeTimers()

describe('useDebounceSearch', () => {
  it('should return initial search value immediately', () => {
    const {result} = renderHook(() => useDebounceSearch('test'))
    expect(result.current).toBe('test')
  })

  it('should update debounced value after delay', () => {
    const {result, rerender} = renderHook(
      ({searchValue}) => useDebounceSearch(searchValue),
      {
        initialProps: {searchValue: 'test'},
      }
    )

    expect(result.current).toBe('test')

    rerender({searchValue: 'updated'})

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(result.current).toBe('updated')
  })

  it('should trim search value before setting debounced value', () => {
    const {result} = renderHook(
      ({searchValue}) => useDebounceSearch(searchValue),
      {
        initialProps: {searchValue: '   spaced  '},
      }
    )

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(result.current).toBe('spaced')
  })

  it('should not update if search value remains the same', () => {
    const {result, rerender} = renderHook(
      ({searchValue}) => useDebounceSearch(searchValue),
      {
        initialProps: {searchValue: 'constant'},
      }
    )

    expect(result.current).toBe('constant')

    rerender({searchValue: 'constant'})

    act(() => {
      jest.advanceTimersByTime(300)
    })

    expect(result.current).toBe('constant')
  })
})
