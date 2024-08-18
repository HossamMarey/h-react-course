import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen py-24 ">
      <section className="container flex flex-col gap-6 items-center justify-center  text-lg">
        <div className="text-3xl bg-slate-950 px-6 py-2 rounded-xl">
          {count}
        </div>

        <div className="flex items-center gap-3">
          <button> +1 </button>
          <button> +3 </button>
          <button> -1 </button>
          <button> -4 </button>
        </div>

        <div>
          <button className="bg-yellow-950"> hide counter </button>
        </div>
      </section>
    </main>
  );
}

export default App;
