import styled from "styled-components";

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
} // definir as cores que podem ser usadas no status do pedido (yellow, red, green) e o tipo de statusColor é uma dessas cores (yellow, red, green)

const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const; // DEFINIR COMO CONSTANTE PARA QUE O TYPESCRIPT NÃO PERMITA ALTERAR O VALOR

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 1rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-800"]};

  display: flex;
  flex-direction: column;
`;

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
