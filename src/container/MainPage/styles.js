import styled from 'styled-components';

export const Box = styled.div`
  width: 500px;
  margin: 30px 0px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 20px;
  @media(max-width: 600px) {
    width: auto;
  }
  @media(max-width: 380px) {
    width: 260px;
  }
  .scroll-box {
    height: 500px;
    overflow-y: scroll;
  }

  .margin-top-drop {
    margin-top: 20px;
  }
  .title {
    margin-bottom: 10px;
    color: blue;
  }
  .agency {
    color: #805900;
    text-align: center;
  }
  .header-box {
    color: #004a80;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
  .button-wrapper {
    margin-top: 30px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardList = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  background-color: ${({ noBg }) => !noBg && '#7d9ea9'};
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  >svg {
    color: #3ab108;
    font-size: 30px;
  }
`;