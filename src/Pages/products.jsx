import CardProduct from "../components/Fragments/CardProduct";
const ProductsPage = () => {
  const Products = [
    {
      id: 1,
      image: "/images/si-surga.png",
      title: "Si Surga",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: "Rp. 25.000",
    },
    {
      id: 2,
      image: "/images/si-pena.png",
      title: "Si Pena",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. Non assumenda,
          impedit commodi vitae iusto velit dolor, dolore debitis neque magnam
          quod distinctio.`,
      price: "Rp. 25.000",
    },
    {
      id: 3,
      image: "/images/si-ikhram.png",
      title: "Si Ikhram",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
          blanditiis in minus! Impedit, aut necessitatibus. `,
      price: "Rp. 25.000",
    },
  ];
  return (
    <div className="flex justify-center py-5">
      {Products.map((product) => {
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
  );
};
export default ProductsPage;
