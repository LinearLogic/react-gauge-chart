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
            <div style={{ width: 500 }}>
              <GaugeChart
                style={{}}
                animate={false}
                percent={0.75}
                fontSize={58}
                label='Read rate'
                labelFontSize={30}
                nrOfLevels={30}
                arcWidth={0.15}
                arcPadding={0}
                cornerRadius={0}
                colors={['#71ceff', '#71ffd1']}
                needleColor='#aaa'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
