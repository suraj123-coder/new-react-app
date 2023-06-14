

function App(){
  let str =`hello world!!!!`;
  let pi = 3.141159;
  let active =true;
  let isUseredLogedIn=true;

  return(
    <>
    <h1>hello universe</h1>
      <h1>{str}</h1>;
      <h1>PI={pi}!</h1>
       
       {/**IF Logged In */}
      {isUseredLogedIn && <h1>Welcome to cdac!!</h1>}

        {/**Usage of boolean */}

        <h1>{active ?" Good morning" : "Good night"}</h1>
        
         {/** MOST USEFUL  */}
         {active && <h1>Good morning</h1>}
         {active ? <h1>Good morning</h1>:<h1>Good night</h1>}
    </>
  );


}

export default App;