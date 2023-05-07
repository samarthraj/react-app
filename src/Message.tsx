// // PascalCasing
// function Message() {
//   // JSX: JavaScript XML
//   const name = "Samarth";
//   if (name) return <h1>Hello {name}</h1>;
//   return <h1>Hello World</h1>;
// }

// export default Message;

let count = 0;

const Message = () => {
  //let count = 0;
  count++;
  return <div>Message {count}</div>;
};

export default Message;
