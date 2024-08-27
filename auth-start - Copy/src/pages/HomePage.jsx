import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">HomePage</h1>

          <button
            className="bg-amber-500 px-6 py-2 rounded-xl text-black font-medium hover:opacity-75"
            onClick={() => navigate("/blog")}
          >
            {" "}
            Go To Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
