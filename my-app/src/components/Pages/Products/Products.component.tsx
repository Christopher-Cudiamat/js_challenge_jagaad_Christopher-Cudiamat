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
import Pagination from "../../Pagination/Pagination.component";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getProducts(offset).then((res: any) => {
      setProducts(res);
    });
  }, [offset]);

  const totalProductsLegth = 71;
  const itemPerPage = 6;
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
                <CardPrice
                  discount={el.discount}
                  retailPrice={el.retail_price.formatted_value}
                  netPrice={el.original_retail_price.formatted_value}
                />
                <AddToCartButton isInCart={false} data={el} />
              </CardDetails>
            </Card>
          ))}
        </ul>
        <Pagination
          setOffset={setOffset}
          pageCount={totalProductsLegth}
          ItemPerPage={itemPerPage}
        />
      </div>
    </div>
  );
};

export default Products;
