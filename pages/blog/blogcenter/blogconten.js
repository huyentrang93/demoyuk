import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import images from "../../../public/assets/imageindex";
import styles from '../../../styles/blogcenter.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
export default function blogconten() {
  const itemData = [
    {
      id: 1,
      img: images.blog1,
      title: "technologies",
      author:"2022/08/09",
      titleDetail: "WordPress Website Audit by a Website Maintenance Company",
      userBy:"Admin",
    },
    {
      id: 2,
      img: images.blog2,
      title: "science",
      author:"2022/08/09",
      titleDetail: "video games playing with imagination",
      userBy:"Admin",
    },
    {
      id: 3,
      img: images.blog3,
      title: "science",
      author:"2022/08/09",
      titleDetail: "steps in installing rack mount lcd monitors",
      userBy:"Admin",
    },
    {
      id: 4,
      img: images.blog4,
      title: "science",
      author:"2022/08/09",
      titleDetail: "sony laptops are still part of the sony family",
      userBy:"Admin",
    },
    {
      id: 5,
      img: images.blog5,
      title: "science",
      author:"2022/08/09",
      titleDetail: "las vegas gow to have non gambling related fun",
      userBy:"Admin",
    },
  ]
  return (
    <div>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className={styles.blogimages}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={3}>
              <Grid item xs>
                <div></div>
              </Grid>
              <Grid item xs={10}  className={styles.title}>
              <div className={styles.blogtitle}> 
                <div className={styles.titlecontent}>
                  <p className={styles.cttitle}>{item.title}</p>
                  <p className={styles.contenauthor}>{item.author}</p>
                </div>
                <h1>{item.titleDetail}</h1>
                  <Link className={styles.linkdetail} underline="hover" 
                  href={`/blog/blogdetail/${item.id}?${item.id}`}>view more</Link>
              </div>  
              </Grid>
              <Grid item xs>
                <div></div>
              </Grid>
            </Grid>
          </Box>    
        </ImageListItem>
      ))}
    </div>
  )
}
