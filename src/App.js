import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import GaugeChart from './lib'

const App = () => {
  return (
    <>
      <Container style={{ padding: '80px 40px' }}>
        <Row>
          <Col xs={12} lg={6}>
            <GaugeChart
              style={{}}
              animate={false}
              percent={0.7}
              fontSize={60}
              label='Read rate'
              labelFontSize={30}
              nrOfLevels={30}
              arcWidth={0.15}
              arcPadding={0}
              cornerRadius={0}
              colors={['#71ceff', '#71ffd1']}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
