
import styles from '../styles/MainBreak.module.css'

export default function MainBreak(){


  return(
    <div className={styles.MainBreak}>
      <div id="MainBreak" className="row">

        <div className={`${styles.MainBreakInner} col-12`}>
          <h1 className={styles.h1Super}>Project Sub 3</h1>
          <p>The first-ever ride to break the 3-hour barrier for 100-miles</p>
        </div>

      </div>
    </div>

  )
}


