
// Using Object Literal
function App() {
  let str = `Hello Universe!!!`;
  let pi = 3.141159;
  let user = { id: 1, name: "rohit" };

  // JSX :: User Interface
  return (
    <>
      <h1>Hello World</h1>
      <h1>{str}</h1>
      <h1>PI {pi} !!</h1>
      <h1>
        ID: {user.id} Name: {user.name}
      </h1>
    </>
  );
}

export default App;