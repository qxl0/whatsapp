import styled from 'styled-components'
import { auth } from '../firebase'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { Avatar, Button, IconButton } from '@material-ui/core'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import { collection, query, orderBy } from 'firebase/firestore'
import Message from './Message'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth)
  const router = useRouter()
  const ref = query(
    collection(db, 'chats', router.query.id, 'messages'),
    orderBy('timestamp', 'asc')
  )
  const [messagesSnapshot] = useCollection(ref)

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))
    }
  }

  return (
    <Container>
      <Header>
        <Avatar />

        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last Seen...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticonIcon />
        <Input />
        <MicIcon />
      </InputContainer>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``
const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`
const Input = styled.input`
  flex: 1;
  border: none;
  outline: 0;
  border-radius: 10px;
  padding: 20px;
  background-color: whitesmoke;
  margin-left: 15px;
  margin-right: 15px;
`
const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`
const HeaderIcons = styled.div``

const EndOfMessage = styled.div``

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`
