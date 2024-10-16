import styled from "styled-components";
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';


const Container= styled.div`
height:60px;
`;
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`;


const Left=styled.div`
display:flex;
align-items:center;
flex:1;
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
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
`;



const Center=styled.div`
flex:1
text-align:center;`;
const Logo=styled.h1`
font-weight:600
`;
const Right=styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
flex:1`;
const MenuItem=styled.div`
font-size:14px;
margin-left:25px;
`;
function Navbar(){
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"grey",fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={2} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;