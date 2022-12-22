import { fireEvent, render } from '@testing-library/react'
import Login from '.'

describe('Login tests', () => {
  describe('When render', () => {

    it('should show two input text', () => {
      const screen = render(<Login />)
      const emailLabel = screen.getByLabelText('Email')
      const passwordLabel = screen.getByLabelText('Password')

      expect(emailLabel).toBeInTheDocument()
      expect(passwordLabel).toBeInTheDocument()
    })

    it('should show a button with the text "Login"', () => {
      const screen = render(<Login />)
      const loginButton = screen.getByText('Login')

      expect(loginButton).toBeInTheDocument()
    })

    it('should show a button with the text "Login as Guest"', () => {
      const screen = render(<Login />)
      const loginAsGuestButton = screen.getByText('Login as Guest')

      expect(loginAsGuestButton).toBeInTheDocument() 
    })
  })
})