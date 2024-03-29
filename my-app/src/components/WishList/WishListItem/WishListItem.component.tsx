import React from "react";
import AddToCartButton from "../../UI/Buttons/AddToCartButton/AddToCartButton.component";
import Card from "../../UI/Card/Card.component";
import CardDetails from "../../UI/Card/CardDetails/CardDetails.component";
import CardMedia from "../../UI/Card/CardMedia/CardMedia.component";
import CardPrice from "../../UI/Card/CardPrice/CardPrice.component";
import CardTitle from "../../UI/Card/CardTitle/CardTitle.component";
import { IWishListItemProps } from "./wishListItem.type";
import RemoveWishtlistButton from "./RemoveWishListButton.component.tsx/RemoveWishListbutton.component";

const WishListItem: React.FC<IWishListItemProps> = ({ product }) => {
  return (
    <Card key={product.uuid} data-testid="wishlist-item">
      <RemoveWishtlistButton product={product} />
      <CardMedia image={product.cover_image_url} />
      <CardDetails>
        <CardTitle>{product.title}</CardTitle>
        <CardPrice
          discount={product.discount}
          retailPrice={product.retail_price.formatted_value}
          netPrice={product.original_retail_price.formatted_value}
        />
        <div data-testid="add-to-cart-button-container">
          <AddToCartButton data={product} />
        </div>
      </CardDetails>
    </Card>
  );
};

export default WishListItem;
