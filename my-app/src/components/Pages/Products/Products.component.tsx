import React, { useEffect, useState } from "react";
import Card from "../../UI/Card/Card.component";
import CardDescription from "../../UI/Card/CardDescription/CardDescription.component";
import CardDetails from "../../UI/Card/CardDetails/CardDetails.component";
import CardMedia from "../../UI/Card/CardMedia/CardMedia.component";
import CardPrice from "../../UI/Card/CardPrice/CardPrice.component";
import CardTitle from "../../UI/Card/CardTitle/CardTitle.component";
import { getProducts } from "../../../services/productsController";
import "./products.style.scss";
import AddToCartButton from "../../UI/Buttons/AddToCartButton/AddToCartButton.component";
import WishlistButton from "../../UI/Buttons/WishlistButton/WishlistButton.component";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res: any) => {
      setProducts(res);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <ul className="product-list">
          {products?.map((el: any) => (
            <Card key={el.uuid}>
              <CardMedia image={el.cover_image_url}>
                <WishlistButton isDisabled={true} />
              </CardMedia>
              <CardDetails>
                <CardTitle>{el.title}</CardTitle>
                <CardDescription>{el.description}</CardDescription>
                {/* <p>{el.net_price}</p> */}
                {/* net_price or retail_price => if discount prop is greather than 0, full price is net_price.formatted_value (to be shown as striked) and final price will be retail_price.formatted_value */}
                <CardPrice
                  discount={el.discount}
                  retailPrice={el.retail_price.formatted_value}
                  netPrice={el.original_retail_price.formatted_value}
                />
                <AddToCartButton isInCart={true} />
              </CardDetails>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
