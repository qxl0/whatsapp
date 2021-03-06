import { Avatar, Button, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/search'
import * as EmailValidator from 'email-validator'
import { signOut } from 'firebase/auth'
import { doc, addDoc, collection, query, where } from 'firebase/firestore'
import { db, auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Chat from './Chat'

const Sidebar = () => {
  const [user] = useAuthState(auth)
  const userchatref = query(
    collection(db, 'chats'),
    where('users', 'array-contains', user?.email)
  )
  const [chatSnapshot] = useCollection(userchatref)
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('logged out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createChat = () => {
    const input = prompt(
      'Plse enter an email address for the user you wish to chat with'
    )

    if (!input) return null

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input != user.email
    ) {
      const docRef = addDoc(collection(db, 'chats'), {
        users: [user.email, input],
      })
    }
  }

  const chatAlreadyExists = (recipentEmail) => {
    return !!chatSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipentEmail)?.length > 0
    )
  }
  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={logout} />
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

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
      {chatSnapshot?.docs.map((chat) => {
        console.log('chat data is: ', chat.id, chat.data())
        return <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      })}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
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

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
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
