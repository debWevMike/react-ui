import React from "react"
import styles from "./Skills.module.css"

const Skills = () => {
  return (
    <div className={styles.row}>
      <div className={styles.skills}>
        <ul>
          <li>
            <span>{"> "}</span>Javascript (ES 6+)
          </li>
          <li>
            <span>{"> "}</span>React
          </li>
          <li>
            <span>{"> "}</span>ASP.Net
          </li>
        </ul>
      </div>
      <div className={styles.skills}>
        <ul>
          <li>
            <span>{"> "}</span>Entity Framework
          </li>
          <li>
            <span>{"> "}</span>Microsoft SQL Server
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
