import type { NextPage } from 'next'

import { InputTextComponent } from "@/components/InputTextComponent"
import { ButtonComponent } from '@/components/ButtonComponent'
import { useState } from 'react'

const Login: NextPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    emailLabel: '',
    passwordLabel: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }
    
  return (
    <form action="" className="p-12 flex flex-col gap-4">
      <InputTextComponent
        id="emailLabel"
        name="emailLabel"
        placeholder="foo@example.com"
        onChange={handleChange}
      />
      <InputTextComponent
        id="passwordLabel"
        name="passwordLabel"
        placeholder="**********"
        onChange={handleChange}
      />

      <ButtonComponent variant="white" onClick={(e) => {
        e.preventDefault()
        console.log('login')
        console.log(loginInfo)
      }}>
        Login
      </ButtonComponent>
      <ButtonComponent onClick={(e) => {
        e.preventDefault()
        console.log('login as guest')
      }} variant="white">
        Login as Guest
      </ButtonComponent>
    </form>
  )
}

export default Login