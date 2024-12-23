import styled from "styled-components";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { sliderItems } from "../data";
import { useState } from "react";
import {mobile} from "../responsive";


const Container=styled.div`
display:flex;
width:100%;
height:100vh;
position:relative;
overflow:hidden;
${mobile({
    height:"50vh",
})};
`;
const Arrow=styled.div`
height:50px;
width:50px;
background: grey;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
cursor:pointer;
opacity:0.5;
z-index:2;
`;
const Wrapper=styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.5s ease;
`;
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color: ${props=>props.bg};
${mobile({
    height:"50vh",
    position:"relative",
})};
`;
const ImgContainer=styled.div`
height:100%;
flex:1;
`;
const Image=styled.img`
height:80%;
${mobile({
    height:"100%",
})};
`;
const InfoContainer=styled.div`
flex:1;
padding:50px;
${mobile({
    position:"absolute",
})};
`;
const Title=styled.h1`
font-size:70px;
${mobile({
    fontSize:"50px",
})};
`;
const Desc=styled.p`
margin:50px 0px;
font-weight:500;
font-size:20px;
letter-spacing:3px;
${mobile({
    fontSize:"14px",
    letterSpacing:"2px",
})};
`;
const Button=styled.button`
padding:10px;
font-size:20px;
background:transparent;
border:2px solid black;
cursor:pointer;
`;

function Slider(){
    const [slideIndex, setSlideIndex]=useState(0);
    const handelClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2);
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handelClick("left")}>
                <ChevronLeft/></Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg}key={item.id}>
                <ImgContainer>
                <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handelClick("right")}>
                <ChevronRight/></Arrow>
        </Container>
    )
}
export default Slider;