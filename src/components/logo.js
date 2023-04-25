import React from "react";
import styled from "styled-components";

const LogoComp = styled.img`
  height: 75px;
`;

export function Logo(props) {
  return <LogoComp className="logo-comp" src={props.pic} alt="nicos-logo" />;
}
