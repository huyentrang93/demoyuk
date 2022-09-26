import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../../styles/header.module.css'
import { Link } from '@mui/material';
export default function headerapp() {
  return ( 
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
            <Link href="#">Home</Link>
            <Link href="#">Home Detail</Link>
          </div>
          </div>
          <div className={styles.dropdown}>
            <button className= {styles.dropbtn}>blog 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdowncontent}>
              <Link href="../blog/blogcenter/blogcenterindex">Blog list</Link>
              <Link href="#">Blog Detail</Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className= {styles.dropbtn}>shop 
              <i className="fa fa-caret-down"></i>
            </button>
           <div className={styles.dropdowncontent}>
              <Link href="#">Link 1</Link>
              <Link href="#">Link 2</Link>
              <Link href="#">Link 3</Link>
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
  )
}
