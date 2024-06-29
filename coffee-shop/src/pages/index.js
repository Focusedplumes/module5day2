import { useEffect, useState } from "react";

export default function Home() {

const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
    .then((res) => res.json())
    .then((data => setMenu(data.menu)));
  }, []) //the empty bracket is when we want something to happen one time on page load. once this component is added to the page, run this one time. it empties the array.

  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
      <h4>Here is our menu</h4>
      {menu.map(item => {
        return
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      })} 
    </>// this is our loop in react to go throuhg our items
  );
}