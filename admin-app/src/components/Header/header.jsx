import React from 'react';
import SearchBar from './SearchBar';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  header: {
    background: "#2874f0",
    height: '50px'
  },
  logo: {
    width: '75px',
  },
  logobox: {
    marginLeft: "12%"
  },
  login:{
    
  }


});

const Header1 = () => {
  const classes = useStyles();
  const logourl = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Box className={classes.logobox}>
            <img src={logourl} className={classes.logo} />
          </Box>
          <SearchBar />
          <Box>
            <Button className={classes.login}>
              login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header1;