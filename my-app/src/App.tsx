import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import Card from "./components/UI/Card/Card.component";
import CardDescription from "./components/UI/Card/CardDescription/CardDescription.component";
import CardDetails from "./components/UI/Card/CardDetails/CardDetails.component";
import CardMedia from "./components/UI/Card/CardMedia/CardMedia.component";
import CardPrice from "./components/UI/Card/CardPrice/CardPrice.component";
import CardTitle from "./components/UI/Card/CardTitle/CardTitle.component";
import { getProducts } from "./services/productsController";

const App: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res: any) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <ul className="product-list">
          {products!.map((el: any) => (
            <Card key={el.uuid}>
              <CardMedia image={el.cover_image_url} />
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
              </CardDetails>
              <button>Add To Cart</button>
            </Card>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;
