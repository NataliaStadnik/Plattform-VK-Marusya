import {findRatingStatus} from '../findRaitingStatus'

describe('findRatingStatus Function', () => {
  it('returns correct rating status for different values', () => {
    expect(findRatingStatus('4.5')).toBe('red')
    expect(findRatingStatus('6')).toBe('lgrey')
    expect(findRatingStatus('7.5')).toBe('green')
    expect(findRatingStatus('9')).toBe('gold')
  })

  it('handles edge cases correctly', () => {
    expect(findRatingStatus('5')).toBe('red')
    expect(findRatingStatus('7')).toBe('lgrey')
    expect(findRatingStatus('8')).toBe('green')
  })
})
