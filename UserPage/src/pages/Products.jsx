import { useEffect, useState } from "react";
import PriceRange from "../components/PriceRange";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import { Grid } from "@material-ui/core";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://localhost:7020/api/Product?Page=1&PageSize=6&SearchTerm=${search}
        `
      );
      setProducts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mt-80">
      <div className="banner_top innerpage" id="home">
        {/* /banner_inner */}
        <div className="services-breadcrumb_w3ls_agileinfo">
          <div className="inner_breadcrumb_agileits_w3">
            <ul className="short">
              <li>
                <a>Home</a>
                <i>|</i>
              </li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        {/* //banner_inner */}
      </div>
      {/* //banner */}
      {/* top Products */}
      <div className="ads-grid_shop ">
        <div className="shop_inner_inf">
          <div className="side-bar col-md-3">
            <div className="search-hotel">
              <h3 className="agileits-sear-head">Search Here..</h3>
              <input
                type="search"
                placeholder="Product name..."
                name="search"
                className="input-search"
                required=""
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                style={{
                  backgroundColor: "#87CEFA",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "10px",
                  fontSize: "18px",
                }}
                onClick={getProducts}
              >
                Search
              </button>
            </div>
          </div>
          <div className="left-ads-display col-md-9">
            <div className="wrapper_top_shop">
              <div className="col-md-6 shop_left">
                <img src="./src/images/banner3.jpg" alt="" />
                <h6>40% off</h6>
              </div>
              <div className="col-md-6 shop_right">
                <img src="./src/images/banner2.jpg" alt="" />
                <h6>50% off</h6>
              </div>
              <div className="clearfix" />
              {/* product-sec1 */}

              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid xs={12} md={6} lg={4} key={product.id}>
                    <ProductItem product={product} />
                  </Grid>
                ))}
              </Grid>
              {/* //product-sec1 */}
              <div className="col-md-12 shop_left shp">
                <h6>21% off</h6>
              </div>

              <div className="col-md-6 shop_left shp">
                <img src="./src/images/banner4.jpg" alt="" />
                <h6>21% off</h6>
              </div>
              <div className="col-md-6 shop_right shp">
                <img src="./src/images/banner1.jpg" alt="" />
                <h6>31% off</h6>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //top products */}
      <div className="mid_slider_w3lsagile">
        <div className="col-md-3 mid_slider_text">
          <h5>Some More Shoes</h5>
        </div>
        <div className="col-md-9 mid_slider_info">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to={0} className="" />
              <li
                data-target="#myCarousel"
                data-slide-to={1}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={2} className="" />
              <li data-target="#myCarousel" data-slide-to={3} className="" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item active">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g5.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g6.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g1.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g2.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g3.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                    <div className="thumbnail">
                      <img
                        src="./src/images/g4.jpg"
                        alt="Image"
                        style={{ maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* The Modal */}
          </div>
        </div>
        <div className="clearfix"> </div>
      </div>
      <a
        href="#home"
        id="toTop"
        className="scroll"
        style={{ display: "block" }}
      >
        {" "}
        <span id="toTopHover" style={{ opacity: 1 }}>
          {" "}
        </span>
      </a>
    </div>
  );
};

export default Products;
