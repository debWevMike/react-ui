import React, { useState } from "react";
import { Modal } from "antd";

const LandingPage = () => {
    const [isModalOpen, setIsmodalOpen] = useState(true)

    const showModal = () => {
        setIsmodalOpen(true)
    }

    const hideModal = () => {
        setIsmodalOpen(false)
    }

    return <Modal title="Landing Page" onOk={hideModal} open={isModalOpen}> 
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
}

export default LandingPage