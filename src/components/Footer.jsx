import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="text-white py-4">
            <Container className=" px-4">
                <Row className="align-items-center">
                    <Col md={6} xs={6} className="text-center text-md-left">
                        <div className='logo_'><a href="#home">vamaryk</a></div>
                    </Col>
                    <Col md={6} xs={6} className="text-center text-md-right">
                        <div className='social-icon'>
                            <a href='https://github.com/vamaryk'><img src='https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF' alt='GitHub' /></a>
                            <a href='#'><img src='https://img.icons8.com/?size=100&id=lUktdBVdL4Kb&format=png&color=FFFFFF' alt='Telegram' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}