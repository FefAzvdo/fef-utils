import React, { useState } from 'react'

import {
  Title,
  Text,
  Wrapper,
  Button,
  Row,
  Col,
  Drawer,
  Modal
} from 'fef-utils'
import 'fef-utils/dist/index.css'

const showHours = () =>
  alert(
    `São ${(new Date().getHours() < 10 ? '0' : '') + new Date().getHours()}:${
      (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()
    }`
  )

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Wrapper style={{ background: '#2199ac' }}>
      <Row>
        <Col>
          <Title colorSetup='info'>Computadores Quanticos</Title>
        </Col>
      </Row>
      <Row justify='flex-start' style={{ marginTop: '200px' }}>
        <Col justify='space-between' size='30%'>
          <Button
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            rounded
          >
            {isDrawerOpen ? 'FECHAR DRAWER' : 'ABRIR DRAWER'}
          </Button>
          <Button
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
            onClick={() => setIsModalOpen(!isDrawerOpen)}
            rounded
          >
            {isModalOpen ? 'FECHAR MODAL' : 'ABRIR MODAL'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          size='30%'
          style={{
            backgroundColor: '#aaa',
            color: 'black',
            minHeight: '100px'
          }}
        >
          GRID 1
        </Col>
        <Col
          size='70%'
          style={{
            backgroundColor: '#bbb',
            color: 'black',
            minHeight: '100px'
          }}
        >
          GRID 2
        </Col>
      </Row>
      <Row>
        <Col
          size='40%'
          style={{
            backgroundColor: '#ccc',
            color: 'black',
            minHeight: '100px'
          }}
          breakpoint='650'
        >
          GRID 3
        </Col>
        <Col
          size='30%'
          style={{
            backgroundColor: '#ddd',
            color: 'black',
            minHeight: '100px'
          }}
          breakpoint='650'
        >
          GRID 4
        </Col>
        <Col
          size='30%'
          style={{
            backgroundColor: '#eee',
            color: 'black',
            minHeight: '100px'
          }}
          breakpoint='650'
        >
          GRID 5
        </Col>
      </Row>
      AAAAAAAAAAAAAAAA MODAL EM BAIXO
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title='Descrição'
        closeBtnText='Fechar'
      >
        <Row>
          <Text colorSetup='info' shouldCapitalizeFirstLetter>
            Um computador quântico é um dispositivo que executa cálculos fazendo
            uso direto de propriedades da mecânica quântica, tais como
            sobreposição e interferência. Teoricamente, computadores quânticos
            podem ser implementados e o mais desenvolvido atualmente, o D-Wave
            Two, trabalha com 512 qubits de informação. O principal ganho desses
            computadores é a possibilidade de resolver algoritmos num tempo
            eficiente, alguns problemas que na computação clássica levariam
            tempo impraticável (exponencial no tamanho da entrada), como por
            exemplo, a fatoração em primos de números naturais.
          </Text>
          <Text>
            A redução do tempo de resolução deste problema possibilitaria a
            quebra da maioria dos sistemas de criptografia usados atualmente.
            Contudo, o computador quântico ofereceria um novo esquema de canal
            mais seguro. Computadores quânticos são diferentes de computadores
            clássicos tais como computadores de DNA e computadores baseados em
            transístores, ainda que estes utilizem alguns efeitos da mecânica
            quântica.
          </Text>
        </Row>
      </Drawer>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Descrição'
      >
        <Row>
          <Text colorSetup='info' shouldCapitalizeFirstLetter>
            Um computador quântico é um dispositivo que executa cálculos fazendo
            uso direto de propriedades da mecânica quântica, tais como
            sobreposição e interferência. Teoricamente, computadores quânticos
            podem ser implementados e o mais desenvolvido atualmente, o D-Wave
            Two, trabalha com 512 qubits de informação. O principal ganho desses
            computadores é a possibilidade de resolver algoritmos num tempo
            eficiente, alguns problemas que na computação clássica levariam
            tempo impraticável (exponencial no tamanho da entrada), como por
            exemplo, a fatoração em primos de números naturais.
          </Text>
        </Row>
      </Modal>
      AAAAAAAAAAAAA MODAL EM CIMA
    </Wrapper>
  )
}

export default App
