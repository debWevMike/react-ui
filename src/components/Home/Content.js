import React from "react"
import About from "./About"
import Image from "./Image"
import Introduction from "./Introduction"
import Container from "./Container"
import Row from "./Row"

const Content = () => {
  return (
    <Container>
      <Introduction>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rutrum
        augue. Maecenas nec nunc dapibus, porttitor dolor et, dignissim tellus.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nulla at elit vel odio fermentum mollis. Phasellus
        aliquam, est sed convallis tincidunt, purus velit lobortis arcu, nec
        molestie sem eros vel massa.
      </Introduction>
      <Row>
        <Image />
        <About />
      </Row>
      <About />
      <About />
    </Container>
  )
}

export default Content
