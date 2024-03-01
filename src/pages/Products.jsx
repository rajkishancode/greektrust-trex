import { ProductCard, Search, Filters } from "../components";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks";
import { filterProducts } from "../utils/helper";


function Products() {
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);
  const filteredData = filterProducts(products, filters);


  console.log({ filteredData });
  useDocumentTitle("TeeRex | Products");

  return (
    <div className="flex gap-4 min-w-[100vw]">
      <Filters />

      <section className="flex-grow">
        <Search />
        <div className="flex flex-wrap justify-evenly">
          {filteredData?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;
