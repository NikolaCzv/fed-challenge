import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.png";
import { Button } from "semantic-ui-react";

const Menu = styled.div`
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-bottom: 1px solid silver;
    padding-bottom: 10px;
    width: 100%;
`

const Image = styled.img`
    float: left;
    width: 7%;
    margin-left: 10px;
`

const RightItem = styled.div`
    float: right;
    width: 30%;
    padding-left: 400px;
`

const CenterConatiner = styled.div`
    float: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`

const CenterItem = styled.a`
    margin-right: 40px;
    padding-top: 25px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: #444444;
    font-size: 9pt;
    font-weight: 500;
`

class MainNav extends React.Component{
    render(){
        return(
            <Menu>
                <div><Image src={logo}></Image></div>
                <CenterConatiner>
                    <CenterItem>EXERCISE</CenterItem>
                    <CenterItem>NUTRITION</CenterItem>
                    <CenterItem>ACTIVITY</CenterItem>
                    <CenterItem>SLEEP</CenterItem>
                </CenterConatiner>
                <RightItem><Button size="mini" color="blue">SIGN UP</Button></RightItem>
            </Menu>
        )
    }
}

export default MainNav;