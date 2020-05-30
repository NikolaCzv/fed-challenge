import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #F8F8FF;
`

const Card = styled.div`
    border: 1px solid rgb(182, 187, 189);
    background-color: #FFFFFF;
`

class MediaSlider extends React.Component{
    state = {
        reviews: { 
            first: "You focus on putting in the work, and the technology handles the rest.",
            second: "Literally transports you from home to wherever you choose to run.",
            third: "Breathes new life into a tired, old running routine.",
            forth: "The best experience ever.",
            fifth: "I fall in love with the bike."
        }
    }

    render(){
        return(
            <Container>
                <Card>
                    {this.state.reviews.first}
                </Card>
                <Card>
                    {this.state.reviews.second} 
                </Card>
                <Card>
                    {this.state.reviews.third}
                </Card>
                <Card>
                    {this.state.reviews.forth}
                </Card>
                <Card>
                    {this.state.reviews.fifth} 
                </Card>
            </Container>
        )
    }
}

export default MediaSlider;