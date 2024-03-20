import styled from '@emotion/styled';
import { theme } from '../../vars';

const { orange, white } = theme.color;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`;

export const Title = styled.h1`
  color: ${white};
  text-shadow:
    0 0 5px ${orange},
    0 0 10px ${orange},
    0 0 20px ${orange},
    0 0 40px ${orange},
    0 0 80px ${orange};
`;
