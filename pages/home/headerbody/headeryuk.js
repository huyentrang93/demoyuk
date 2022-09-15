import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/header.module.css'
export default function headeryuk(props) {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar className={styles.headtool}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}  className={styles.tpp}>
            yuk
          </Typography>
          <div className={styles.navbar}>
            <div className={styles.dropdown}>
              <button className= {styles.dropbtn}>home 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdowncontent}>
                <a href="#">Home</a>
                <a href="#">Home Detail</a>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button className= {styles.dropbtn}>blog 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdowncontent}>
                <a href="#">Blog list</a>
                <a href="#">Blog Detail</a>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button className= {styles.dropbtn}>shop 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className={styles.dropdowncontent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
          </div>
          <SearchIcon  size="large" sx={{ mr: 2 }} className={styles.searchic}/>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        </AppBar>
      <div className={styles.content} sx={{ flexGrow: 3  }}>
        <p className={styles.content1}>{props.p1}</p>
        <h1 className={styles.content2}>{props.p2}</h1>
        <button className={styles.btncontent}>read more 
          <i className="fa fa-caret-down"></i>
        </button>
      </div>
      <div></div>
      
    </Box>
  );
}
