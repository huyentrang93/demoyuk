import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import images from "../../../public/assets/imageindex";
import styles from '../../../styles/blogcenter.module.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import Appbarhea from "../../home/headerbody/appbarhea"
import { useRouter } from 'next/router'
import Image from "next/image";
export default function blogdetail({value}) {
  const itemData = [
    {
      id: 1,
      img: images.blog1,
      title: "technologies",
      author:"2022/08/09",
      titleDetail: "WordPress Website Audit by a Website Maintenance Company",
      userBy:"Admin",
      content: "Talking about a website audit, it/’s important to consider that there are approximately 400 million active websites on the World Wide Web today.Considering that almost 60% of the global population uses the internet if you/’re a business looking to make it, it/’s probably a good idea to create a website. But creating a website isn/’t enough, the internet is saturated with websites; millions belong to the same field, selling the same products, promoting the same services."
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
  const dataitem = itemData.find(({ id }) => id == value)
  const datalistitem = itemData.filter(function (itemp) {
    return itemp.id != value;
});
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={3}>
          <Grid item xs ={1}>
            <div></div>
          </Grid>
          <Grid item xs={8}  className={styles.titledetail}>
            <p className={styles.detailtitle}>{dataitem.title}</p>
            <h1>{dataitem.titleDetail}</h1>
            <div className={styles.titlecontentdetail}>
              <p>by    </p>
              <p className={styles.cttitle}>{dataitem.userBy}</p>
              <p className={styles.contenauthor}>{dataitem.author}</p>
            </div>
            <Image src ={dataitem.img} height= {600}  width= {600}></Image>
            <p>{dataitem.content}</p> 
          </Grid>
          <Grid item xs={3}>
            <div>
              <p className={styles.recent}>recent posts</p>
              {datalistitem.map((item) => (
                <ImageListItem key={item.img}>
                  <Link href={`/blog/blogdetail/${item.id}?${item.id}`} className={styles.linkdetail} underline="hover">
                  <Grid container spacing={0.5}>
                    <Grid xs ={3}>
                    <Image 
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                      height={70}
                      width={70}
                    />
                    </Grid>
                    <Grid xs ={6}>
                    <div> 
                      <p className={styles.imalisttitle}>{item.titleDetail}</p>
                      <p>{item.author}</p>
                    </div>  
                    </Grid>
                  </Grid>
                  </Link>
                </ImageListItem>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>    
      
    </div>
  )
}
blogdetail.getInitialProps = ({ query: { id } }) => {
  const value= id
  return { value }
}