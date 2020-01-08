import styled from 'styled-components';

export const GridWidth = styled.div`
  width: ${({ width }) => width ? `calc(${width} - 24px)` : 'calc(100% - 24px)'};
  padding: 10px 12px;
  display: inline-block;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FullWidth = styled.div`
  padding: 0 12px;
`;

export const CustomTextArea = styled.textarea`
  padding: 20px;
  background: #FFFFFF;
  border: ${({ error }) => error ? '1px solid #f5222d !important' : '1px solid rgba(10, 37, 67, 0.05)'};
  border-radius: 5px;
  width: calc(100% - 40px);
  outline: none;
  height: 85px;
  :focus {
    border-color:  ${({ error }) => error ? '1px solid #f5222d !important' : '#5423cf'};
    box-shadow: ${({ error }) => error ? '0 0 0 2px rgba(245, 34, 45, 0.2)' : '0 0 0 2px rgba(10, 37, 67, 0.05)'};
  }
`;

export const ErrorMsg = styled.div`
  color: #f5222d;
  font-size: 14px;
`;

export const ProfileTitle = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #0a2543;
  ::before {
    display: inline-block;
    margin-right: 4px;
    content: "*";
    font-family: SimSun;
    line-height: 1;
    font-size: 14px;
    color: #f5222d;
  }
`;

export const SaveChanges = styled.div`
  display: flex;
  float: right;
  margin-top: 20px;
  >button {
    padding: 0px 20px;
  }
`;

export const InputTitle = styled.div`
  color: #0a2543;
  font-size: 14px;
  line-height: 35px;
  vertical-align: middle;
`;

export const CalendarDiv = styled.div`
  .calendarUI {
     width: 100%;
    .react-date-picker__wrapper {
      width: 100%;
      border: 1px solid #eaeaea;
      height: 46px;
    }
  }
`;

export const ProjectButton = styled.button`
  width: 250px;
  height: 160px;
  color: #3201c3;
  background-color: #fff;
  border-color: #d9d9d9;
  border-style: dashed;
  cursor: pointer;
`;