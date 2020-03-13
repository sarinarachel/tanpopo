import React, {useContext, useState} from 'react';
import './App.css';
import { Box, Button, ButtonGroup, Container, ListItem } from '@material-ui/core';
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
        映画の冒頭でガンがラーメンの食べ方に対する本の中で、ラーメンを４０年間勉強した老人は「正しい食べ方」を説明します。例えば：
        <ListItem>
         -最初はらめんをよく見ます
        </ListItem>
        <ListItem>
         -丼の善良(Excellence) 、らめんの匂いを吸い込みながら観賞して
        </ListItem>
        <ListItem>
          -箸の先でラーメンの表面を撫ぜる
        </ListItem>
        <ListItem>
          -めんから食べ始めます
        </ListItem>
      </Box>
      <Box className="para">
        ガンはそういう説明を読んだあと、「ちくしょう！」を怒鳴って、本を冷やかしました。この場面から監督が言いたいことはラーメンの食べ方はそんな厳しくなくて、自由だと言えるのではないでしょうか。ラーメンはカシュアルな食べ物だから、カシュアルで食べる方がいいです。
      </Box>
      <Box className="para">
        そして、他の食べ方に対する面白いシーンもあります。スパゲティーの先生が生徒に外国で正しい食べ方を教えます。でも、もう一度その厳しい食べ方を冷やかします。その場面も見ましょう！
      </Box>
      <Box className="embed">
      <iframe width="80%" height="400px" title="spaget"
        src="https://www.youtube.com/embed/sNAZmLmyCJk?start=34" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      </Box>
      <Box className="para">
        日本の文化に麺を食べる時に音を出すとは普通で、美味しくなって食べやすいからです。でも、外国ですすって食べるのは失礼と言われています。だから、この先生は「音を立てないように召し上がっていただきます。」と「外国では絶対許されないのです。」と言います。しかし、レストランで麺を食べている外国人は音を出して、すすって食べます。そのあと、生徒と先生も諦めて、大きい音を出してスパゲティーを食べます。
      </Box>
      <Box className="para">
        この面白い場面も麺の食べ方の自由を表します。厳しい食べ方は不合理で諦めたほうがいいでしょうか。監督は自由にずるずるにラーメン（パスタも）を食べてもいいということを伝えたかったでしょう。
      </Box>
      <Box className="para">
        「ずるずる」と言えば、タンポポにあるラーメンのオノマトペを見ましょう。
      </Box>
    </Box>

    <Box className="section">
      <Box className="title" >
        ラーメンのオノマトペ
      </Box>
    </Box>
  </Container>
  )
}

export default App;