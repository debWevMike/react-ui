import React from "react"
import About from "./About"
import Image from "./Image"
import Introduction from "./Introduction"
import Container from "./Container"
import Row from "./Row"
import image from "../../images/Mike.jpg"
import Skills from "./Skills"

const Content = () => {
  return (
    <Container>
      <Introduction>
        <p>
          I'm a Junior Software Engineer that specilizes in building
          applications for the Web. Currently, I'm focused on building
          exceptional digital experiences at{" "}
          <a
            href='https://info.natacs.aero/'
            target='_blank'
            rel='noopener noreferrer'
          >
            NATA CS.
          </a>
        </p>
      </Introduction>
      <Row>
        <Image src={image} alt='Michael DesRoches' />
        <About title='About Me'>
          <p>
            Hello! My name is Mike and I love making things on the Web. After
            earning my Bachelor's in Computer Science and Engineering from
            University of Nevada - Reno, I entered the world of software
            development to explore my passion for fixing problems and to
            challenge myself in a world that continues to evolve.
          </p>
          <p>
            Before venturing to college, I was a full time Soldier of the Nevada
            Army National Guard. I maintained helicopters and performed air crew
            duties as a flight engineer. Basically, I got to fly in the back of
            the helicopter on a lot of really cool missions. After returning
            home from Afghanistan in 2014, I decided that I wanted pursue a
            higher education.
          </p>
          <p>
            Fast forward to today, and I still have the privilege of serving the
            military on a part time basis (but still flying on those really cool
            missions!) and have the privilige of building accessible web
            products for{" "}
            <a
              href='https://info.natacs.aero/'
              target='_blank'
              rel='noopener noreferrer'
            >
              NATA CS.
            </a>
          </p>
          <p>Here are the technoligies I have recently work with: </p>
          <Skills />
        </About>
      </Row>
      <Row>
        <About title='Project 1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie
          at mi id mollis. Curabitur sit amet turpis vulputate, consequat diam
          sit amet, tincidunt risus. Duis nisi mi, fermentum quis mauris eget,
          pharetra cursus purus.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut molestie at mi id mollis. Curabitur sit amet
          turpis vulputate, consequat diam sit amet, tincidunt risus. Duis nisi
          mi, fermentum quis mauris eget, pharetra cursus purus.
        </About>
        <About title='Project 2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie
          at mi id mollis. Curabitur sit amet turpis vulputate, consequat diam
          sit amet, tincidunt risus. Duis nisi mi, fermentum quis mauris eget,
          pharetra cursus purus.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut molestie at mi id mollis. Curabitur sit amet
          turpis vulputate, consequat diam sit amet, tincidunt risus. Duis nisi
          mi, fermentum quis mauris eget, pharetra cursus purus.
        </About>
        <About title='Project 3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie
          at mi id mollis. Curabitur sit amet turpis vulputate, consequat diam
          sit amet, tincidunt risus. Duis nisi mi, fermentum quis mauris eget,
          pharetra cursus purus.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut molestie at mi id mollis. Curabitur sit amet
          turpis vulputate, consequat diam sit amet, tincidunt risus. Duis nisi
          mi, fermentum quis mauris eget, pharetra cursus purus.
        </About>
      </Row>
    </Container>
  )
}

export default Content
