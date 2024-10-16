import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container=styled.div`
`;
const Wrapper=styled.div`
    padding:50px;
    display:flex;
`;
const ImageContainer=styled.div`
    flex:1;
`;
const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    `;
const Info=styled.div`
    flex:1;
    padding:0px 50px;
`;
const Title=styled.h1`
    font-weight:200;
`;
const Desc=styled.p`
    margin:20px 0px;
`;
const Price=styled.span`
    font-weight:100;
    font-size:40px; 
`;

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`;
const Filter =styled.div`
    display:flex;
    align-items:center;
`;
const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterColor=styled.div`
    height:20px;
    width:20px;
    border-radius:50%;
    background-color:${props=>props.color};
    margin: 0px 5px;
    cursor:pointer; 
`;
const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
`;
const FilterSizeOption=styled.option``;

const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`;
const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button=styled.button`
    padding:15px;
    border:2px solid teal;
    background:none;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:lightgray;
    }
`;

function Product(){
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src={require("../assets/Mens-Jake-Guitar-Vintage.png")}/>
                </ImageContainer>
                <Info>
                    <Title>White T-shirt</Title>
                    <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus viverra dolor,
                     et aliquam nulla volutpat id. Duis molestie rhoncus sapien eget aliquet. Integer 
                     sit amet sem aliquam, maximus urna ut, ornare nibh. Fusce volutpat tincidunt nulla,
                      eu elementum neque semper faucibus. Donec pulvinar faucibus nibh, non pulvinar .
                    </Desc>
                    <Price>Rs. 2999</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="grey"/>
                            <FilterColor color="darkblue"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </Info>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}
export default Product;