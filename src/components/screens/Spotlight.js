import React from "react";
import styled from "styled-components";

function Spotlight() {
  return (
    <>
      <HeaderContainer>
        <Header>
          <LeftBox>
            <Logo>
              <LogoImage src={require ("../Assets/images/logo.svg").default} alt="Logo" />
            </Logo>
            <SmallHeading>Welcome to kopiku Dashboard</SmallHeading>
            <BigHeading>Let's choose menu</BigHeading>
          </LeftBox>
          <MiddleBox>
            <HeaderForm>
              <InputForm placeholder="Enter....." />
              
                <Image src={ require("../Assets/images/search.svg").default} alt="Search"/>
              
            </HeaderForm>
          </MiddleBox>
          <RightBox>
            <ImageNoti>
              <NotiImage src={ require("../Assets/images/noti.svg").default} alt="Noti"/>
            </ImageNoti>
          </RightBox>
        </Header>
      </HeaderContainer>
    </>
  );
}

export default Spotlight;

const HeaderContainer = styled.div``;
const Header = styled.div``;
const LeftBox = styled.div``;
const Logo = styled.div``;
const LogoImage = styled.img``;
const SmallHeading = styled.h2``;
const BigHeading = styled.h1``;
const MiddleBox = styled.div``;
const HeaderForm = styled.form``;
const InputForm = styled.input``;

const Image = styled.img``;
const RightBox = styled.div``;
const ImageNoti = styled.div``;
const NotiImage = styled.img``;

