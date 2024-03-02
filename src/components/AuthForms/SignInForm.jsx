import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Error, StyledButton, StyledDiv, StyledEye, StyledGreetings, StyledIFormWrapper, StyledInput, StyledInputWrapper, StyledLink, StyledSecondaryText, StyledTitle } from './AuthForms.styled';
import { useState } from 'react';


const schema = Yup.object().shape({
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "It must be valid email").required('Required'),
    password: Yup.string().min(6, "password must be at least 6 characters").required('Required')
});

export const SignInForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (values) => {
        console.log(values);
    }

    const handleShowPas = () => {
        return showPassword ? 'text' : 'password';
    }

    return (
        <>

            <StyledDiv>
                <StyledTitle>Sign In</StyledTitle>
                <StyledGreetings>Welcome! Please enter your credentials to login to the platform:</StyledGreetings>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={schema}
                    onSubmit={(values) => {
                        handleLogin(values);
                    }}>

                    {({ errors, touched }) => (
                        <Form autoComplete="off">
                            <StyledIFormWrapper>
                                <StyledInput type="email" name="email" placeholder="Email" error={errors.email} touched={touched.email} />
                                <Error name="email" component="p" />
                                <StyledInputWrapper>
                                    <StyledInput name="password" type={handleShowPas()} placeholder="Password" error={errors.password} touched={touched.password} />
                                    <StyledEye type="button" onClick={() => setShowPassword(!showPassword)}>
                                        <svg width="20" height="20" stroke="#efede8" viewBox="0 0 20 20">
                                            {showPassword ? (
                                                <use href="/img/sprait.svg#eye-off" />
                                            ) : (
                                                <use href="/img/sprait.svg#eye" />
                                            )}
                                        </svg>
                                    </StyledEye>
                                </StyledInputWrapper >
                                <Error name="password" component="p" />
                            </StyledIFormWrapper>
                            <StyledButton type="submit">Sign Up</StyledButton>
                        </Form>
                    )}
                </Formik>

                <StyledSecondaryText>Don’t have an account? <StyledLink to="/signup">Sign Up</StyledLink></StyledSecondaryText>
            </StyledDiv>

        </>
    )
}