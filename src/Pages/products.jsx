import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
const ProductsPage = () => {
  const products = [
    {
      id: 1,
      image: "/images/si-surga.png",
      title: "Si Surga",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: "Rp. 25.000",
    },
  ];
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
        {email}
        <Button varian="ml-5 bg-black" type="button" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              {/* cara menggunakannya dengan dot */}
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};
export default ProductsPage;
