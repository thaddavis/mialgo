import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link } from 'react-router-dom';

import { flex_sb, flex_w } from "../Mixins";

export const Limiter = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: ${(props) => {
    const { noTopMargin } = props;
    return noTopMargin ? "0px" : "80px";
  }};
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    108deg,
    rgba(189, 75, 144, 1) 0%,
    rgba(100, 33, 141, 1) 100%
  );
`;

export const WrapForm = styled.div`
  width: 680px;
  background: #fff;
  border-radius: 1em;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 768px) {
    padding: 4em;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 1em;

  ${flex_w}
  ${flex_sb}

  svg {
    color: #555;
    transform: scale(2.6);
    margin: 1em;
  }
`;

export const FormTitle = styled.span`
  width: 100%;
  display: block;
  color: #555555;
  line-height: 1.2;
  padding: 1em;
  font-size: 2em;
  text-align: center;
`;

export const FormSubtitle = styled.span`
  width: 100%;
  display: block;
  color: #555555;
  line-height: 1.2;
  padding: 1em;
  font-size: 1.5em;
  text-align: center;
`;

export const FormFieldLabel = styled.span`
  font-size: 1rem;
  color: #555555;
  line-height: 3;
  padding: 1em 0;
`;

export const WrapFormField = styled.div`
  width: 100%;
  background-color: #f7f7f7;

  border: ${(props) => {
    const { hasError, isDirty } = props;
    return hasError && isDirty ? `1px solid #f00` : `1px solid #e6e6e6`;
  }};
  border-radius: 0.7em;
`;

export const Input = styled.input`
  color: #333333;
  line-height: 1.2;
  font-size: 1rem;
  display: block;
  width: 100%;
  height: 4rem;
  padding: 0 1em;
  background: transparent;
  border-radius: 0.6em;

  ::placeholder {
    color: #8f8f8f;
  }

  :focus {
    border: 1px solid #00f;
  }

  ${(props) => {
    const { hasError, isDirty } = props;
    return hasError && isDirty
      ? `
        :focus {
          border: 1px solid #00f;
        }
      `
      : null;
  }};
`;

export const ContainerSubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #333333;
  border-radius: 0.5em;
  font-size: 1rem;
  color: #fff;
  line-height: 1.2;
  transition: all 0.4s;
  position: relative;
  z-index: 1;
  margin: 1em 0;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  width: 100%;
  height: 60px;
  background-color: ${({ isValid }) => (isValid ? "#333333" : "#e3e3e3")};
  color: ${({ isValid }) => (isValid ? "#fff" : "#000")};

  border-radius: 0.5em;
  font-size: 1rem;
  line-height: 1.2;
  transition: all 0.4s;
  position: relative;
  z-index: 1;

  :hover {
    color: #000;
    background-color: #d3d3d3;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 4em;
  text-align: center;
`;

export const FooterLink = styled(LinkR)`
  font-size: 1rem;
  color: #999999;
  line-height: 1.5;
  text-decoration: none;
  border-bottom: 1px solid #999999;

  :hover {
    color: #5f5f5f;
    text-decoration: none;
    /* border-bottom: 1px solid #5f5f5f;
    color: #5f5f5f; */
    /* color: pink;
    text-decoration: none; */
  }
`;

export const ForgotPasswordLink = styled(LinkR)`
  font-size: 1rem;
  color: #999999;
  line-height: 1.5;
  border-bottom: 1px solid #999999;

  :hover {
    color: #5f5f5f;
    text-decoration: none;
    /* border-bottom: 1px solid #5f5f5f;
    color: #5f5f5f; */
  }
`;

export const SignUpLink = styled(LinkR)`
  font-size: 1rem;
  color: #999999;
  line-height: 1.5;
  border-bottom: 1px solid #999999;

  :hover {
    color: #5f5f5f;
    text-decoration: none;
    /* border-bottom: 1px solid #5f5f5f;
    color: #5f5f5f; */
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;

  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
`;
