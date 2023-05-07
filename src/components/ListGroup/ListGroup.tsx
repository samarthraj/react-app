//import { Fragment } from "react";
import { MouseEvent, useState } from "react";
import styles from "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 10px;
`;

const ListItem = styled.li`
  padding: 0px;
`;

//Props are inputs to our component
interface Props {
  items: string[];
  heading: string;
  //onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [name, setName] = useState('');

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              //onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
