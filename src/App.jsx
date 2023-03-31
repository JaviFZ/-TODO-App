import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from './components/icons/MoonIcon';


const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
                    bg-no-repeat bg-contain bg-gray-200 min-h-screen ">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
          <button>
            <MoonIcon className="fill-red-700"/>
          </button>
        </div>
        <form className="flex items-center overflow-hidden 
                        rounded-md bg-white py-4 gap-4 px-4 mt-8">
          {/* con inline-block transformamos un elemento de linea como es el span en uno de bloque
            para poder aplicarle alto y ancho */}
          <span className="rounded-full border-2 inline-block w-5 h-5 "></span>
          <input
            type='text'
            placeholder="Nueva Tarea"
            className="w-full text-gray-400 outline-none"
          ></input>
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
      {/* [&>article]:px-4   Asi decimos que todos los article que tenga dentro este div 
                              tienen px-4*/}
        <div className="bg-white rounded-md [&>article]:px-4"> 
          <article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">Completar curso javascript</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">Completar curso javascript</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article><article className="flex gap-4 py-4 px-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">Completar curso javascript</p>
            <button className="flex-none">
              <CrossIcon/>
            </button>
          </article>

          <section className="px-4 py-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex justify-center rounded-md bg-white p-4 gap-4">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Complete</button>
        </div>                     
      </section>

      <p className="text-center mt-8">drag & drop</p>
    </div>
  );
};

export default App;