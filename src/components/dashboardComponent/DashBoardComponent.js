import React from 'react';
import NavHomeComponent from '../navHomeComponent/NavHomeComponent';
import HomeBannerComponent from '../homeBannerComponent/HomeBannerComponent';
import CartComponent from '../cartComponent/CartComponent';
import FooterComponent from '../footerComponent/FooterComponent';

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