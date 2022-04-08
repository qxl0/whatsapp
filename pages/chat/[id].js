import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import {
  orderBy,
  query,
  collection,
  getDoc,
  getDocs,
  doc,
  where,
} from 'firebase/firestore'
import { db } from '../../firebase'
import { Collections } from '@material-ui/icons'

const Chat = ({ chat, messages }) => {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  )
}

export default Chat

export async function getServerSideProps(context) {
  console.log('id:', context.query.id)
  const ref = query(
    collection(db, 'chats', context.query.id, 'messages'),
    orderBy('timestamp', 'asc')
  )

  const messagesRes = await getDocs(ref)
  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }))
  console.log('messages', messages)
  // PREF the chat
  const ref2 = doc(db, 'chats', context.query.id)
  const chatRes = await getDoc(ref2)
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  }

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  }
}
const Container = styled.div`
  display: flex;
`

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
