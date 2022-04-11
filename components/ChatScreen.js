import styled from 'styled-components'
import { auth } from '../firebase'
import MoreVertIcon from '@material-ui/icons/MoreVertIcon'
import AttachFireIcon from '@material-ui/icons/AttachFireIcon'

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
            <AttachFireIcon />
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
