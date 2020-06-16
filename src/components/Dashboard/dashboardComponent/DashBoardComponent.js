import React from 'react';
import NavHomeComponent from '../navHomeComponent/NavHomeComponent';
import HomeBannerComponent from '../homeBannerComponent/HomeBannerComponent';
import CartComponent from '../cart/cartComponent/CartComponent';
import FooterComponent from '../footer/footerComponent/FooterComponent';

const DashBoardComponent = () => {
    return (
        <React.Fragment>
            <NavHomeComponent />
            <HomeBannerComponent />
            <CartComponent />
            <FooterComponent />
        </React.Fragment>
    )
}
export default DashBoardComponent;