import logoRoland from "../resources/logo-roland.png";
import logoFender from "../resources/logo-fender.png";
import logoZildjian from "../resources/logo-zildjian.png";
import logoBoss from "../resources/logo-boss.png";
import logoYamaha from "../resources/logo-yamaha.png";
import logoIbanez from "../resources/logo-ibanez.png";
import styled from "styled-components";

export function Brands() {
  const BrandContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    gap: 20px;

    .brand-img {
      height: 100px;
    }
  `;

  return (
    <BrandContainer>
      <img className="brand-img" src={logoRoland} alt="logo-roland" />
      <img className="brand-img" src={logoFender} alt="logo-fender" />
      <img className="brand-img" src={logoZildjian} alt="logo-zildjian" />
      <img className="brand-img" src={logoBoss} alt="logo-boss" />
      <img className="brand-img" src={logoYamaha} alt="logo-yamaha" />
      <img className="brand-img" src={logoIbanez} alt="logo-ibanez" />
    </BrandContainer>
  );
}
