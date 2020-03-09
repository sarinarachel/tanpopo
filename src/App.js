import React, {useContext, useState} from 'react';
import './App.css';
import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';

const theme = createMuiTheme({}, jaJP);

const context = React.createContext()

function App() {
  const [state, setState] = useState({
    searchTerm:''
  })
  return <context.Provider value={{
    ...state, 
    set: v=> setState(current=> {
      return{...current, ...v}})
  }}>
    <ThemeProvider theme={theme}>
      <Header />
      <Navigation />
      <Body />
    </ThemeProvider>
  </context.Provider>
}

function Header(){
  return (
  <Box className="header" >
    <Box className="title-back" fontSize="4rem">
      タンポポとラーメン
    </Box>
    <Box className="image-1"/>
    <Box className="image-2"/>
  </Box>
  )
}

function Navigation(){
  const ctx = useContext(context)
  return(
    <Container className="nav-wrap" >
      <ButtonGroup className="navigation" size="large" variant="contained" color="primary" aria-label="contained primary button group">
        <Button>タンポポの映画</Button>
        <Button>ラーメンの食べ方</Button>
        <Button>ラーメンのオノマトペ</Button>
      </ButtonGroup>
    </Container>
  )
}

function Body(){
  return(
  <Container className="body" maxWidth="md">
    <Box className="section">
      <Box className="title" fontSize="2rem" >
        タンポポの映画
      </Box>
      <Box>
      タンポポは１９８５年のコメディ映画です。二人のトラック運転手がタンポポという女性の詰まらなくて売れないラーメン家を立て直して助ける物語です。トラック運転手ゴローは先生になって、厳しい修業が始まります。一番美味しいレシピを探すためにタンポポは色々なラーメン屋に行ってラーメンの秘密を得てみます。もっと面白い登場人物が出て、一緒にタンポポラーメンを開きます。

      </Box>
    </Box>
  </Container>
  )
}

export default App;