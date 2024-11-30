import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Skills = () => {
  const cardsData = [
    { title: 'HTML', icon: 'https://img.icons8.com/?size=100&id=1043&format=png&color=000000' },
    { title: 'CSS', icon: 'https://img.icons8.com/?size=100&id=1045&format=png&color=000000' },
    { title: 'JS', icon: 'https://img.icons8.com/?size=100&id=3752&format=png&color=000000' },
    { title: 'React', text: 'начальный?', icon: 'https://img.icons8.com/?size=100&id=58811&format=png&color=000000' },
    { title: 'Bootstrap', text: 'начальный?', icon: 'https://img.icons8.com/?size=100&id=OODqBWCdRF8o&format=png&color=000000' },
    { title: 'Python', icon: 'https://img.icons8.com/?size=100&id=12584&format=png&color=000000' },
    { title: 'Git', text: 'минимально', icon: 'https://img.icons8.com/?size=100&id=38388&format=png&color=000000' },
    { title: 'C++', icon: 'https://img.icons8.com/?size=100&id=44328&format=png&color=000000' },
  ];

  const getCardStyle = (index) => {
    if (index === 3 || index === 4 || index === 6) {
        return { backgroundColor: '#f6fced' };
    }
    else {
        return {};
    }
  };

  return (
    <section className="project" id="skills">
      <h2>Навыки</h2>
      <Container>
        <Row className="justify-content-center px-3">
          {cardsData.map((card, index) => (
            <Col key={index} xs={12} md={3} className="mb-4">
              <motion.div 
                className="card h-100"
                initial={{ opacity: 0, y: 65 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={getCardStyle(index)}
              >
                <Card.Body className="text-center">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ color: '#FF6347' }}>{card.text}</Card.Text>
                  <div className="icon">
                    <img src={card.icon} alt={card.text} style={{ width: '2.9em'}} />
                  </div>
                </Card.Body>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};