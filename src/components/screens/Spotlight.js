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
                                    <ViewButton>Add to bill</ViewButton>
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
                                    <ViewButton>Add to bill</ViewButton>
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
                                    <ViewButton>Add to bill</ViewButton>
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
                                    <ViewButton>Add to bill</ViewButton>
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
                                <Minus>
                                    <ImageMinus
                                        src={
                                            require("../Assets/images/minus.svg")
                                                .default
                                        }
                                        alt="Minus"
                                    />
                                </Minus>
                                <Number>2</Number>
                                <Plus1>
                                    <ImagePlus
                                        src={
                                            require("../Assets/images/plus.svg")
                                                .default
                                        }
                                        alt="Plus"
                                    />
                                </Plus1>
                            </SectionCount>
                        </CartSection>
                    </RightContainer>
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
    /* justify-content: space-between; */
`;
const LeftContainer = styled.div`
    width: 7%;
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
    width: 60%;
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

const MiddleCategories = styled.div`
    display: flex;
`;
const LeftCategories = styled.div`
    width: 45%;
`;
const MainHeading = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-top: 60px;
    margin-bottom: 30px;
`;
const Categories = styled.div`
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 30px 0;
`;
const Category1 = styled.div`
    display: flex;
`;
const CategoryImage = styled.div`
    width: 50%;
    background-color: #eeeceb;
    overflow: hidden;
    font-weight: 600;
    border-radius: 50px;
`;
const Image1 = styled.img`
    width: 100%;
    display: block;
`;

const DetailsCategory = styled.div`
    padding: 15px;
`;
const HeadingBeans = styled.h2`
    font-weight: 600;
    font-size: 18px;
`;
const Paragraph = styled.p`
    font-size: 14px;
    width: 83%;
`;
const Price = styled.h3`
    font-weight: 600;
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
`;
const VolumePack = styled.div`
    padding-left: 10px;
    margin-bottom: 40px;
`;
const PackList = styled.ul`
    display: flex;
`;
const Heading1 = styled.h6`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
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
`;
const Button = styled.button`
    display: block;
    margin: 0 auto;
    background-color: #ff7b00;
    padding: 19px 110px;
    border-radius: 35px;
    font-size: 20px;
    color: #fff;
`;

const Category2 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 12px 0;
`;

const EthopianBeans = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const CostaRicaBeans = styled.div`
    display: flex;
`;
const Category3 = styled.div`
    margin-top: 113px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 30px 0;
    margin-left: 20px;
`;

const Category4 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 20px 0;
    margin-left: 20px;
`;
const PeruBeans = styled.div`
    display: flex;
`;

const Category5 = styled.div`
    margin-top: 20px;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 20px 0;
    margin-left: 20px;
`;
const GuatemalaBeans = styled.div`
    display: flex;
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
`;
const RightCategories = styled.div`
    width: 47%;
`;

const RightContainer = styled.div`
    width: 32%;
    background-color: #eeeceb;
    border-radius: 20px;
    padding: 30px;
`;

const BillSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;
const HeadingBill = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;
const HeadingOrder = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;
const Delivery = styled.ul`
    display: flex;
`;
const Item = styled.li`
    background-color: #d5d2d1;
    padding: 15px 25px;
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
`;
const SectionDelivery = styled.div``;
const CartSection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
`;
const PriceSection = styled.div`
    display: flex;
    align-items: center;
`;
const CartImage = styled.div`
    width: 40%;
`;
const PeruBeansImage = styled.img`
    width: 100%;
    display: block;
`;
const AddCart = styled.div``;
const PeruBeansHeading = styled.h2`
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
`;
const BeansGram = styled.h3`
    font-size: 15px;
    color: #8d8785;
    margin-bottom: 20px;
`;
const PriceHeading = styled.h4`
    font-weight: 600;
`;
const SectionCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;
const Minus = styled.div``;
const ImageMinus = styled.img`
    display: block;
`;
const Number = styled.h2``;
const Plus1 = styled.div``;
const ImagePlus = styled.img`
    display: block;
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
