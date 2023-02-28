import React from "react"
import About from "./About"
import Image from "./Image"
import Introduction from "./Introduction"
import Container from "./Container"
import Row from "./Row"
import image from "../../images/Mike.jpg"
import Skills from "./Skills"
import Contact from "./Contact"
import Card from "./Card"
import Button from "./Button"
import resume from "../../images/MikesResume.pdf"

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
        <Button type='link' href={resume}>
          Resume
        </Button>
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
      <About title='Some things I am building'>
        <Row>
          <Card
            title='This Website'
            stack={["React", "Node.js", "HTML/CSS"]}
            href='https://github.com/debWevMike/react-ui.git'
          >
            This website was created with reusable components that I made
            myself. I created this project to showcase my ability to create a
            site and host it on an API. Suprisingly, CSS is what gave me the
            most difficult time.
          </Card>
          <Card
            title='Authentication'
            stack={["Node.js", "Mongo DB", "REST"]}
            inProgress
            href='https://github.com/debWevMike'
          >
            Authentication API that allows users certain accesses, depending on
            credentials. It uses the same API this website and will eventually
            be integrated with the blog portion of the site. See my progress
            with the link above!
          </Card>
          <Card
            title='Blog'
            stack={["Node.js", "Mongo DB", "REST Api"]}
            inProgress
            href='https://github.com/debWevMike'
          >
            A blog website where the user adds the title of the article, and
            then the content. Content is then datestamped and stored into a
            database. User interface is always up do date with the latest blog.
            I try my best to keep it up to date.
          </Card>
        </Row>
      </About>
      <Contact />
    </Container>
  )
}

export default Content
