import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'

const Chat = () => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer></ChatContainer>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
`

const ChatContainer = styled.div``
