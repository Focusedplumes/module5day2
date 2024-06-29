import { useEffect, useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => { 
    async function loadData(){ 
     const res = await fetch("/api/menu"); //fetch is asynchronus and a promise
     const data = await res.json(); 
     setMenu(data.menu);
  }
  loadData();
 }, []); //the empty bracket is when we want something to happen one time on page load. once this component is added to the page, run this one time. it empties the array.

 function addToCart(id) {
  fetch(`/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },//saying we are sending data in json formatt
    body: JSON.stringify({ id: id, quantity: 1 }),
  });
}

if (menu.length === 0) {
  return <h1>Loading...</h1>;
}
 
return (
  <>
    <h1>Welcome to Coffee Shop</h1>
    <h4>Here is our menu:</h4>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
      }}
    >
      {menu.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              width: "300px",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item.id)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  </>
);
}