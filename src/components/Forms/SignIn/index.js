import React, { useState } from "react";

import {
  Container,
  WrapForm,
  Limiter,
  Form,
  FormTitle,
  WrapFormField,
  FormFieldLabel,
  Input,
  ContainerSubmitBtn,
  SubmitBtn,
  ForgotPasswordLink,
  FooterLinksContainer,
  SignUpLink,
} from "../FormElements";

import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

import { toast } from "react-toastify";

import axios from "axios";

import loadingIcon from "../../../images/loader.svg";

const SignIn = (props) => {
  const { authContext } = props;

  const [signInState, setSignInState] = useState({
    signIn: false,
    signInError: null,
    signInLoading: false,
  });

  const history = useHistory();
  const { state } = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      // email: 'thadduval.lavud@gmail.com',
      // password: '123'
    },
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const onSubmit = async (data) => {
    try {
      setSignInState({
        ...signInState,
        signIn: false,
        signInError: null,
        signInLoading: true,
      });

      await axios.post(
        `${process.env.REACT_APP_AUTH_API_SERVICE_NAME}/signin`,
        {
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );

      setSignInState({
        ...signInState,
        signIn: false,
        signInError: null,
        signInLoading: false,
      });

      authContext.updateIsAuthedModel({
        isAuthed: true,
        isAuthedError: null,
        isAuthedLoading: false,
      });

      if (state && state.from) {
        history.push(state.from);
      } else {
        history.push("/dashboard");
      }

      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      setSignInState({
        ...signInState,
        signIn: false,
        signInError: e,
        signInLoading: false,
      });

      toast.error(`${e.toString()}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  watch("email");
  watch("password");

  return (
    <>
      <Limiter>
        <Container>
          <WrapForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <IoArrowBack
                onClick={() => {
                  toggleHome();
                  history.goBack();
                }}
              />

              <FormTitle>Sign In</FormTitle>

              <div>
                <FormFieldLabel htmlFor="email">Email</FormFieldLabel>

                <WrapFormField
                  isDirty={dirtyFields.email}
                  hasError={!!errors.email}
                >
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: true,
                      // eslint-disable-next-line no-useless-escape
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    })}
                  />
                </WrapFormField>

                {errors.email ? (
                  <span style={{ color: "red" }}>Email Required</span>
                ) : (
                  <br />
                )}
              </div>

              <div>
                <FormFieldLabel htmlFor="password">Password</FormFieldLabel>

                <WrapFormField
                  isDirty={dirtyFields.password}
                  hasError={!!errors.password}
                >
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                  />
                </WrapFormField>

                {errors.password ? (
                  <span style={{ color: "red" }}>Required</span>
                ) : (
                  <br />
                )}
              </div>

              <ContainerSubmitBtn>
                <SubmitBtn
                  disabled={!isValid || signInState.signInLoading}
                  isValid={isValid}
                >
                  {signInState.signInLoading ? (
                    <img
                      style={{
                        opacity: "0.5",
                        height: "60px",
                      }}
                      src={loadingIcon}
                      alt="loader"
                    />
                  ) : (
                    <>Sign In</>
                  )}
                </SubmitBtn>
              </ContainerSubmitBtn>

              <FooterLinksContainer>
                <SignUpLink
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                  to="/signup"
                >
                  Sign up now
                </SignUpLink>
                <ForgotPasswordLink
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                  to="/forgotPassword"
                >
                  Forgot?
                </ForgotPasswordLink>
              </FooterLinksContainer>
            </Form>
          </WrapForm>
        </Container>
      </Limiter>
    </>
  );
};

export default SignIn;
