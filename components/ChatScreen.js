import styled from 'styled-components'
import { auth } from '../firebase'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { Avatar, Button, IconButton } from '@material-ui/core'

const ChatScreen = () => {
  const [user] = useAuthState(auth)
  const router = useRouter()
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
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``
const Header = styled.div``

const HeaderInformation = styled.div``
const HeaderIcons = styled.div``
