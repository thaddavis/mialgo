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
  FormSubtitle,
} from "../FormElements";

import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { animateScroll as scroll } from "react-scroll";

import Logo from "../../../images/Logo.svg";

import { ToastHelper } from "../../../helpers/toast";

import axios from "axios";

const CollectChatGuestInfo = (props) => {
  const history = useNavigate();

  const { handleSubmitCallback } = props;

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
      handleSubmitCallback(data);

      ToastHelper.success("Welcome to Mialgo.io");
    } catch (e) {
      ToastHelper.error(`${e.toString()}`);
    }
  };

  watch("newPassword");

  return (
    <>
      <Limiter>
        <Container noTopMargin>
          <WrapForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* <IoArrowBack
                onClick={() => {
                  toggleHome();
                  // history.goBack();
                }}
              /> */}

              {/* <FormTitle>MIALGO</FormTitle> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={Logo} alt="logo" />
              </div>

              <FormSubtitle>Miami's Premier Job Board</FormSubtitle>

              <div>
                {/* <FormFieldLabel htmlFor="name">Name</FormFieldLabel> */}

                {/* <WrapFormField
                  isDirty={dirtyFields.name}
                  hasError={!!errors.name}
                >
                  <Input
                    placeholder="Name"
                    name="name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </WrapFormField> */}

                {/* {errors.name ? (
                  <span style={{ color: "red" }}>Name Required</span>
                ) : (
                  <br />
                )} */}
              </div>

              <div>
                {/* <FormFieldLabel htmlFor="email">Email</FormFieldLabel> */}

                {/* <WrapFormField
                  isDirty={dirtyFields.email}
                  hasError={!!errors.email}
                >
                  <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                </WrapFormField> */}

                {/* {errors.email ? (
                  <span style={{ color: "red" }}>Email Required</span>
                ) : (
                  <br />
                )} */}
              </div>

              <ContainerSubmitBtn>
                {/* <SubmitBtn disabled={!isValid} isValid={isValid}> */}
                <SubmitBtn disabled={false} isValid={true}>
                  Enter
                </SubmitBtn>
              </ContainerSubmitBtn>

              {/* <FooterLinksContainer>
                <FooterLink
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                  to="/"
                >
                  Home
                </FooterLink>
              </FooterLinksContainer> */}
            </Form>
          </WrapForm>
        </Container>
      </Limiter>
    </>
  );
};

export default CollectChatGuestInfo;
