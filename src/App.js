import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Timing from './Timing';

const App=()=>{
  let name='Louis is so handsome';
  let first_boolean=false;
  const ele_1=<h1>Hello, JSX {name}</h1>
  const ele_2=<h1>Heelo, JSX {
    }</h1>

  return (
    <div className="App">
      <h1>Hello, JSM, my name is {first_boolean ? name : "someone"}</h1>
      <div>
        {ele_1}
      </div>
      <div>
        <p1>Test</p1>
        { first_boolean ? 
        (
          <>
          {4+4}
          <h1>Finish testing: boolean is {name}</h1>
          </>
        ) : 
        (
          <>
            {5+5}
            <h1>Testing not finished: boolean is {name}</h1>
          </>

        )}
      </div>

      <Person name="nam anh" age={45}></Person>


      <h1>For timing experience</h1>
      <Timing></Timing>
    </div>
  );
}

export default App;
