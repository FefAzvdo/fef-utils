import React from 'react'

import { Title, Text, Container, Button, Row, Col } from 'fef-utils'
import 'fef-utils/dist/index.css'

const App = () => {
  return (
    <Container>
      <Row>
        <Col justify='flex-end'>
          <Title colorSetup='info'>Computadores Quanticos</Title>
        </Col>
      </Row>
      <Row>
        <Text colorSetup='info' shouldCapitalizeFirstLetter>
          Um computador quântico é um dispositivo que executa cálculos fazendo
          uso direto de propriedades da mecânica quântica, tais como
          sobreposição e interferência. Teoricamente, computadores quânticos
          podem ser implementados e o mais desenvolvido atualmente, o D-Wave
          Two, trabalha com 512 qubits de informação. O principal ganho desses
          computadores é a possibilidade de resolver algoritmos num tempo
          eficiente, alguns problemas que na computação clássica levariam tempo
          impraticável (exponencial no tamanho da entrada), como por exemplo, a
          fatoração em primos de números naturais.
        </Text>
        <Text>
          A redução do tempo de resolução deste problema possibilitaria a quebra
          da maioria dos sistemas de criptografia usados atualmente. Contudo, o
          computador quântico ofereceria um novo esquema de canal mais seguro.
          Computadores quânticos são diferentes de computadores clássicos tais
          como computadores de DNA e computadores baseados em transístores,
          ainda que estes utilizem alguns efeitos da mecânica quântica.
        </Text>
      </Row>
      <Row>
        <Col size='30%'>
          <Button colorSetup='success' onClick={() => alert('Enviou')} icon='✉'>
            Enviar msg
          </Button>
        </Col>
        <Col size='70%' justify='flex-end'>
          <Button
            colorSetup='info'
            onClick={() => alert('Salvou')}
            icon='☁'
            invertedIcon
          >
            Salvar na nuvem
          </Button>
          <Button
            icon='⌚'
            rounded
            colorSetup='warning'
            onClick={() =>
              alert(
                `São ${new Date().getHours()}:${
                  (new Date().getMinutes() < 10 ? '0' : '') +
                  new Date().getMinutes()
                }`
              )
            }
          >
            Ver hora
          </Button>
          <Button
            colorSetup='danger'
            onClick={() => alert('Atendeu')}
            icon='☎'
            rounded
          >
            Atender ligação
          </Button>
        </Col>
      </Row>
      <Row>
        <Col justify='flex-end'>
          <Button styleProps={{ borderRadius: '25px' }}>Normal Button</Button>
        </Col>
      </Row>
      <Button block>Normal Button with BLOCK prop</Button>

      <Row>
        <Col size='30%'>
          <Button block>Normal Button with BLOCK prop</Button>
        </Col>
        <Col size='70%' justify='space-between'>
          <Button>BTN 1</Button>
          <Button>BTN 2</Button>
          <Button>BTN 3</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default App
