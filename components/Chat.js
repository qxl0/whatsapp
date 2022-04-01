import React from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar } from '@material-ui/core'
import getRecipientEmail from '../utils/getRecipientEmail'
import { auth } from '../firebase'

const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth)
  const recipientEmail = getRecipientEmail(users, user)
  return (
    <Container>
      <UserAvatar />
      <p>{recipientEmail}</p>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`
