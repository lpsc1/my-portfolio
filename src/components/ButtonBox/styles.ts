import styled from "styled-components";

export const Button = styled.button`
  width: max-content;
  align-items: center;
  display: flex;
  border: none;
  background: var(--secundary);
  color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  :hover {
    transition: 0.1s;
    transform: scale(1.05);
  }
  .icon {
    width: 14px;
    height: 14px;
    color: var(--primary);
  }
  p {
    color: var(--primary);
  }
`;
export const A = styled.a`
  text-decoration: none;
  width: max-content;
`;
