import Headeryuk from "./headerbody/headeryuk";
import Contenoneyuk from "./bodycontent/contentone";
import Contentowyuk from "./bodycontent/contenttow";
import images from "../../public/assets/imageindex";
export default function headeryuk() {
  return (
    <div>
      <div position="static"  style={{backgroundImage:`url(${images.banner2})`, backgroundRepeat: 'no-repeat', width: '100%', height: '720px', color: 'white'}}>
        <Headeryuk p1={'let\'s make great things'} p2={'Business studio'}/>
      </div>
      <Contenoneyuk/>
      <Contentowyuk/>
    </div>

  )
}
//`url("http://trithucviet.net/wp-content/uploads/2019/09/Có-thể-cài-hình-nền-đẹp-cho-máy-t%C3%ADnh-theo-nhiều-cách.png")`