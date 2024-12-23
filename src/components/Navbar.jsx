import styled from "styled-components";
import Badge from '@mui/material/Badge';
import {Search, ShoppingCartOutlined } from '@mui/icons-material';
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import  store from "../redux/store";
import { Link } from "react-router-dom";


const Container= styled.div`
height:60px;
${mobile({
    height:"50px",
})};
`;
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
${mobile({
    padding:"10px 0px",
})};
`;


const Left=styled.div`
display:flex;
align-items:center;
flex:1;
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({
    display:"none",
})};
`;
const SearchContainer=styled.div`
 border : 0.5px solid gray;
 display:flex;
 align-items:center;
 margin-left:25px;
 padding:5px;
`;
const Input=styled.input`
border:none;
${mobile({
    width:"50px",
})};
`;



const Center=styled.div`
flex:1
text-align:center;`;

const Logo=styled.h1`
font-weight:600;
${mobile({
    fontSize:"24px",
})};
`;

const Right=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1 ;
${mobile({
    justifyContent:"center",
    flex:"2",
})};

`;


const MenuItem=styled.div`
font-size:14px;
margin-left:25px;

${mobile({
    fontSize:"12px",
    marginLeft:"10px",
})};
`;
function Navbar(){
    const quantity=useSelector((state)=> state.cart.quantity);
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search.."/>
                        <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge></MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;