import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginInput({ value, onChange, placeholder, type, required = false }) {
  return (
    <LoginInputStyled>
      <BsPersonCircle className="user-icon" />
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </LoginInputStyled>
  );
}

const LoginInputStyled = styled.div`
  display: inline-flex;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  align-items: center;
  padding: 18px 24px;
  gap: 13px;
  margin-bottom: 1.12rem;

  .user-icon {
    color: #747b91;
    width: 15px;
    height: 15px;
  }

  input {
    font-size: 15px;
    border: none;
    width: 100%;
  }

  input::placeholder {
    color: #d3d3d3;
  }
`;
