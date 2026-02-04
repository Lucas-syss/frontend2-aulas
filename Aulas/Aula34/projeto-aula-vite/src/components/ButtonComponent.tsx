function Button() {
  
  function clicaAqui() {
    alert('Pensaste');
  }
  
  return (
    <button onClick={clicaAqui} className="
      w-full 
      mt-6 
      bg-linear-to-r from-indigo-600 to-violet-600 
      text-white 
      font-semibold 
      py-3 px-4 
      rounded-xl 
      shadow-lg shadow-indigo-500/30 
      hover:shadow-indigo-500/50 
      hover:scale-[1.02] 
      active:scale-95 
      transition-all duration-200
      cursor-pointer
    ">
      Clica aqui
    </button>
  );
}

export default Button;