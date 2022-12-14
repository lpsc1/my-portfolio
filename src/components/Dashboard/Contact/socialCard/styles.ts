import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  width: max-content;
  flex-direction: row;
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  gap: 2vh;
   :hover{
    transform: scale(1.02);
  }
  .img {
    width: 35px;
    height: 35px;
    color: var(--secundary);
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text);
  .p {
    font-size: 13px;
    color: gray;
  }
`;
