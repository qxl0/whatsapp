import { Avatar, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``
const Header = styled.div``
const UserAvatar = styled(Avatar)``

const IconsContainer = styled.div``
