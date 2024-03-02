import * as Yup from 'yup';
import { StyledDiv, StyledGreetings, StyledLink, StyledSecondaryText, StyledTitle } from './AuthForms.styled';
import { AuthForm } from './AuthForm';


const schema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").required('Required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "It must be valid email").required('Required'),
    password: Yup.string().min(6, "password must be at least 6 characters").required('Required')
});

export const SignUpForm = () => {

    const handleRegistration = (values) => {
        console.log(values);
    }

    return (
        <>

            <StyledDiv>
                <StyledTitle>Sign Up</StyledTitle>
                <StyledGreetings>Thank you for your interest in our platform. To complete the registration process, please provide us with the following information.</StyledGreetings>

                <AuthForm schema={schema} handleSubmit={handleRegistration} register />

                <StyledSecondaryText>Already have an account? <StyledLink to="/signin">Sign In</StyledLink></StyledSecondaryText>
            </StyledDiv>

        </>
    )
}