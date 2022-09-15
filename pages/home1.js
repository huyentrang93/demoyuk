import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/header.module.css'
import Images from '../public/assets/imageindex';
import background from '../public/assets/images/nen1.png'
export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <div position="static"  style={{
                        backgroundImage: `url("http://trithucviet.net/wp-content/uploads/2019/09/Có-thể-cài-hình-nền-đẹp-cho-máy-t%C3%ADnh-theo-nhiều-cách.png")`, backgroundRepeat: 'no-repeat', width: '100%', height: '720px', color: 'white'
                    }}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
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
          <SearchIcon />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <p>let's make great things</p>
        <p>Business studio</p>
        <button>read more 
          <i className="fa fa-caret-down"></i>
        </button>
      </div>
    </Box>
  );
}
