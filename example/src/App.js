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
    <Wrapper>
      <Row>
        <Col>
          <Title colorSetup='info'>Computadores Quanticos</Title>
        </Col>
      </Row>
      <Row justify='flex-start'>
        <Col justify='space-between' size='30%'>
          <Button
            styleProps={{ borderRadius: '25px' }}
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            rounded
          >
            {isDrawerOpen ? 'FECHAR DRAWER' : 'ABRIR DRAWER'}
          </Button>
          <Button
            styleProps={{ borderRadius: '25px' }}
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
            onClick={() => setIsModalOpen(!isDrawerOpen)}
            rounded
          >
            {isModalOpen ? 'FECHAR MODAL' : 'ABRIR MODAL'}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col size='30%'>
          <Button
            colorSetup={{ firstColor: '#1d6a96', secondColor: 'white' }}
            onClick={() => alert('Enviou')}
            icon='✉'
            rounded
          >
            Enviar msg
          </Button>
        </Col>
        <Col size='70%' justify='flex-end'>
          <Button
            colorSetup={{ firstColor: '#003e19', secondColor: 'white' }}
            onClick={() => alert('Salvou')}
            icon='☁'
            invertedIcon
            rounded
          >
            Salvar na nuvem
          </Button>
          <Button
            icon='⌚'
            rounded
            colorSetup={{ firstColor: '#003', secondColor: 'white' }}
            onClick={showHours}
          >
            Ver hora
          </Button>
          <Button
            colorSetup={{ firstColor: '#fe7773', secondColor: 'white' }}
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
          <Button
            styleProps={{ borderRadius: '25px' }}
            colorSetup={{ firstColor: '#5cb85c', secondColor: 'white' }}
            rounded
          >
            Green Btn
          </Button>
        </Col>
      </Row>
      <Button
        block
        colorSetup={{ firstColor: '#32435f', secondColor: '#a67f78' }}
        rounded
        disabled
      >
        Normal Button with BLOCK prop
      </Button>
      <Row>
        <Col size='30%'>
          <Button
            block
            colorSetup={{ firstColor: '#69491a', secondColor: '#f2ab39' }}
          >
            Normal Button with BLOCK prop
          </Button>
        </Col>
        <Col size='70%' justify='space-between'>
          <Button colorSetup={{ firstColor: '#a13e97', secondColor: '#000' }}>
            BTN 1
          </Button>
          <Button
            colorSetup={{ firstColor: '#280e3b', secondColor: '#f2ab39' }}
          >
            BTN 2
          </Button>
          <Button>Default Button</Button>
        </Col>
      </Row>
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Modal Content
      </Modal>
    </Wrapper>
  )
}

export default App
