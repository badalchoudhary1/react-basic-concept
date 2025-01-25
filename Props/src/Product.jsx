// export default function Product({ name, price, features, features2 }) {
//     const list = features.map((feature) => <li>{feature}</li>);
//     return (
//       <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
//         <h3>{name}</h3>
//         <p>{price}</p>
//         <ul>{list}</ul>
//         <p>{features2}</p>
//       </div>
//     );
//   }
  

export default function Product({ name, price}) {
    const isDiscount=price > 20000?"discount of 5%":"";
    let color={backgroundColor:isDiscount?"green":""};
        return (
          <div style={{ border: "1px solid black", padding: "10px", margin: "10px", ...color }} > 
            <h3>{name}</h3>
            <p>{price}</p>
            {isDiscount}
          </div>
        );
      }
      