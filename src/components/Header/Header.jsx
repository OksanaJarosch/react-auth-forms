import {
  HeaderContainer,
  Navigation,
  StyledLink,

} from './Header.styled';


export const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/signup">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Sign Up
        </StyledLink>
        <StyledLink to="/signin">
          {/* <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper> */}
          Sign In
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
