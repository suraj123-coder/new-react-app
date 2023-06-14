// Using Object Literal
function App() {
  let id = "id1";
  let str = `Hello Universe!!!`;
  let pi = 3.141159;

  // JSX :: User Interface
  return (
    <>
      <h1 id="id1">Hello World</h1>
      <h1 id={id}>{str}</h1>

      {/** USE CASES*/}
      <h1 id="id1">Hello World</h1>
      <h1 id={"id1"}>Hello World</h1>
      <h1 id={`id1`}>Hello World</h1>
      <h1 id={id}>Hello World</h1>

      <h1>PI {pi} !!</h1>
    </>
  );
}

export default App;