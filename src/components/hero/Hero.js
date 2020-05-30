import React from "react";
import hero from "../../assets/imageHero.png";
import styled from "styled-components";
import { Button, Divider } from "semantic-ui-react";


const Container = styled.div`
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const ButtonHolder = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
`

class Hero extends React.Component{
    render(){
        return(
            <Container>
                <Image src={hero}/>
                <ButtonHolder>
                    <h1 className="heroText">The best personal training, right in your own home</h1>
                    <Divider hidden />
                    <Button fluid color="blue">JOIN IFIT COACH</Button>
                </ButtonHolder>
            </Container>
        )
    }
}

export default Hero;