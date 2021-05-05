import DataTatble from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo</h1>
        <DataTatble />
      </div>
      <Footer />
    </>
  );
}

export default App;
