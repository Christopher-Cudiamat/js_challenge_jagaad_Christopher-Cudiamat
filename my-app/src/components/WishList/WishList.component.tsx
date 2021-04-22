import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux.config";
import { getDistinctElement } from "../../utils/getDistinctElement";
import AddToCartButton from "../UI/Buttons/AddToCartButton/AddToCartButton.component";
import Card from "../UI/Card/Card.component";
import CardDetails from "../UI/Card/CardDetails/CardDetails.component";
import CardMedia from "../UI/Card/CardMedia/CardMedia.component";
import CardPrice from "../UI/Card/CardPrice/CardPrice.component";
import CardTitle from "../UI/Card/CardTitle/CardTitle.component";

const WishList: React.FC = () => {
  const products = useSelector((state: AppState) => state.bag.products);

  return (
    <ul>
      {products?.map((el: any) => (
        <Card key={el.uuid}>
          <CardMedia image={el.cover_image_url} />

          <CardDetails>
            <CardTitle>{el.title}</CardTitle>
            <CardPrice
              discount={el.discount}
              retailPrice={el.retail_price.formatted_value}
              netPrice={el.original_retail_price.formatted_value}
            />
            <AddToCartButton data={el} />
          </CardDetails>
        </Card>
      ))}
    </ul>
  );
};

export default WishList;
