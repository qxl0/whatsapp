import { Avatar, Button, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/search'

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

      <Search>
        <SearchIcon />
        <SearchInput />
      </Search>

      <SidebarButton>Start a new chat</SidebarButton>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`
const SidebarButton = styled(Button)`
  width: 100%;
`
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
const IconsContainer = styled.div``
