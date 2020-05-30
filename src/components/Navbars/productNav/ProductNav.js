import React from "react";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

const Button = styled.div`
    font-family: 'Helvetica', 'Arial', sans-serif;
    color: #444444;
    font-size: 9pt;
`

class ProductNav extends React.Component {
    render(){
        return(
            <Menu>
                <Menu.Item
                name='blog'
                >
                <Button>BLOG</Button>
                </Menu.Item>
        
                <Menu.Item
                name='nourish'
                header
                >
                <Button>NOURISH</Button>
                </Menu.Item>
        
                <Menu.Item
                name='shop'
                header
                >
                <Button>SHOP</Button>
                </Menu.Item>
          </Menu>
        )
    }
}

export default ProductNav;