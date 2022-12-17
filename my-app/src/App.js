import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";
import mock from "./data/mock";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        {console.log(mock)}
        {mock.map((e) => (
          <Card element={e} />
        ))}
      </div>
    </div>
  );
}

export default App;
