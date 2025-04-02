import './App.scss';
import Home from './components/home/home';
import Header from './header/header';
import About from './components/about/about';
import Work from './components/work/work';
import { GlobalProvider, useGlobalContext } from './AppContext';
import SlideAnimation from './commonComponents/SlideAnimation';
import { ApiData } from './services/Api';
import { ContactOffCanvas } from './commonComponents/Offcanvas';


const PageContent = () => {
  const { activeComponent } = useGlobalContext();
  console.log("active", activeComponent)

  return (
    <div>
      <Header />
      {activeComponent === "Home" && <><SlideAnimation /><Home /></>}
      {activeComponent === "Work" && <><SlideAnimation /><Work /></>}
      {activeComponent === "About" && <><SlideAnimation /><About /></>}
      <ContactOffCanvas/>
    </div>
  );
};

function App() {
  return (
    <ApiData>
      <GlobalProvider>
        <PageContent />
      </GlobalProvider>
    </ApiData>
  );
}

export default App;
