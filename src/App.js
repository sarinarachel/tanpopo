import React, {useContext, useState} from 'react';
import './App.css';
import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { jaJP } from '@material-ui/core/locale';
import Image from 'material-ui-image';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { ArrowLeft, ArrowRight } from '@material-ui/icons';

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
      <Box className="title" >
        タンポポの映画
      </Box>
      <Box className="twocol">
        <Box className="paraone" fontSize="24px">
          タンポポは１９８５年のコメディ映画です。二人のトラック運転手がタンポポという女性の詰まらなくて売れないラーメン家を立て直して助ける物語です。トラック運転手ゴローは先生になって、厳しい修業が始まります。一番美味しいレシピを探すためにタンポポは色々なラーメン屋に行ってラーメンの秘密を得てみます。もっと面白い登場人物が出て、一緒にタンポポラーメンを開きます。
        </Box>
        <Box className="poster">
          <Image className="img" src="https://e.snmc.io/i/300/w/b953e4b5e548e41d86b803d9bac31bdd/7837640" />
        </Box>
      </Box>
      <Box　className="subtitle" >
        登場人物
      </Box>
      
      <Box>
        <Carousel
          arrowLeft={<ArrowLeft fontSize="large"/>}
          arrowRight={<ArrowRight fontSize="large"/>}
          addArrowClickHandler
        >
          <Box className="slide" >
            <Box className="tanpopo">

            </Box>
            <Box className="slide-cont">
              <Box　className="subtitle" >
                タンポポ
              </Box>
              <Box className="char">
                演: 宮本信子
              </Box>
              <Box className="para">
                売れないラーメン屋の店主。夫が亡くなった時、彼のラーメン屋を一所懸命営んだけど、ラーメンの作り方があまり分かりません。でも、ゴローとガンが助けてラーメンについて学ぶことができます。
              </Box>
            </Box>
          </Box>
          <Box className="slide" >
            <Box className="goro">

            </Box>
            <Box className="slide-cont">
              <Box　className="subtitle" >
                ゴロー
              </Box>
              <Box className="char">
                演: 山崎努
              </Box>
              <Box className="para">
                トラック運転手です。偶然にタンポポのラーメン屋に行きました。よく戦いに入って、前はボクサーでした。ラーメンについてたくさんしています。
              </Box>
            </Box>
          </Box>        
          <Box className="slide" >
            <Box className="gun">

            </Box>
            <Box className="slide-cont">
              <Box　className="subtitle" >
                ガン
              </Box>
              <Box className="char">
                演: 渡辺謙
              </Box>
              <Box className="para">
              ゴローとトラックを運転します。映画の冒頭でラーメンの食べ方について本を読んでいました。ガンもタンポポのラーメン屋を立て直して助けます。

              </Box>
            </Box>
          </Box>        
        </Carousel>
      </Box>
    </Box>

    <Box className="section">
      <Box className="title" >
        ラーメンの食べ方
      </Box>
      <Box className="para">
        タンポポでラーメンの食べ方について面白い場面があります。ラーメンは厳しい食べ方を守りたい人がいますが、この場面がその人をからかっています。場面を見ましょう！
      </Box>
      
      <Box className="embed">
        <iframe width="80%" height="400px" title="ramen-master"
          src="https://www.youtube.com/embed/6WrkdTrrwew?start=19" 
          frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
      </Box>
      <Box className="para">
        最初の老人の厳しい食べる方じゃなくて、自由に食べるほうがいいです。あとはスパゲティーのシーンから先生が音無で食べなくてはいけないと言いますが、彼女たちはそうしないで食べます。らめんはカシュアルな食べ物だから、カシュアルで食べる方がいいです。
      </Box>
    </Box>
  </Container>
  )
}

export default App;