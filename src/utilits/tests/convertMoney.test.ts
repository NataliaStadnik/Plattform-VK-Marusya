import {convertMoney} from '../converMoney'

describe('convertMoney Function', () => {
  it('formats numbers correctly with thousands separators', () => {
    expect(convertMoney('1000')).toBe('1,000')
    expect(convertMoney('1234567')).toBe('1,234,567')
    expect(convertMoney('987654321')).toBe('987,654,321')
  })

  it('handles edge cases correctly', () => {
    expect(convertMoney('0')).toBe('0')
    expect(convertMoney('99')).toBe('99')
    expect(convertMoney('1000000000')).toBe('1,000,000,000')
  })

  it('converts string numbers to formatted output', () => {
    expect(convertMoney('9999')).toBe('9,999')
    expect(convertMoney('2500')).toBe('2,500')
  })

  it('handles non-numeric input gracefully', () => {
    expect(convertMoney('abc')).toBe('NaN')
  })
})
