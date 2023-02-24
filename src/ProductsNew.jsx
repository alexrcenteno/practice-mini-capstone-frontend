export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New product</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Price: <input type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
