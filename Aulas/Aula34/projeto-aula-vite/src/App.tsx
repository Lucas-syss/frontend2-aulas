import "./App.css";
import Card from "./components/CardComponent";
import Button from "./components/ButtonComponent";
import Cronometro from "./components/CounterComponent";
import NavBar from "./components/Navbar";
import Companion from "./components/Companion";
function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 flex items-center justify-center p-6 font-sans text-slate-800">
      <NavBar>
      </NavBar>
       <Companion />
      <Card>
        {/* Image Placeholder */}
        <div className="mb-6 rounded-xl overflow-hidden h-40 bg-slate-100 w-full">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop"
            alt="Abstract design"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="inline-block px-3 mr-1 py-1 mb-3 text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
          Exercicio
        </span>
        {/* Tagzona */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
          Aula 3
        </span>

        {/* Titulo */}
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Card</h1>

        {/* Descrição */}
        <p className="text-slate-500 leading-relaxed mb-4">
          Clica aqui em baixo para aprenderes a ser um bom desenvolvedor web.
        </p>

        <Button />
      </Card>
      
      <Card>
        {/* Image Placeholder */}
        <div className="mb-6 rounded-xl overflow-hidden h-40 bg-slate-100 w-full">
          <img
            src="https://www.seikoclocks.in/cdn/shop/files/Seiko-clocks-homepage_Mobile_New_1_x800.jpg?v=1692595903"
            alt="Abstract design"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Tagzona */}
        <span className="inline-block px-3 mr-1 py-1 mb-3 text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
          Exercicio
        </span>
        {/* Tagzona */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
          Aula 4
        </span>

        <Cronometro></Cronometro>
      </Card>
      </div>
      
  );
}

export default App;
