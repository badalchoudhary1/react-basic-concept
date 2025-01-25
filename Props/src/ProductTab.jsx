// import Product from "./Product";

// export default function ProductTab() {
//   const options = ["Good Camera", "Good Battery", "Good Processor"];
//   const feature1 = { a: "Good Camera", b: "Good Battery", c: "Good Processor" };

//   return (
//     <div>
//       <Product name="Iphone" price={40000} features={options} />
//       <Product name="Samsung" price={30000} features2={[feature1.a]} />
//       <Product name="Mi" price={10000} />
//       <Product name="Realme" price={15000} />
//     </div>
//   );
// }

import Product from "./Product";

export default function ProductTab() {
  const options = ["Good Camera", "Good Battery", "Good Processor"];

  return (
    <div>
      <Product name="Iphone" price={40000} />
      <Product name="Samsung" price={30000} />
      <Product name="Mi" price={10000} />
      <Product name="Realme" price={15000} />
    </div>
  );
}