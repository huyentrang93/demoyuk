import styles from '../styles/header.module.css'
export default function HearderBody() {
return (
<div class={styles.navbar}>
            <div class={styles.dropdown}>
              <button class= {styles.dropbtn}>Home 
                    <i class="fa fa-caret-down"></i>
              </button>
              <div class={styles.dropdowncontent}>
                  <a href="#">Home</a>
                  <a href="#">Home Detail</a>
              </div>
            </div>
            <div class={styles.dropdown}>
              <button class= {styles.dropbtn}>Blog 
                    <i class="fa fa-caret-down"></i>
              </button>
              <div class={styles.dropdowncontent}>
                  <a href="#">Blog list</a>
                  <a href="#">Blog Detail</a>
              </div>
            </div>
            <div class={styles.dropdown}>
              <button class= {styles.dropbtn}>Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class={styles.dropdowncontent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
          </div>
    )
}