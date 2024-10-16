import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import {mobile} from "../responsive";

const Container=styled.div`

`;
const Wrapper=styled.div`
    padding:20px;
    ${mobile({
        padding:"10px",
    })};
`;
const Title=styled.h1`
    font-weight:300;
    text-align:center;
`;
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopTexts=styled.div`
${mobile({
    display:"none",
})};
`;
const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;
const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props)=>props.type==="filled" && "none" };
    background-color:${(props)=>props.type==="filled"? "black":"transparent"};
    color:${(props)=>props.type==="filled"? "white":"black"};

`;

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({
        flexDirection:"column",
    })};
`;

const Info=styled.div`
    flex:3;    
`;

const Hr=styled.hr`
    height:1px;
    background-color:#eee;
    border:none;
`;
const Product=styled.div`
    display:flex;
    justify-content:space-between;
    margin:5px 0px;
    ${mobile({
        flexDirection:"column",
    })};
`;
const ProductDetail=styled.div`
    flex:2;
    display:flex;
`;
const Image=styled.img`
    width:200px;
    height:200px;
    object-fit:cover;
`;
const Details=styled.div`
    padding:10px;
    display:flex;
    flex-direction:column; 
    justify-content:space-between;
`;
const ProductName=styled.span`

`;
const ProductId=styled.span`

`;
const ProductColor=styled.div`
    height:20px;
    width:20px;
    border-radius:50%;
    background-color:${props=>props.color};
`;

const ProductSize=styled.span`

`;
const PriceDetails=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    ${mobile({
        flexDirection:"row",
        justifyContent:"space-around",
    })};
`;
const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({
        margin:"5px 15px",
    })};
`;
const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({
        marginBottom:"20px",
    })};
`;

const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgrey;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;
const SummaryTitle=styled.h1`
    font-weight:200;
`;
const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${(props)=>props.type==="total" && "500"};    
    font-size:${(props)=>props.type==="total" && "24px"};    
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const Button=styled.button`
    padding:10px;
    width:100%;
    background-color:black;
    color:white;
    font-weight:600;
    cursor:pointer;
`;

function Cart (){
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={require("../assets/category3.jpg")}/>
                                <Details>
                                    <ProductName><b>Product:</b>DRESS</ProductName>
                                    <ProductId><b>ID:</b>928297559</ProductId>
                                    <ProductColor color="orange"/>
                                    <ProductSize><b>Size:</b>32</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    Rs. 699
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src={require("../assets/category1.jpg")}/>
                                <Details>
                                    <ProductName><b>Product:</b>NEW DRESS</ProductName>
                                    <ProductId><b>ID:</b>928297564</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    Rs. 699
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs. 999</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs. 59</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>Rs. -59</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rs. 999</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}
export default Cart;