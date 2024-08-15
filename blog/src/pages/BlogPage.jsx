import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container py-6">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)}> Go back </button>
          <h1 className="text-xl font-bold"> Blog </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
