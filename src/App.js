import './App.scss';
import Home from './components/home/home';
import Header from './header/header';
import About from './components/about/about';
import Work from './components/work/work';
import { GlobalProvider, useGlobalContext } from './AppContext';


const PageContent = () => {
  const { activeComponent } = useGlobalContext();
  console.log("active", activeComponent)

  return (
    <div>
      <Header />
      {activeComponent === "Home" && <Home />}
      {activeComponent === "Work" && <Work />}
      {activeComponent === "About" && <About />}
    </div>
  );
};

function App() {
  return (
    <GlobalProvider>
      <PageContent />
    </GlobalProvider>
  );
}

export default App;
