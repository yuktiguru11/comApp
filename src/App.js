import Home from "./pages/home"
import Chats from "./pages/chats"

function App() {
  return (
    <div >
      <Route path='/' component={<Home/>}></Route>
      <Route path='/chats' component={<Chats/>}></Route>
    </div>
  );
}

export default App;
