import React from "react";

import {
  Container,
  WrapForm,
  Limiter,
  Form,
  ContainerSubmitBtn,
  SubmitBtn,
  FormSubtitle,
} from "../FormElements";

import { useForm } from "react-hook-form";
import { animateScroll as scroll } from "react-scroll";

import Logo from "../../../images/Logo.svg";

import { ToastHelper } from "../../../helpers/toast";

const CollectChatGuestInfo = (props) => {
  const { handleSubmitCallback } = props;

  const { handleSubmit, watch } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  width={210}
                  height={210}
                  src={Logo}
                  alt="logo"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <FormSubtitle>Miami's Premier Job Board</FormSubtitle>

              <ContainerSubmitBtn>
                <SubmitBtn disabled={false} isValid={true}>
                  Enter
                </SubmitBtn>
              </ContainerSubmitBtn>
            </Form>
          </WrapForm>
        </Container>
      </Limiter>
    </>
  );
};

export default CollectChatGuestInfo;
