import { useState, useEffect } from "react";

function Cronometro() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => {
      setIsRunning(!isRunning);
    };
  return (
    <div>
      {/* Counter */}
      <div className="mb-8 text-center">
        <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Timer</span>
        <h1 className="text-5xl font-black text-gray-800 tabular-nums leading-none">
          {counter}
        </h1>
      </div>

      <div className="flex w-full gap-4">
        {/* BOTAO COMECAR E PARAR */}
        <button
                  onClick={handleToggle}
                  className={`
                    w-full py-4 px-6 rounded-xl font-bold text-white text-lg
                    shadow-lg transform transition-all duration-300 ease-in-out
                    hover:scale-[1.02] active:scale-95
                    ${isRunning 
                      ? "bg-linear-to-r from-rose-500 to-pink-600 shadow-rose-500/30 hover:shadow-rose-500/50" 
                      : "bg-linear-to-r from-indigo-600 to-violet-600 shadow-indigo-500/30 hover:shadow-indigo-500/50"
                    }
                  `}
                >
                  {isRunning ? "Pausar" : "Começar"}
                </button>
              </div>
            </div>
          );
        }

export default Cronometro;
