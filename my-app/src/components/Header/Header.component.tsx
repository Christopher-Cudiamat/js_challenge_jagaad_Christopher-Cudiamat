import React from "react";
import BagIcon from "./BagIcon/BagIcon.component";
import BrandLogo from "./BrandLogo/BrandLogo.component";
import "./header.style.scss";
import TotalPrice from "./TotalPrice/TotalPrice.component";
import WishlistIcon from "./WishlistIcon/WishlistIcon.component";

const Header: React.FC = () => {
  return (
    <nav className="header">
      <BrandLogo />
      <aside className="header-bag">
        <div className="header-bag__item header-bag__count">
          <TotalPrice />
          <BagIcon />
        </div>
        <div className="header-bag__item header-bag__wishlist-count ">
          <WishlistIcon />
        </div>
      </aside>
    </nav>
  );
};

export default Header;
