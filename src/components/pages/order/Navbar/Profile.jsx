import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="user-info">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/" className="disconnect-link">
          Se déconnecter
        </Link>
      </div>
      <BsPersonCircle className="picture" />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6.25rem;
  gap: 0.625rem;

  .user-info {
    text-align: right;

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.weights.bold};
    }

    .disconnect-link {
      text-decoration: none;
      color: inherit;
      font-size: ${theme.fonts.XXS};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .picture {
    color: ${theme.colors.greyBlue};
    font-size: 2.25rem;
  }
`;
