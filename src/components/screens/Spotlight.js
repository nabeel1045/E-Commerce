import React from "react";
import styled from "styled-components";

function Spotlight() {
  return (
    <>
      <HeaderContainer>
        <Header>
          <LeftBox>
            <Logo>
              <LogoImage
                src={require("../Assets/images/logo.svg").default}
                alt="Logo"
              />
            </Logo>
            <Heading>
              <SmallHeading>Welcome to kopiku Dashboard</SmallHeading>
              <BigHeading>Let's choose menu</BigHeading>
            </Heading>
          </LeftBox>
          <MiddleBox>
            <HeaderForm>
              <InputForm placeholder="Search menu.." />
              <SearchImage
                src={require("../Assets/images/search.svg").default}
                alt="Search"
              />
            </HeaderForm>
          </MiddleBox>
          <RightBox>
            <ImageNoti>
              <NotiImage
                src={require("../Assets/images/noti.svg").default}
                alt="Noti"
              />
            </ImageNoti>

            <Avatar>
              <RoundImage>
                <FrameImage
                  src={require("../Assets/images/frame.jpg")}
                  alt="Frame"
                />
              </RoundImage>
              <Details>
                <Admin>Admin</Admin>
                <Name>Alex Jorand</Name>
              </Details>
            </Avatar>
            <Add>
              <Plus>
                <PlusImage
                  src={require("../Assets/images/snack.svg").default}
                  alt="Snack"
                />
              </Plus>

              <Form placeholder="Add new menu" />
            </Add>
          </RightBox>
        </Header>
      </HeaderContainer>
    </>
  );
}

export default Spotlight;

const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;
const Logo = styled.div`
  margin-right: 40px;
`;
const LogoImage = styled.img`
  width: 100%;
  display: block;
`;
const Heading = styled.div``;
const SmallHeading = styled.h2`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const BigHeading = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const MiddleBox = styled.div`
  display: flex;
  align-items: center;
  background: #eeeceb;
  padding: 20px 50px;
  border-radius: 35px;
  width: 25%;
`;
const HeaderForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const InputForm = styled.input`
  border: none;
  background: #eeeceb;
`;

const SearchImage = styled.img``;
const RightBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
const ImageNoti = styled.div`
  width: 10%;
  margin-right: 25px;
`;
const NotiImage = styled.img`
  display: block;
  width: 100%;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
`;
const RoundImage = styled.div`
  width: 20%;
  border-radius: 50%;
  overflow: hidden;
`;
const FrameImage = styled.img`
  width: 100%;
  display: block;
`;

const Details = styled.div`
  margin-left: 15px;
`;
const Admin = styled.h4`
  font-size: 13px;
  color: #a59e98;
  margin-bottom: 7px;
`;
const Name = styled.h3`
  font-weight: 600;
  font-size: 16px;
`;

const Add = styled.div`
  background: #eeeceb;
  padding: 20px 50px;
  border-radius: 35px;
  display: flex;
`;
const Form = styled.input``;
const Plus = styled.div`
  width: 20px;
`;
const PlusImage = styled.img`
  width: 100%;
  display: block;
`;
