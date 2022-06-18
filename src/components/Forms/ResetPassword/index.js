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
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

import { toast } from "react-toastify";

import axios from "axios";

const ResetPassword = (props) => {
  const history = useHistory();
  const { resetPasswordToken } = useParams();

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
        `${process.env.REACT_APP_AUTH_API_SERVICE_NAME}/resetPassword`,
        {
          newPassword: data.newPassword,
          resetPasswordToken: resetPasswordToken,
        }
      );

      history.push("/signin");

      toast.success("🦄 Password has been updated!", {
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

  watch("newPassword");

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

              <FormTitle>Reset Password</FormTitle>

              <div>
                <FormFieldLabel htmlFor="newPassword">
                  New Password
                </FormFieldLabel>

                <WrapFormField
                  isDirty={dirtyFields.email}
                  hasError={!!errors.email}
                >
                  <Input
                    placeholder="New password"
                    name="newPassword"
                    type="password"
                    {...register("newPassword", {
                      required: true,
                    })}
                  />
                </WrapFormField>

                {errors.newPassword ? (
                  <span style={{ color: "red" }}>New Password Required</span>
                ) : (
                  <br />
                )}
              </div>

              <ContainerSubmitBtn>
                <SubmitBtn disabled={!isValid} isValid={isValid}>
                  Reset Password
                </SubmitBtn>
              </ContainerSubmitBtn>

              <FooterLinksContainer>
                <FooterLink
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                  to="/signin"
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

export default ResetPassword;
