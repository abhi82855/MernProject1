import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    backgroundColor:"#fff",
    marginLeft:"10px",
    width:"300px",
    height:"20px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  
   
    
  },
  searchIcon: {
    //padding: theme.spacing(1, 1, 1, 0),
    //height: '100%',
    display: 'flex',
    
    color:"#2874f0",
    marginTop:"5px",
    
    
    
  },
  inputRoot: {
    fontSize:"unset",
    width:"100%",
  },
  inputInput: {
    //padding: theme.spacing(1, 1, 1, 0),
    fontSize:"10px",
    padding:"10px"
    
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    
    
          <div className={classes.search}>
            
            <InputBase
              placeholder="Search for product , and brand..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        
      
    </div>
  );
}
