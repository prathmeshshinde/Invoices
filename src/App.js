import "./App.css";
import { Form } from "./components/Form";
import { FetchApi } from "./components/FetchApi";

function App() {
  return (
    <div className="App">
      <h1>Send Invoices</h1>
      <Form />
      <FetchApi />
    </div>
  );
}

export default App;
