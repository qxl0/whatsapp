import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button>Sign in with Google</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div``

const LoginContainer = styled.div``
const Logo = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`
