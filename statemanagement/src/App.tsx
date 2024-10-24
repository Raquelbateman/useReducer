import Counter from "./components/Counter";
import Login from "./components/Login";
import Todo from "./components/Todo";


const App = () => {
  return (
    <>
      <h1>Welcome to the App</h1>
      {/* Uncomment the components if you want them to render */}
      {/* <Counter /> */}
    {/* <Todo/> */}
      <Login />
    </>
  );
};

export default App;
