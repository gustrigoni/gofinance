import React from 'react';
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HightlightCard ({
  type,
  title,
  amount,
  lastTransaction
}: Props) {
  return (
    <Container
      type={type}
    >
      <Header>
        <Title
          type={type}
        >
          Entrada
        </Title>
        <Icon 
          name={icon[type]}
          type={type}
        />
      </Header>
      <Footer>
        <Amount
          type={type}
        >
          R$ 17.400,00
        </Amount>
        <LastTransaction
          type={type}
        >
          Última entrada dia 13 de abril
        </LastTransaction>
      </Footer>

    </Container>
  );
}