import React from "react";

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
  FooterLinksContainer,
  FooterLink,
} from "../FormElements";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

import { toast } from "react-toastify";

import axios from "axios";

const ForgotPassword = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_AUTH_API_SERVICE_NAME}/requestPasswordReset`,
        {
          email: data.email,
          password: data.password,
        }
      );

      history.push("/");

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

              <FormTitle>Forgot Password</FormTitle>

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

              <ContainerSubmitBtn>
                <SubmitBtn disabled={!isValid} isValid={isValid}>
                  Request Password Reset
                </SubmitBtn>
              </ContainerSubmitBtn>

              <FooterLinksContainer>
                <FooterLink
                  to="/signin"
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                >
                  Sign In
                </FooterLink>
              </FooterLinksContainer>
            </Form>
          </WrapForm>
        </Container>
      </Limiter>
    </>
  );
};

export default ForgotPassword;
