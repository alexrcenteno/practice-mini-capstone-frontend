export function ProductsIndex() {
  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="products">
        <h2>ScrewDriver</h2>
        <img
          src="https://www.csunitec.com/sites/default/files/styles/340x340/public/ns-ex803_2.jpg?itok=ae1usXKY"
          alt=""
        />
        <p>Price: 9.00</p>
        <h3>Description: A tool used to drive screws into surfaces</h3>
        <button>More info</button>
      </div>
      <div className="products">
        <h2>Pen</h2>
        <img
          src="https://media.istockphoto.com/id/1059543698/photo/pen.jpg?b=1&s=170667a&w=0&k=20&c=zdwg04IxA_8ugZTzC_fInM2r0E6bVKvtCBRWv0O2_ps="
          alt=""
        />
        <p>Price: 3.00</p>
        <h3>Description: A tool to write or draw on surfaces</h3>
        <button>More info</button>
      </div>
    </div>
  );
}
