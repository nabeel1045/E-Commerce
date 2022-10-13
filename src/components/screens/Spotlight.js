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
                                src={
                                    require("../Assets/images/logo.svg").default
                                }
                                alt="Logo"
                            />
                        </Logo>
                        <Heading>
                            <SmallHeading>
                                Welcome to kopiku Dashboard
                            </SmallHeading>
                            <BigHeading>Let's choose menu</BigHeading>
                        </Heading>
                    </LeftBox>
                    <MiddleBox>
                        <HeaderForm>
                            <InputForm placeholder="Search menu.." />
                            <SearchImage
                                src={
                                    require("../Assets/images/search.svg")
                                        .default
                                }
                                alt="Search"
                            />
                        </HeaderForm>
                    </MiddleBox>
                    <RightBox>
                        <ImageNoti>
                            <NotiImage
                                src={
                                    require("../Assets/images/noti.svg").default
                                }
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
                                    src={
                                        require("../Assets/images/snack.svg")
                                            .default
                                    }
                                    alt="Snack"
                                />
                            </Plus>

                            <Form placeholder="Add new menu" />
                        </Add>
                    </RightBox>
                </Header>
            </HeaderContainer>

            {/* HeaderContainer Done */}

            <SpotlightContainer>
                <MainContainer>
                    <LeftContainer>
                        <IconMenu>
                            <MenuImage
                                src={
                                    require("../Assets/images/menu.svg").default
                                }
                                alt="Snack"
                            />
                        </IconMenu>

                        <IconTea>
                            <TeaImage
                                src={
                                    require("../Assets/images/tea.svg").default
                                }
                                alt="Snack"
                            />
                        </IconTea>

                        <IconWallet>
                            <WalletImage
                                src={
                                    require("../Assets/images/wallet.svg")
                                        .default
                                }
                                alt="Snack"
                            />
                        </IconWallet>

                        <IconGraph>
                            <GraphImage
                                src={
                                    require("../Assets/images/graph.svg")
                                        .default
                                }
                                alt="Snack"
                            />
                        </IconGraph>

                        <IconSettings>
                            <SettingsImage
                                src={
                                    require("../Assets/images/settings.svg")
                                        .default
                                }
                                alt="Snack"
                            />
                        </IconSettings>
                    </LeftContainer>

                    {/* Left Done */}

                    <MiddleContainer>
                        <MiddleMenuIcons>
                            <ListItems>
                                <Items>
                                    <ImageList>
                                        <CoffeeImage
                                            src={
                                                require("../Assets/images/tea.svg")
                                                    .default
                                            }
                                            alt="Coffee"
                                        />
                                    </ImageList>
                                    <ItemsHeading>Coffee</ItemsHeading>
                                </Items>
                                <Items>
                                    <ImageList>
                                        <Tea2Image
                                            src={
                                                require("../Assets/images/tea.svg")
                                                    .default
                                            }
                                            alt="Tea"
                                        />
                                    </ImageList>
                                    <ItemsHeading>Tea</ItemsHeading>
                                </Items>
                                <Items>
                                    <ImageList>
                                        <CakesImage
                                            src={
                                                require("../Assets/images/cake.svg")
                                                    .default
                                            }
                                            alt="Cakes"
                                        />
                                    </ImageList>
                                    <ItemsHeading>Cakes</ItemsHeading>
                                </Items>
                                <Items>
                                    <ImageList>
                                        <BottleImage
                                            src={
                                                require("../Assets/images/bottle.svg")
                                                    .default
                                            }
                                            alt="Bundles"
                                        />
                                    </ImageList>
                                    <ItemsHeading>Bundles</ItemsHeading>
                                </Items>
                                <Items>
                                    <ImageList>
                                        <SnacksImage
                                            src={
                                                require("../Assets/images/snacks.svg")
                                                    .default
                                            }
                                            alt="Snacks"
                                        />
                                    </ImageList>
                                    <ItemsHeading>Snacks</ItemsHeading>
                                </Items>
                            </ListItems>
                        </MiddleMenuIcons>

                        {/* MiddleMenuIcons done*/}

                        <MiddleCategories>
                            <LeftCategories>
                                <MainHeading>Beans Menu</MainHeading>
                                <Categories>
                                    <Category1>
                                        <CategoryImage>
                                            <Image1 />
                                        </CategoryImage>
                                        <HeadingBeans>
                                            Indonesian Beans
                                        </HeadingBeans>
                                        <Paragraph>
                                            Selected Coffee Beans with best
                                            Quality form indonesian
                                        </Paragraph>
                                        <Price>$ 35. 00</Price>
                                    </Category1>
                                    <Discount>
                                        <ListDiscount>
                                            <Percentage>25%</Percentage>
                                            <Percentage>50%</Percentage>
                                            <Percentage>75%</Percentage>
                                            <Percentage>100%</Percentage>
                                        </ListDiscount>
                                    </Discount>
                                    <VolumePack>
                                        <PackList>
                                            <GramPack>250g</GramPack>
                                            <GramPack>500g</GramPack>
                                            <GramPack>750g</GramPack>
                                        </PackList>
                                    </VolumePack>
                                    <Button>Add to bill</Button>
                                </Categories>
                            </LeftCategories>
                            <RightCategories>


                            </RightCategories>
                        </MiddleCategories>
                    </MiddleContainer>
                    <RightContainer></RightContainer>
                </MainContainer>
            </SpotlightContainer>
        </>
    );
}

export default Spotlight;

const SpotlightContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    padding-top: 40px;
`;
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const LeftContainer = styled.div`
    width: 10%;
`;
const IconMenu = styled.div`
    width: 40px;
    margin-bottom: 30px;
`;
const MenuImage = styled.img`
    width: 100%;
    display: block;
`;
const IconTea = styled.div`
    width: 40px;
    margin-bottom: 30px;
`;
const TeaImage = styled.img`
    width: 100%;
    display: block;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
const IconWallet = styled.div`
    width: 40px;
    margin-bottom: 30px;
`;
const WalletImage = styled.img`
    width: 100%;
    display: block;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
const IconGraph = styled.div`
    width: 40px;
    margin-bottom: 30px;
`;
const GraphImage = styled.img`
    width: 100%;
    display: block;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
const IconSettings = styled.div`
    width: 40px;
`;
const SettingsImage = styled.img`
    width: 100%;
    display: block;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;

// middle start

const MiddleContainer = styled.div`
    width: 80%;
`;
const MiddleMenuIcons = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`;
const ListItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Items = styled.li`
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child {
        margin-right: 0;
    }
    background: #eeeceb;
    padding: 10px 20px;
    border-radius: 45px;
    &:hover {
        background-color: #ff7b00;
        color: #fff;
    }
`;
const ImageList = styled.div`
    background: #fff;
    padding: 10px;
    border-radius: 50%;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
const CoffeeImage = styled.img``;
const Tea2Image = styled.img``;
const CakesImage = styled.img``;
const BottleImage = styled.img``;
const SnacksImage = styled.img``;
const ItemsHeading = styled.h1`
    font-size: 15px;
    margin-left: 13px;
`;

const RightContainer = styled.div`
    width: 10%;
`;

// done

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
    width: 40px;
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

// LeftBox done

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
    opacity: 0.5;
`;

const SearchImage = styled.img``;

// MiddleBox done

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
    color: #000;
`;
const Form = styled.input``;
const Plus = styled.div`
    width: 20px;
    margin-right: 10px;
`;
const PlusImage = styled.img`
    width: 100%;
    display: block;
`;

// RightBox Done
// HeaderContainer done
