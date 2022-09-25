import { memo } from 'react';
import { Container } from 'react-bootstrap';

export const Teste = memo(({ nome }) => {
  const array = Array.from(Array(300).keys());
  console.log(array);
  return (
    <Container>
      {array.map((i) => (
        <h1 key={i}>
          Olá {nome} {i}
        </h1>
      ))}
    </Container>
  );
});
