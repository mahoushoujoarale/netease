import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./router/index"
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
      <Footer />
      <Aside />
    </HashRouter>
  );
}

export default App;
