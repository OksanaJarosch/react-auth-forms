import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../vars';

const { orange, orangeHover, white } = theme.color;

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: ${white};
  text-shadow:
    0 0 5px ${orange},
    0 0 10px ${orange},
    0 0 20px ${orange},
    0 0 40px ${orange},
    0 0 80px ${orange};
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: ${orangeHover};
    text-shadow:
      0 0 5px ${orange},
      0 0 10px ${orange},
      0 0 20px ${orange},
      0 0 40px ${orange},
      0 0 80px ${orange};
  }
`;

// export const IconWrapper = styled.svg`
//   width: ${(props) => props.size || '12px'};
//   height: ${(props) => props.size || '12px'};
//   fill: ${(props) => props.color || '#ffffff'};
//   display: inline-block;
//   margin-right: 5px;
//   box-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
