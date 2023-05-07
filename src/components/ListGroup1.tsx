import { useState } from "react";

// {items: [], heading: string}

interface Props {
  items: string[];
  heading: string;
}

//import { MouseEvent } from "react";
function ListGroup1({ items, heading }: Props) {
  //let items = ["Bangalore", "Mysore", "Mandya", "Chikmagalur"];
  //items = [];
  //let selectedIndex = 0;
  //called a Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const message = items.length === 0 ? <p>No Items Found</p> : null;
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No Items Found</p> : null;
  //   };

  // Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup1;
