
import images from "../../../public/assets/imageindex";
import Image from "next/image";
import styles from "../../../styles/header.module.css"
import Grid from '@mui/material/Grid';
export default function contenoneyuk() {
  return (
    <Grid container spacing={1} className={styles.body2} >
    <Grid item xs={8}>
      <Image src = {images.banner1} className= {styles.imagebody2}  height= {600}  width= {600}></Image>
    </Grid>
    <Grid item xs={4} className={styles.bodyconten2}>
      <p className={styles.contenp1}>Hello, We're YUK</p>
      <h1 className={styles.contenp2}>A small design studio based in</h1>
      <h1 className={styles.contenp3}>New York.</h1>
      <p className={styles.contenp4}>more about us</p>
    </Grid>
    </Grid>
  )
}