
import styles from '../styles/MainLeft.module.css'
//import Image from 'next/image'

export default function MainLeft(){

  return(
    <div id="MainLeft" className={`MainLeft paddingBottom`}>
      <div className={`MainLeft row flexSpace ${styles.flexCenter}`}>

          <div className={`${styles.leftbox} leftbox offset-md-0 col-md-4 col-sm-12 ${styles.background}`}>
            <div className="leftbox-img">
                <a href="http://www.rra.org.uk/" target="_blank">
                  <img className={styles.img} src="./images/rra.jpg" alt="RRA"/>
                </a>
            </div>
            <div>
              <h1 className={styles.h1}> Road Records Association</h1>
            </div>
          </div>

          <div className={`${styles.rightbox} rightbox offset-md-2 col-md-4 col-sm-12 ${styles.background}`}>
            <div className="normp flexp">
            ProjectSub3 was built on the belief that we should strive to push our limits physiologically, mentally, and technologically. In sport&apos;s constantly evolving arms race, it is innovation that keeps champions at the forefront. Jonathan&apos;s historic sub-3-hour 100-miles is a testament to attention to detail and stepping beyond the constraints of conventional wisdom.
            </div>
          </div>

      </div>
    </div>

  )
}
