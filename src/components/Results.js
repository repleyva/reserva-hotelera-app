import "../styles/results.css";

const Results = ({ title, src, description, price, stock }) => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div id="container">
        <div className="product-details">
          <div className="title-details">
            <h1>{title}</h1>
            <span className="hint-star star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </span>
          </div>

          <div className="controls">
            <p className="information">
              Rooms Available: <span>{stock}</span>
            </p>

            <div className="control">
              <button className="btn">
                <span className="price">${price}</span>
                <span className="shopping-cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span className="buy">Get now</span>
              </button>
            </div>
          </div>
        </div>

        <div className="product-image">
          <img src={src} alt="" />

          <div className="info">
            <h2>Description</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
