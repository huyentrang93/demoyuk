import Headeryuk from "./headerbody/headeryuk";
import Contenoneyuk from "./bodycontent/contentone";
import Contentowyuk from "./bodycontent/contenttow";
import images from "../../public/assets/imageindex";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import homedetail from "../api/homedetail.js"
const homeyuk = () => {
  const data =[{ id: 1,
    p1: 'let\'s make great things',
    p2:'Business studio',
    imagebackgroup: images.banner1
  },
  { id: 2,
    p1: 'work place, and community',
    p2:'The art of business',
    imagebackgroup: images.banner2
  },
  { id: 3,
    p1: 'healthy self esteem originates!',
    p2:'Business world',
    imagebackgroup: images.banner3
  },
]
const [value, setValue] = useState(1);
function handleArrowBackIcon (){
  if (value ==1){
    setValue(3)
  }
  else {
    setValue(value -1)
  }
};
function handleArrowForwardcon (){
  if (value == 3){
    setValue(1)
  }
  else {
    setValue(value+1)
  }
};
const dataitem = data.find(({ id }) => id == value)
  return (
    <div>
      <div position="static"  style={{backgroundImage:`url(${dataitem.imagebackgroup})`, backgroundRepeat: 'no-repeat', width: '100%', height: '720px', color: 'white'}}>
      <Headeryuk p1={dataitem.p1} p2={dataitem.p2}/>
      <IconButton color="primary" aria-label="add an alarm" onClick={handleArrowBackIcon}>
        <ArrowBackIcon/>
      </IconButton>
      <IconButton color="primary" aria-label="add an alarm" onClick={handleArrowForwardcon}>
        <ArrowForwardIcon/>
      </IconButton>
    </div>
      <Contenoneyuk/>
      <Contentowyuk/>
  </div>
  )
}
//`url("http://trithucviet.net/wp-content/uploads/2019/09/Có-thể-cài-hình-nền-đẹp-cho-máy-t%C3%ADnh-theo-nhiều-cách.png")`
export default homeyuk