import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input onChange={onChange} value={value} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: inline-flex;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  align-items: center;
  padding: 18px 24px;
  gap: 13px;
  margin-bottom: 1.12rem;

  .icon {
    color: #747b91;
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
