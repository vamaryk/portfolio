import { Container, Row, Col } from "react-bootstrap"
import resume from '../assets/r.pdf';

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                    {/* <span className="tagline"></span> */}
                    <h1>{`Мария Клюева`}
                        <br/>
                        <h1 id="ellipsis"><span>.</span><span>.</span><span>.</span><span className="dev"> разработчик</span></h1>
                        {/* <span className="wrap"> разработчик</span> */}
                    </h1>
                    <p>В этом портфолио представлены мои проекты, разработанные с использованием HTML, CSS, JavaScript, React и Bootstrap...</p>
                    <a href={resume} target="_blank"><button style={{ cursor: 'pointer' }} className="resume">РЕЗЮМЕ</button></a>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="text-center">
                        <div className="banner_"><img src='https://sun9-42.userapi.com/impg/rxJK4ZXFeYgp8rZNeAx8wVp4V3lR6zy19zo5AQ/_JqXRydoLQY.jpg?size=718x1080&quality=95&sign=7e3f62cb419aaf5c5994305ab4e6ecc2&type=album' alt='img' className="img_banner"></img></div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}