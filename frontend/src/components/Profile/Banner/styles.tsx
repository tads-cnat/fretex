import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #282828;
  background-size: cover;
  position: relative;

  .editBtn {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: .3s;

    &:hover {
        opacity: calc(.7);
    }
    .edit {
      width: 100%;
    }
  }
`;
