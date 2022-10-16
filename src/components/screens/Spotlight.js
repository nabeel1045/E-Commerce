import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
                        <IconCartImage>
                            <ImageCart
                                src={
                                    require("../Assets/images/cart-plus-solid.svg")
                                        .default
                                }
                                alt="Snack"
                            />
                        </IconCartImage>
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
            <HrFirst />

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
                                <Items exact to={"/coffee"}>
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
                                            <Image1
                                                src={require("../Assets/images/frame2.jpg")}
                                                alt="Frame"
                                            />
                                        </CategoryImage>
                                        <DetailsCategory>
                                            <HeadingBeans>
                                                Indonesian Beans
                                            </HeadingBeans>
                                            <Paragraph>
                                                Selected Coffee Beans with best
                                                Quality form indonesian
                                            </Paragraph>
                                            <Price>$ 35. 00</Price>
                                        </DetailsCategory>
                                    </Category1>
                                    <Discount>
                                        <Heading1>Roasting Type</Heading1>
                                        <ListDiscount>
                                            <Percentage>25%</Percentage>
                                            <Percentage>50%</Percentage>
                                            <Percentage>75%</Percentage>
                                            <Percentage>100%</Percentage>
                                        </ListDiscount>
                                    </Discount>
                                    <VolumePack>
                                        <Heading1>Volume Pack</Heading1>
                                        <PackList>
                                            <GramPack>250g</GramPack>
                                            <GramPack>500g</GramPack>
                                            <GramPack>750g</GramPack>
                                        </PackList>
                                    </VolumePack>
                                    <Button>Add to bill</Button>
                                </Categories>
                                <Category2>
                                    <EthopianBeans>
                                        <CategoryImage>
                                            <Image1
                                                src={require("../Assets/images/frame4.jpg")}
                                                alt="Frame"
                                            />
                                        </CategoryImage>
                                        <DetailsCategory>
                                            <HeadingBeans>
                                                Ethopian Beans
                                            </HeadingBeans>
                                            <Paragraph>
                                                Selected Coffee Beans with best
                                                Quality form indonesian
                                            </Paragraph>
                                            <Price>$ 35. 00</Price>
                                        </DetailsCategory>
                                    </EthopianBeans>
                                    <ViewButton>view details</ViewButton>
                                </Category2>
                            </LeftCategories>
                            <RightCategories>
                                <Category3>
                                    <CostaRicaBeans>
                                        <CategoryImage>
                                            <Image1
                                                src={require("../Assets/images/frame3.jpg")}
                                                alt="Frame"
                                            />
                                        </CategoryImage>
                                        <DetailsCategory>
                                            <HeadingBeans>
                                                Costa Rica Beans
                                            </HeadingBeans>
                                            <Paragraph>
                                                Selected Coffee Beans with best
                                                Quality form indonesian
                                            </Paragraph>
                                            <Price>$ 35. 00</Price>
                                        </DetailsCategory>
                                    </CostaRicaBeans>
                                    <ViewButton>view details</ViewButton>
                                </Category3>
                                <Category4>
                                    <PeruBeans>
                                        <CategoryImage>
                                            <Image1
                                                src={require("../Assets/images/frame6.jpg")}
                                                alt="Frame"
                                            />
                                        </CategoryImage>
                                        <DetailsCategory>
                                            <HeadingBeans>
                                                PeruBeans
                                            </HeadingBeans>
                                            <Paragraph>
                                                Selected Coffee Beans with best
                                                Quality form indonesian
                                            </Paragraph>
                                            <Price>$ 35. 00</Price>
                                        </DetailsCategory>
                                    </PeruBeans>
                                    <ViewButton>view details</ViewButton>
                                </Category4>
                                <Category5>
                                    <GuatemalaBeans>
                                        <CategoryImage>
                                            <Image1
                                                src={require("../Assets/images/frame5.jpg")}
                                                alt="Frame"
                                            />
                                        </CategoryImage>
                                        <DetailsCategory>
                                            <HeadingBeans>
                                                Guatemala Beans
                                            </HeadingBeans>
                                            <Paragraph>
                                                Selected Coffee Beans with best
                                                Quality form indonesian
                                            </Paragraph>
                                            <Price>$ 35. 00</Price>
                                        </DetailsCategory>
                                    </GuatemalaBeans>
                                    <ViewButton>view details</ViewButton>
                                </Category5>
                            </RightCategories>
                        </MiddleCategories>
                    </MiddleContainer>
                    <RightContainer>
                        <BillSection>
                            <HeadingBill>Bills</HeadingBill>
                            <HeadingOrder>Order #3243</HeadingOrder>
                        </BillSection>
                        <SectionDelivery>
                            <Delivery>
                                <Item>Dine in</Item>
                                <Item>Take Away</Item>
                                <Item>Delivery</Item>
                            </Delivery>
                        </SectionDelivery>
                        <CartSection>
                            <PriceSection>
                                <CartImage>
                                    <PeruBeansImage
                                        src={require("../Assets/images/frame6.jpg")}
                                        alt="Frame"
                                    />
                                </CartImage>
                                <AddCart>
                                    <PeruBeansHeading>
                                        Peru Beans
                                    </PeruBeansHeading>
                                    <BeansGram>Beans= 75%+250g</BeansGram>
                                    <PriceHeading>$60.00</PriceHeading>
                                </AddCart>
                            </PriceSection>
                            <SectionCount>
                                <Count>
                                    <Minus>
                                        <CountImage>
                                            <ImageMinus
                                                src={
                                                    require("../Assets/images/minus.svg")
                                                        .default
                                                }
                                                alt="Minus"
                                            />
                                        </CountImage>
                                    </Minus>
                                    <Number>2</Number>
                                    <Plus1>
                                        <CountImage>
                                            <ImagePlus
                                                src={
                                                    require("../Assets/images/plus.svg")
                                                        .default
                                                }
                                                alt="Plus"
                                            />
                                        </CountImage>
                                    </Plus1>
                                </Count>
                            </SectionCount>
                        </CartSection>
                        <HR />
                        <CartSection>
                            <PriceSection>
                                <CartImage>
                                    <PeruBeansImage
                                        src={require("../Assets/images/frame2.jpg")}
                                        alt="Frame"
                                    />
                                </CartImage>
                                <AddCart>
                                    <PeruBeansHeading>
                                        Indonesian Beans
                                    </PeruBeansHeading>
                                    <BeansGram>Beans= 75%+250g</BeansGram>
                                    <PriceHeading>$60.00</PriceHeading>
                                </AddCart>
                            </PriceSection>
                            <SectionCount>
                                <Count>
                                    <Minus>
                                        <CountImage>
                                            <ImageMinus
                                                src={
                                                    require("../Assets/images/minus.svg")
                                                        .default
                                                }
                                                alt="Minus"
                                            />
                                        </CountImage>
                                    </Minus>
                                    <Number>2</Number>
                                    <Plus1>
                                        <CountImage>
                                            <ImagePlus
                                                src={
                                                    require("../Assets/images/plus.svg")
                                                        .default
                                                }
                                                alt="Plus"
                                            />
                                        </CountImage>
                                    </Plus1>
                                </Count>
                            </SectionCount>
                        </CartSection>
                        <ItemsSection>
                            <ItemCount>
                                <Item1>Items</Item1>
                                <Item1>Discount</Item1>
                            </ItemCount>
                            <PriceCount>
                                <Price1>$ 102.50</Price1>
                                <Price1>-$ 3.00</Price1>
                            </PriceCount>
                        </ItemsSection>
                        <HrLast />

                        <TotalPrice>
                            <Total>Total</Total>
                            <Prices>$ 99.50</Prices>
                        </TotalPrice>
                        <PaymentSection>
                            <HeadingPyment>Payment</HeadingPyment>
                            <PaymentMood>
                                <Cash>Cash</Cash>
                                <Cash>Debit</Cash>
                                <Cash>E-wallet</Cash>
                            </PaymentMood>
                        </PaymentSection>
                        <CheckOutButton>Check Out</CheckOutButton>
                    </RightContainer>
                </MainContainer>
            </SpotlightContainer>
        </>
    );
}

export default Spotlight;

// HeaderContainer start
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
    @media all and (max-width: 1280px) {
        height: 120px;
    }
    @media all and (max-width: 980px) {
        height: 90px;
    }
`;

// LeftBox Start

const LeftBox = styled.div`
    display: flex;
    align-items: center;
    width: 20%;
    @media all and (max-width: 1080px) {
        width: 21%;
    }
    @media all and (max-width: 980px) {
        width: 31%;
    }
    @media all and (max-width: 768px) {
        width: 35%;
    }
`;
const Logo = styled.div`
    margin-right: 40px;
    width: 40px;
    @media all and (max-width: 1280px) {
        margin-right: 20px;
    }
    @media all and (max-width: 768px) {
        width: 50px;
    }
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;
`;
const Heading = styled.div`
    @media all and (max-width: 768px) {
        margin-top: 10px;
    }
`;
const SmallHeading = styled.h2`
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;

    @media all and (max-width: 1380px) {
        font-size: 11px;
    }
    @media all and (max-width: 1280px) {
    }
    @media all and (max-width: 768px) {
        font-size: 14px;
        font-weight: 600;
    }
`;
const BigHeading = styled.h1`
    font-size: 20px;
    font-weight: 600;

    @media all and (max-width: 1440px) {
        font-size: 19px;
    }

    @media all and (max-width: 1380px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
// LeftBox done

// MiddleBox start
const MiddleBox = styled.div`
    display: flex;
    align-items: center;
    background: #eeeceb;
    padding: 20px 50px;
    border-radius: 35px;
    width: 25%;

    @media all and (max-width: 1380px) {
        padding: 15px 20px;
    }
    @media all and (max-width: 1080px) {
        padding: 15px 10px;
    }
    @media all and (max-width: 980px) {
        width: 35%;
    }
    @media all and (max-width: 768px) {
        width: 40%;
        padding: 10px 20px;
    }
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

// RightBox start
const RightBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 980px) {
        width: 30%;
    }
    @media all and (max-width: 768px) {
        width: 30%;
    }
`;
const ImageNoti = styled.div`
    width: 10%;
    margin-right: 25px;

    @media all and (max-width: 1440px) {
        width: 15%;
    }

    @media all and (max-width: 1380px) {
        width: 25%;
    }
    @media all and (max-width: 980px) {
        width: 15%;
        margin-right: 0;
        margin-left: 80px;
    }
`;
const NotiImage = styled.img`
    display: block;
    width: 100%;
`;

const Avatar = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 980px) {
        display: none;
    }
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

const IconCartImage = styled.div`
    display: none;
    @media all and (max-width: 980px) {
        display: block;
        width: 17%;
    }
`;
const ImageCart = styled.img`
    display: block;
    width: 100%;
    filter: blue(100%);
`;

const Add = styled.div`
    background: #eeeceb;
    padding: 20px 50px;
    border-radius: 35px;
    display: flex;
    color: #000;

    @media all and (max-width: 1380px) {
        padding: 20px 20px;
    }
    @media all and (max-width: 1080px) {
        padding: 20px 10px;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
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

const HrFirst = styled.hr`
    border-bottom: 1px solid #cdc5c2;
    width: 90%;
    margin: 0 auto;
`;

const HR = styled.hr`
    border-bottom: 1px solid #cdc5c2;
    margin-top: 25px;
`;

// RightBox Done
// HeaderContainer done

// SpotlightContainer start

const SpotlightContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 100%;
    padding-top: 20px;
`;
const MainContainer = styled.div`
    display: flex;
`;

// LeftContainer start
const LeftContainer = styled.div`
    width: 7%;
`;
const IconMenu = styled.div`
    width: 40px;
    margin-bottom: 30px;

    @media all and (max-width: 1280px) {
        width: 35px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const MenuImage = styled.img`
    width: 100%;
    display: block;
`;
const IconTea = styled.div`
    width: 40px;
    margin-bottom: 30px;
    @media all and (max-width: 1280px) {
        width: 35px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
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
    @media all and (max-width: 1280px) {
        width: 35px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
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
    @media all and (max-width: 1280px) {
        width: 35px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
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
    @media all and (max-width: 1280px) {
        width: 35px;
    }
    @media all and (max-width: 980px) {
        width: 30px;
    }
`;
const SettingsImage = styled.img`
    width: 100%;
    display: block;
    filter: grayscale();
    &:hover {
        filter: none;
    }
`;
// LeftContainer done

// MiddleContainer start

const MiddleContainer = styled.div`
    width: 60%;
    @media all and (max-width: 980px) {
        width: 57%;
    }
    @media all and (max-width: 768px) {
        width: 50%;
    }
`;
const MiddleMenuIcons = styled.div`
    display: flex;
    align-items: center;
`;
const ListItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Items = styled(NavLink)`
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child {
        margin-right: 0;

        @media all and (max-width: 980px) {
            display: none;
        }
        @media all and (max-width: 768px) {
            display: block;

            display: flex;
        }
    }
    background: #eeeceb;
    padding: 20px 35px;
    border-radius: 45px;
    &:hover {
        background-color: #ff7b00;
        color: #fff;
    }

    @media all and (max-width: 1440px) {
        margin-right: 15px;
        padding: 14px 20px;
    }
    @media all and (max-width: 1380px) {
        margin-right: 10px;
        padding: 5px 15px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 14px;
        padding: 5px 10px;
    }
    @media all and (max-width: 980px) {
        margin-right: 8px;
    }
    @media all and (max-width: 768px) {
        margin-right: 18px;
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
    @media all and (max-width: 1380px) {
        padding: 8px;
    }
    @media all and (max-width: 1280px) {
        padding: 0;
    }
`;
const CoffeeImage = styled.img``;
const Tea2Image = styled.img``;
const CakesImage = styled.img``;
const BottleImage = styled.img``;
const SnacksImage = styled.img``;
const ItemsHeading = styled(NavLink)`
    font-size: 15px;
    margin-left: 13px;
    @media all and (max-width: 1380px) {
        font-size: 13px;
        margin-left: 11px;
    }
`;

const MiddleCategories = styled.div`
    display: flex;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
    }
`;

// LeftCategories start

const LeftCategories = styled.div`
    width: 45%;

    @media all and (max-width: 1440px) {
        width: 47%;
    }
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
`;
const MainHeading = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-top: 60px;
    margin-bottom: 30px;

    @media all and (max-width: 1380px) {
        margin-top: 40px;
        margin-bottom: 30px;
    }
    @media all and (max-width: 1280px) {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media all and (max-width: 980px) {
        margin-top: 10px;
        margin-bottom: 20px;
    }
`;
const Categories = styled.div`
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 30px 0;
    @media all and (max-width: 980px) {
        padding: 15px 0;
    }
`;
const Category1 = styled.div`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    @media all and (max-width: 768px) {
        display: flex;
    }
`;
const CategoryImage = styled.div`
    width: 50%;
    background-color: #eeeceb;
    overflow: hidden;
    font-weight: 600;
    border-radius: 50px;
    @media all and (max-width: 768px) {
        width: 40%;
    }
`;
const Image1 = styled.img`
    width: 100%;
    display: block;
`;

const DetailsCategory = styled.div`
    padding: 15px;

    @media all and (max-width: 1380px) {
        padding: 0;
    }
    @media all and (max-width: 980px) {
        text-align: center;
        padding: 7px;
    }
    @media all and (max-width: 768px) {
        width: 50%;
    }
`;
const HeadingBeans = styled.h2`
    font-weight: 600;
    font-size: 18px;
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
`;
const Paragraph = styled.p`
    font-size: 14px;
    width: 83%;
    line-height: 25px;
    margin-bottom: 10px;

    @media all and (max-width: 1280px) {
        width: 94%;
        margin-bottom: 10px;
        line-height: 25px;
    }
    @media all and (max-width: 1080px) {
        width: 97%;
        line-height: 25px;
    }
    @media all and (max-width: 980px) {
        width: 102%;
        font-size: 13px;
    }
    @media all and (max-width: 768px) {
        width: 100%;
        font-size: 16px;
    }
`;
const Price = styled.h3`
    font-weight: 600;
    margin-bottom: 10px;
    @media all and (max-width: 980px) {
        margin-bottom: 0px;
    }
`;

const Discount = styled.div`
    margin-top: 20px;
    padding-left: 10px;
`;
const ListDiscount = styled.ul`
    display: flex;
    margin-bottom: 20px;
`;
const Percentage = styled.li`
    margin-right: 20px;
    background-color: #d5d2d1;
    padding: 15px 17px;
    border-radius: 35px;
    color: #f6f5f4;
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
    &:last-child {
        margin-right: 0;
    }
    &:nth-child(2) {
        background-color: #21282c;
        color: #f6f5f4;
    }

    @media all and (max-width: 1380px) {
        margin-right: 10px;
    }
    @media all and (max-width: 1280px) {
        padding: 12px 12px;
    }
    @media all and (max-width: 1080px) {
        padding: 12px 9px;
    }
    @media all and (max-width: 980px) {
        padding: 9px 7px;
        font-size: 12px;
        margin-right: 6px;
    }
    @media all and (max-width: 768px) {
        padding: 11px 10px;
        font-size: 15px;
        margin-right: 10px;
    }
`;
const VolumePack = styled.div`
    padding-left: 10px;
    margin-bottom: 40px;

    @media all and (max-width: 1080px) {
        margin-bottom: 25px;
    }
`;
const PackList = styled.ul`
    display: flex;
`;
const Heading1 = styled.h6`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
    @media all and (max-width: 768px) {
        font-size: 18px;
    }
`;
const GramPack = styled.li`
    margin-right: 40px;
    background-color: #d5d2d1;
    padding: 15px 25px;
    border-radius: 35px;
    color: #f6f5f4;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
    &:nth-child(2) {
        background-color: #21282c;
        color: #f6f5f4;
    }

    @media all and (max-width: 1380px) {
        margin-right: 20px;
    }
    @media all and (max-width: 1280px) {
        padding: 14px 19px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 14px;
        padding: 14px 17px;
    }
    @media all and (max-width: 980px) {
        margin-right: 5px;
        padding: 10px 10px;
    }
`;
const Button = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #ff7b00;
    padding: 19px 110px;
    border-radius: 35px;
    font-size: 20px;
    color: #fff;

    @media all and (max-width: 1380px) {
        padding: 19px 100px;
        font-size: 19px;
    }
    @media all and (max-width: 1280px) {
        padding: 19px 80px;
    }
    @media all and (max-width: 1080px) {
        padding: 15px 65px;
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        padding: 15px 40px;
        font-size: 15px;
    }
    @media all and (max-width: 768px) {
        padding: 15px 55px;
        font-size: 18px;
    }
`;

// Category2 start
const Category2 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 12px 0;
    @media all and (max-width: 1080px) {
        margin-top: 15px;
    }
    @media all and (max-width: 980px) {
        padding: 10px 0;
        margin-top: 10px;
    }
`;

const EthopianBeans = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const CostaRicaBeans = styled.div`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;
// Category2 done

// Category3 start
const Category3 = styled.div`
    margin-top: 113px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 30px 0;
    margin-left: 20px;
    @media all and (max-width: 1380px) {
        margin-top: 95px;
    }
    @media all and (max-width: 1280px) {
        margin-top: 65px;
        margin-left: 9px;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 52px;
        padding: 10px 0;
    }
    @media all and (max-width: 768px) {
        width: 201%;
        margin-top: 15px;
        margin-left: 0px;
    }
`;

// Category3 done

// Category4 start
const Category4 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 20px 0;
    margin-left: 20px;
    @media all and (max-width: 1280px) {
        margin-left: 9px;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
    @media all and (max-width: 980px) {
        padding: 5px 0;
        margin-top: 10px;
    }
    @media all and (max-width: 768px) {
        width: 201%;
        margin-left: 0px;
    }
`;
const PeruBeans = styled.div`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    @media all and (max-width: 768px) {
        display: flex;
    }
`;
// Category4 done

// Category5 start
const Category5 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 20px 0;
    margin-left: 20px;
    @media all and (max-width: 1280px) {
        margin-left: 9px;
    }
    @media all and (max-width: 980px) {
        padding: 5px 0;
        margin-top: 10px;
    }
    @media all and (max-width: 768px) {
        width: 201%;
        margin-left: 0px;
    }
`;
const GuatemalaBeans = styled.div`
    display: flex;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const ViewButton = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #e5e0de;
    padding: 19px 110px;
    border-radius: 35px;
    font-size: 20px;
    color: #000;
    &:hover {
        background-color: #ff7b00;
        color: #fff;
    }
    @media all and (max-width: 1380px) {
        padding: 19px 90px;
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        padding: 19px 60px;
    }
    @media all and (max-width: 1080px) {
        padding: 15px 40px;
        font-size: 17px;
    }
    @media all and (max-width: 980px) {
        padding: 15px 37px;
        font-size: 15px;
    }
    @media all and (max-width: 768px) {
        padding: 20px 50px;
        font-size: 18px;
    }
`;
const RightCategories = styled.div`
    width: 47%;

    @media all and (max-width: 1440px) {
        width: 48%;
    }
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 768px) {
        width: 90%;
    }
`;

// RightContainer start
const RightContainer = styled.div`
    width: 32%;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 40px 30px 65px 30px;
    height: 100%;
    @media all and (max-width: 1380px) {
        width: 34%;
        padding: 20px;
    }
    @media all and (max-width: 1280px) {
        margin-left: 10px;
        padding: 13px;
    }
    @media all and (max-width: 768px) {
        margin-top: 50px;
        width: 43%;
        margin-left: 0;
        padding: 28px 10px;
    }
`;

const BillSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media all and (max-width: 1280px) {
        margin-bottom: 30px;
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;
const HeadingBill = styled.h1`
    font-size: 20px;
    font-weight: 600;
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
`;
const HeadingOrder = styled.h1`
    font-size: 20px;
    font-weight: 600;
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 980px) {
        font-size: 15px;
    }
`;

const Delivery = styled.ul`
    display: flex;
`;
const Item = styled.li`
    background-color: #d5d2d1;
    padding: 15px 20px;
    margin-right: 20px;
    border-radius: 35px;
    color: #000;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
    &:nth-child(2) {
        background-color: #21282c;
        color: #f6f5f4;
    }
    @media all and (max-width: 1380px) {
        padding: 17px 14px;
    }
    @media all and (max-width: 1280px) {
        padding: 12px 10px;
        font-size: 15px;
    }
    @media all and (max-width: 1080px) {
        font-size: 14px;
    }
    @media all and (max-width: 980px) {
        font-size: 13px;
        padding: 12px 8px;
        margin-right: 5px;
    }
`;
const SectionDelivery = styled.div``;
const CartSection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    @media all and (max-width: 1080px) {
    }
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        margin-top: 20px;
    }
`;
const PriceSection = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    @media all and (max-width: 1080px) {
        width: 80%;
        margin-bottom: 20px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const CartImage = styled.div`
    width: 60%;
    @media all and (max-width: 980px) {
        width: 70%;
    }
`;
const PeruBeansImage = styled.img`
    width: 100%;
    display: block;
`;
const AddCart = styled.div`
    width: 83%;
`;
const PeruBeansHeading = styled.h2`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
    @media all and (max-width: 1280px) {
        margin-bottom: 13px;
    }
    @media all and (max-width: 980px) {
        font-size: 20px;
    }
`;
const BeansGram = styled.h3`
    font-size: 13px;
    color: #8d8785;
    margin-bottom: 20px;
    @media all and (max-width: 1280px) {
        font-size: 11px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 10px;
    }
    @media all and (max-width: 980px) {
        font-size: 13px;
    }
`;
const PriceHeading = styled.h4`
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 20px;
    }
`;
const SectionCount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -70px;
    margin-left: 35px;
    @media all and (max-width: 1280px) {
        margin-bottom: -55px;
    }
    @media all and (max-width: 980px) {
        margin-bottom: 0px;
        width: 100%;
    }
`;

const Count = styled.ul`
    display: flex;
    align-items: center;
    @media all and (max-width: 980px) {
        /* flex-wrap: wrap; */
    }
`;
const Minus = styled.li`
    margin-right: 20px;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    padding: 15px 7px;
    border-radius: 50%;
    @media all and (max-width: 1280px) {
        margin-right: 7px;
        padding: 15px 7px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 7px;
        padding: 11px 6px;
    }
    @media all and (max-width: 980px) {
        margin-right: 30px;
        padding: 16px 8px;
    }
`;
const CountImage = styled.div``;
const ImageMinus = styled.img`
    display: block;
    width: 100%;
`;
const Number = styled.li`
    font-weight: 600;
    @media all and (max-width: 980px) {
        font-size: 23px;
    }
`;
const Plus1 = styled.li`
    margin-left: 20px;
    border: 1px solid #000;
    padding: 5px;
    border-radius: 50%;

    @media all and (max-width: 1280px) {
        margin-left: 9px;
    }
    @media all and (max-width: 980px) {
        margin-left: 30px;
    }
`;

const ImagePlus = styled.img`
    display: block;
    width: 100%;
`;

const ItemsSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    @media all and (max-width: 768px) {
        margin-top: 20px;
    }
`;
const ItemCount = styled.ul``;

const Item1 = styled.li`
    margin-bottom: 10px;
    color: #8d8785;
    font-size: 14px;
`;

const PriceCount = styled.ul``;

const Price1 = styled.li`
    color: #13ee5f;
    margin-bottom: 10px;
    font-size: 16px;
    &:nth-child(2) {
        color: red;
    }
`;
const HrLast = styled.hr`
    border-bottom: 1px solid #cdc5c2;
    margin-top: 5px;
`;

const TotalPrice = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const Total = styled.li`
    color: #000;
    font-size: 14px;
    font-weight: 600;
`;
const Prices = styled.li`
    font-size: 16px;
    color: #13ee5f;
`;

const PaymentSection = styled.div`
    margin-top: 80px;

    @media all and (max-width: 1380px) {
        margin-top: 40px;
    }
    @media all and (max-width: 768px) {
        margin-top: 20px;
    }
`;
const PaymentMood = styled.ul`
    display: flex;
    margin-bottom: 40px;
    @media all and (max-width: 768px) {
        margin-bottom: 25px;
    }
`;
const HeadingPyment = styled.h6`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Cash = styled.li`
    margin-right: 40px;
    background-color: #d5d2d1;
    padding: 15px 23px;
    border-radius: 35px;
    color: #f6f5f4;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
    &:nth-child(2) {
        background-color: #21282c;
        color: #f6f5f4;
    }

    @media all and (max-width: 1380px) {
        margin-right: 39px;
    }
    @media all and (max-width: 1280px) {
        margin-right: 21px;
        padding: 15px 19px;
    }
    @media all and (max-width: 1080px) {
        margin-right: 20px;
        padding: 15px 16px;
    }
    @media all and (max-width: 980px) {
        margin-right: 11px;
        padding: 15px 9px;
    }
`;
const CheckOutButton = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #ff7b00;
    padding: 21px 139px;
    border-radius: 35px;
    font-size: 16px;
    color: #fff;

    @media all and (max-width: 1380px) {
        padding: 21px 136px;
    }
    @media all and (max-width: 1280px) {
        padding: 20px 100px;
        font-size: 16px;
    }
    @media all and (max-width: 1080px) {
        padding: 20px 90px;
    }
    @media all and (max-width: 980px) {
        padding: 20px 60px;
    }
    @media all and (max-width: 768px) {
        font-size: 18px;
    }
`;
