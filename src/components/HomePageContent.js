import React from "react"
import About from "./About"
import HomeImage from "./HomeImage"
import styles from "./css/HomePageContent.module.css"

const HomePageContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.first}>Hello, my name is</div>
        <div className={styles.second}>Michael DesRoches.</div>
        <div className={styles.third}>I'm a full-stack Software Developer.</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
          rutrum augue. Maecenas nec nunc dapibus, porttitor dolor et, dignissim
          tellus. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nulla at elit vel odio fermentum mollis.
          Phasellus aliquam, est sed convallis tincidunt, purus velit lobortis
          arcu, nec molestie sem eros vel massa.
        </p>
      </div>
      <div className={styles.wrapper}>
        <HomeImage />
        <About />
      </div>
      <div className={styles.wrapper}>
        <About />
        <HomeImage />
      </div>
    </div>
  )
}

export default HomePageContent
