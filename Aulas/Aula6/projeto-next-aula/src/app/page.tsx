import MeuComponente from "./components/TestComponent";
import Navbar from "./components/Navbar";
import InputFocus from "./components/ReferenceComp";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./components/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MeuComponente />
        <InputFocus />
        <Navbar />
        <ThemeButton />
      </main> 
    </ThemeProvider>
  );
}
