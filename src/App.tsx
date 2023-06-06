import About from './components/About';
import CalculatorExample from './components/CalculatorExample';
import CodeBasicsSection from './components/CodeBasicsSection';
import IntroBanner from './components/IntroBanner';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <IntroBanner />
      <About />
      <CodeBasicsSection />
      <CalculatorExample />
    </>
  );
}

export default App;
