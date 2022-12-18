import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";
import mock from "./data/mock";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        {mock.map((message) => (
          <Card message={message} />
        ))}
      </div>
    </div>
  );
}

export default App;
