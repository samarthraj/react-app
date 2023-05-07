//import Message1 from "./Message_1";
import ListGroup1 from "./components/ListGroup1";
function App1() {
  let items = ["Bangalore", "Mysore", "Mandya", "Chikmagalur"];

  return (
    <div>
      <ListGroup1 items={items} heading={"My Cities"} />
    </div>
  );
}

export default App1;
