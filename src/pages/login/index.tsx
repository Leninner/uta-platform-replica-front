import type { NextPage } from 'next'

import { InputTextComponent } from "@/components/InputTextComponent"
import { ButtonComponent } from '@/components/ButtonComponent'
import { useEffect, useState } from 'react'
import { PageLayout } from '../../layouts/PageLayout'
import { useLoginMutation } from '../../store/api/loginApi'
import { useAccount } from '../../hooks/useAccount'
import { useRouter } from 'next/router'
import { setAccountToken, setAccountUser } from '../../store/slices/accountSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { AlertComponent } from '../../components/AlertComponent'

const Login: NextPage = () => {
  const dispatch = useAppDispatch()
  const route = useRouter()
  const {isLoggedIn} = useAccount()
  const [login, loginResult] = useLoginMutation()
  const [loginInfo, setLoginInfo] = useState({
    emailLabel: '',
    passwordLabel: '',
  })
  const alertLists = useAppSelector((state) => state.alerts.alertList)
  const loader = useAppSelector((state) => state.loader.loader)

  console.log({alertLists, loader, loginResult})


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  useEffect(()=> {
    if(!loginResult.data?.token) return
    dispatch(setAccountToken(loginResult.data?.token))
    dispatch(setAccountUser(loginResult.data?.user))
  }, [loginResult])

  const handleLogin = async () => {
    try {
      await login({
        email: loginInfo.emailLabel,
        password: loginInfo.passwordLabel,
      })
    } catch (err) {
      console.error('Failed to login: ', err)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      route.replace('/courses')
    }
  }, [isLoggedIn])

  return (
    <PageLayout>
      <PageLayout.Title 
        title="PLATAFORMA EDUCATIVA INSTITUCIONAL" 
        subTitle="FACULTAD DE INGENIERÍA EN SISTEMAS, ELECTRÓNICA E INDUSTRIAL" 
        headerAlignment='center'
        isLoginPage={true}
      />
      <PageLayout.Body>
        <form action="" className="p-12 flex flex-col gap-4 w-1/2 m-auto">
          <InputTextComponent
            id="emailLabel"
            name="emailLabel"
            placeholder="foo@example.com"
            labelText='Email'
            onChange={handleChange}
            type="email"
            showErrors={loginResult.error?.data?.message ? true : false}
          />
          <InputTextComponent
            id="passwordLabel"
            name="passwordLabel"
            placeholder="**********"
            labelText='Password'
            onChange={handleChange}
            type="password"
            showErrors={loginResult.error?.data?.message ? true  : false}
          />

          <ButtonComponent variant="primary" onClick={(e) => {
              e.preventDefault()
              handleLogin()
            }}
            extraClasses="duration-300 ease-in-out justify-center"
            size='extra-large'
            disabled={loginResult.isLoading}
          >
            Login
          </ButtonComponent>
          <ButtonComponent onClick={(e) => {
              e.preventDefault()
            }} 
            variant="primary" 
            extraClasses='duration-300 ease-in-out justify-center'
            size='extra-large'
          >
            Login as Guest
          </ButtonComponent>
          <>
            {
              alertLists.map((alert, index) => {
                return (
                  <AlertComponent message={alert.title ?? ''} type='DANGER' key={index} icon={'EXCLAMATION'} alert={alert}/>
                )
              })
            }
          </>
        </form>
      </PageLayout.Body>
      <PageLayout.Footer>
        <img src="https://auditoriaeducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/01_accesoplataforma.png" alt="video" className='w-1/2 px-12'/>
      </PageLayout.Footer>
    </PageLayout>
   
  )
}

export default Login