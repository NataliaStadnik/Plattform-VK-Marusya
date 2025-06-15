import {getLanguageName} from '../getLanguageName'

describe('getLanguageName Function', () => {
  it('returns correct language name for valid codes', () => {
    expect(getLanguageName('en')).toBe('Английский')
    expect(getLanguageName('fr')).toBe('Французский')
    expect(getLanguageName('de')).toBe('Немецкий')
  })

  it('capitalizes the first letter correctly', () => {
    const result = getLanguageName('es')
    expect(result[0]).toBe(result[0].toUpperCase())
  })

  it('returns default value for unknown codes', () => {
    expect(getLanguageName('xyz')).toBe('Неизвестный язык')
    expect(getLanguageName('')).toBe('Неизвестный язык')
  })
})
