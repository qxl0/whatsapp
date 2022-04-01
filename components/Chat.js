import React from 'react'
import styled from 'styled-components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar } from '@material-ui/core'
import getRecipientEmail from '../utils/getRecipientEmail'
import { db, auth } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { doc, addDoc, collection, query, where } from 'firebase/firestore'
const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth)
  const recipientemailref = query(
    collection(db, 'users'),
    where('email', '==', getRecipientEmail(users, user))
  )
  const [recipientSnapshot] = useCollection(recipientemailref)
  const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(users, user)
  return (
    <Container>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
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
