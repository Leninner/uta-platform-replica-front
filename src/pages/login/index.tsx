import type { NextPage } from 'next'

import { InputTextComponent } from "@/components/InputTextComponent"
import { ButtonComponent } from '@/components/ButtonComponent'
import { useEffect, useState } from 'react'
import { PageLayout } from '../../layouts/PageLayout'
import { useLoginMutation } from '../../store/api/loginApi'
import { setAccountToken, setAccountUser } from '../../store/slices/accountSlice'
import { useAppDispatch } from '../../store/hooks'
import Head from 'next/head'

const Login: NextPage = () => {
  const dispatch = useAppDispatch()
  const [login, loginResult] = useLoginMutation()
  const [loginInfo, setLoginInfo] = useState({
    emailLabel: '',
    passwordLabel: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  useEffect(() => {
    if (!loginResult.data?.token) return
    dispatch(setAccountToken(loginResult.data?.token))
    dispatch(setAccountUser(loginResult.data?.user))
  }, [loginResult])

  const handleLogin = async () => {
    await login({
      email: loginInfo.emailLabel,
      password: loginInfo.passwordLabel,
    })
  }

  return (
    <>
      <Head>
        <title>Facultad de Ingeniería en Sistemas, Electrónica e Industrial</title>
      </Head>
      <PageLayout>
        <PageLayout.Title
          headerAlignment='center'
        >
          <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/logo-uta.png" alt="some" className='w-40' />
          <div className='flex items-center flex-col mx-5 max-w-lg justify-center text-center'>
            <h1 className={`text-3xl line font-medium text-gray-900`}>PLATAFORMA EDUCATIVA INSTITUCIONAL</h1>
            <p className="mt-1 max-w-2xl font-medium text-md text-gray-900">FACULTAD DE INGENIERÍA EN SISTEMAS, ELECTRÓNICA E INDUSTRIAL</p>
          </div>
          <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/sistemas.png" alt="some" className='w-40' />
        </PageLayout.Title>
        <PageLayout.Body>
          <form action="" className="p-12 flex flex-col gap-4 w-1/2 m-auto">
            <InputTextComponent
              id="emailLabel"
              name="emailLabel"
              placeholder="foo@example.com"
              labelText='Correo electrónico:'
              onChange={handleChange}
              type="email"
              showErrors={loginResult.error?.data?.message ? true : false}
            />
            <InputTextComponent
              id="passwordLabel"
              name="passwordLabel"
              placeholder="**********"
              labelText='Contraseña:'
              onChange={handleChange}
              type="password"
              showErrors={loginResult.error?.data?.message ? true : false}
            />

            <ButtonComponent variant="primary" onClick={(e) => {
              e.preventDefault()
              handleLogin()
            }}
              extraClasses="duration-300 ease-in-out justify-center"
              size='extra-large'
              disabled={loginResult.isLoading}
            >
              Iniciar Sesión
            </ButtonComponent>
            <ButtonComponent onClick={(e) => {
              e.preventDefault()
            }}
              variant="primary"
              extraClasses='duration-300 ease-in-out justify-center'
              size='extra-large'
            >
              Iniciar sesión como invitado
            </ButtonComponent>
          </form>
        </PageLayout.Body>
        <PageLayout.Footer>
          <img src="https://auditoriaeducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/01_accesoplataforma.png" alt="video" className='w-1/2 px-12' />
        </PageLayout.Footer>
      </PageLayout>
    </>
  )
}

export default Login