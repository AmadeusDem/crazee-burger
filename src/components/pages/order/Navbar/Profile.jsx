import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../theme";

export default function Profile() {
  const { username } = useParams();
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
  // Position and layout
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  // Box models
  min-width: 6.25rem;

  .user-info {
    text-align: right;

    span {
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.primary};
    }

    .disconnect-link {
      font-size: ${theme.fonts.XXS};
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .picture {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`;
