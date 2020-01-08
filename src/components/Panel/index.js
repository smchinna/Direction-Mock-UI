import React from 'react';
import styled from 'styled-components';


const PanelTile = styled.div`
  background: #fff;
  margin-bottom: 15px;
`;

const PanelHead = styled.div`
  padding: 20px;
  border-bottom: 1px solid #F3F4F5;
  display: flex;
  justify-content: space-between;
  .leftSide{
    font-size: 20px;
    >span {
      margin-right: 10px;
    }
  }
  .rightSide {
    cursor: pointer;
  }
`;

const Body = styled.div`
  padding: 20px;
`;

export class Panel extends React.Component {
  render() {
    return (
      <PanelTile>
        {this.props.children}
      </PanelTile>
    );
  }
}

export class PanelHeader extends React.Component {
  render() {
    return(
      <PanelHead>
        {this.props.children}
      </PanelHead>
    )
  }
}

export class PanelBody extends React.Component {
  render() {
    return (
      <Body>
        {this.props.children}
      </Body>
    )
  }
}