import * as React from 'react';
import Box from '@mui/material/Box';
import styles from '../../../styles/header.module.css'
import Appbarhea from './appbarhea'
export default function headeryuk(props) {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <Appbarhea/>
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
