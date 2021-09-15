import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/index"

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
      <Aside />
    </div>
  );
}

export default App;
