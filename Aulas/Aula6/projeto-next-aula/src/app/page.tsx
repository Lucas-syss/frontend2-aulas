import MeuComponente from "./components/TestComponent";
import Navbar from "./components/Navbar";
import InputFocus from "./components/ReferenceComp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MeuComponente />
      <InputFocus />
      <Navbar />
    </main> 
  );
}
