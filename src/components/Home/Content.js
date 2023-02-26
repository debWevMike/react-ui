import React from "react"
import About from "./About"
import Image from "./Image"
import Introduction from "./Introduction"
import Container from "./Container"
import Row from "./Row"
import image from "../../images/Mike.jpg"
import Button from "./Button"

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
      <Button>Contact Me</Button>
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
            missions!) and have the privilige of building accessable web
            products for{" "}
            <a
              href='https://info.natacs.aero/'
              target='_blank'
              rel='noopener noreferrer'
            >
              NATA CS.
            </a>
          </p>
        </About>
      </Row>
      <Row>
        <About title='Tech Stack'>
          <ul>
            <li>{"> Javascript (ES 6+)"}</li>
            <li>{"> React"}</li>
            <li>{"> ASP.Net"}</li>
            <li>{"> Microsoft SQL (2012 & 2019)"}</li>
            <li>{"> Entity Framework"}</li>
          </ul>
        </About>
        <About title='Experience'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consequat in diam sit amet euismod. Fusce non metus turpis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Nulla
          malesuada suscipit purus ut ultricies. Curabitur hendrerit, neque nec
          tempus viverra, purus nulla tincidunt tellus, vitae ultrices libero
          orci id nisi. Sed eu tempus massa. Donec ullamcorper egestas tortor,
          sed iaculis sapien placerat et. Mauris quis aliquam leo. Integer at
          tempus libero, in ullamcorper sem. Vivamus lacinia lacus sed sapien
          vehicula tempor. Donec tellus lorem, finibus a purus vel, lobortis
          blandit erat. Donec gravida, nulla vel aliquam fermentum, dui eros
          fringilla eros, sed facilisis nisl dui non purus. Sed velit quam,
          vehicula ac pulvinar sit amet, aliquet pretium erat.
        </About>
      </Row>
      <About title='Projects'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        in diam sit amet euismod. Fusce non metus turpis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aliquam erat volutpat. Nulla malesuada suscipit purus ut
        ultricies. Curabitur hendrerit, neque nec tempus viverra, purus nulla
        tincidunt tellus, vitae ultrices libero orci id nisi. Sed eu tempus
        massa. Donec ullamcorper egestas tortor, sed iaculis sapien placerat et.
        Mauris quis aliquam leo. Integer at tempus libero, in ullamcorper sem.
        Vivamus lacinia lacus sed sapien vehicula tempor. Donec tellus lorem,
        finibus a purus vel, lobortis blandit erat. Donec gravida, nulla vel
        aliquam fermentum, dui eros fringilla eros, sed facilisis nisl dui non
        purus. Sed velit quam, vehicula ac pulvinar sit amet, aliquet pretium
        erat.
      </About>
    </Container>
  )
}

export default Content
