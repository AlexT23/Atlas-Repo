import header from './images/ptc_banner.png';
import styles from './App.css';
import {Container, Grid, Typography} from '@material-ui/core';
import Game from './components/Game';


function App() {
  return (
      <Container maxWidth='md' >
          <Grid container
                justifyContent={'center'} >
              <img src={header}
                   alt={'PTC header'}/>
              <Typography variant={'h3'}>
                  Atlas Tic Tac Toe
              </Typography>
          </Grid>
          <Game />
      </Container>
  );
}

export default App;
