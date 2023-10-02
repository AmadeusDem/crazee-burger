import styled from "styled-components";
import { theme } from "../../theme";

export default function Select({ options, value, onChange, name, Icon, className }) {
  return (
    <SelectStyled className={className}>
      <div className="icon">{Icon && Icon}</div>
      <select name={name} onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </SelectStyled>
  );
}

const SelectStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  border-radius: ${theme.borderRadius.round};

  background: ${theme.colors.background_white};
  padding: 8px 16px 8px 24px;

  .icon {
    // Position and layout
    display: flex;
    justify-content: center;
    align-items: center;

    // Typography
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.greyBlue};
  }

  select {
    // Box model (from outside in)
    border: none;
    width: 100%;

    background: #f5f5f7;

    // Typography
    font-size: ${theme.fonts.SM};
    outline: none;
  }
`;
