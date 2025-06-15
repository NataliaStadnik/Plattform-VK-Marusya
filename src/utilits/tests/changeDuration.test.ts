import {changeDuration} from '../changeDuration'

describe('changeDuration Function', () => {
  it('converts minutes into hours and minutes correctly', () => {
    expect(changeDuration(125)).toBe('2 ч 5 мин')
    expect(changeDuration(60)).toBe('1 ч 0 мин')
    expect(changeDuration(30)).toBe('0 ч 30 мин')
    expect(changeDuration(0)).toBe('0 ч 0 мин')
  })

  it('handles edge cases correctly', () => {
    expect(changeDuration(1)).toBe('0 ч 1 мин')
    expect(changeDuration(59)).toBe('0 ч 59 мин')
    expect(changeDuration(120)).toBe('2 ч 0 мин')
  })
})
