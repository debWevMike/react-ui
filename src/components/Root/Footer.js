import React from "react"
import styles from "./Footer.module.css"
import {
  GithubOutlined,
  LinkedinOutlined,
  CodepenOutlined,
  CodeOutlined,
} from "@ant-design/icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a
            href='https://www.linkedin.com/in/desrochesmichael/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinOutlined />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/debWevMike'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubOutlined />
          </a>
        </li>
        <li>
          <a
            href='https://codepen.io/debWevMike'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CodepenOutlined />
          </a>
        </li>
        <li>
          <a
            href='https://www.codewars.com/users/debWevMike'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CodeOutlined />
          </a>
        </li>
      </ul>
      <div className={styles.tm}>Designed and built by Micheal DesRoches</div>
    </footer>
  )
}

export default Footer
