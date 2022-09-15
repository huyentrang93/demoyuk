  import * as React from 'react';
  import { styled } from '@mui/material/styles';
  import Grid from '@mui/material/Grid';
  import Paper from '@mui/material/Paper';
  import Box from '@mui/material/Box';
  import styles from "../../../styles/header.module.css"
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function contentowyuk() {
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className={styles.grid} item xs={4}>
            <Item className={styles.item} >1</Item>
          </Grid>
          <Grid className={styles.grid}  item xs={4}>
            <Item className={styles.item} >2</Item>
          </Grid>
          <Grid className={styles.grid}  item xs={4}>
            <Item className={styles.item}  >5</Item>
          </Grid>
          <Grid  className={styles.grid}  item xs={4}>
            <Item className={styles.item} >3</Item>
          </Grid>
          <Grid className={styles.grid}  item xs={4}>
            <Item className={styles.item} >4</Item>
          </Grid>
          <Grid className={styles.grid}  item xs={4}>
            <Item className={styles.item} >6</Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
  