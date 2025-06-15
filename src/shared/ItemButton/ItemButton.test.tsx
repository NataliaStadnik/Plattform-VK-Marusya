import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemButton from './ItemButton'
import {BrowserRouter} from 'react-router-dom'

describe('ItemButton Component', () => {
  const mockData = {
    to: 'https://example.com',
    svg: <svg data-testid="icon" />,
  }

  test('renders ItemButton component correctly', () => {
    render(
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <ItemButton data={mockData} />
      </BrowserRouter>
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', mockData.to)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })
})
