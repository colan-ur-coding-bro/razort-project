import styled from "styled-components";

const stuff = styled.button`
  min-height: calc(60vh);
  width: 100%;
  background: url(${(props) => props.image}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default stuff;
