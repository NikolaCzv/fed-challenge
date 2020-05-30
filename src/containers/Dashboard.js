import React from "react";
import ProductNav from "../components/Navbars/productNav/ProductNav";
import MainNav from "../components/Navbars/mainNav/MainNav";
import Hero from "../components/hero/Hero";
import MediaSlider from "../components/mediaSlider/MediaSlider"

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <ProductNav />
                <MainNav />
                <Hero />
                <MediaSlider />
            </div>
        )
    }
}

export default Dashboard;