import { useEffect, useMemo, useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import PostCard from "../components/posts/PostCard";

const BlogPage = () => {
  const navigate = useNavigate();
  // const navigation = useNavigation();
  const [searchParams, setSearchParams] = useSearchParams();

  // const loaderData = useLoaderData();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:5000/posts");

        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          // throw new Error("Something went wrong");
          setError("Something went wrong");
        }
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const filterdPosts = useMemo(() => {
    const search = searchParams.get("search") || "";

    if (!search) return posts;

    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [searchParams, posts]);

  return (
    <section>
      {/* <div>{navigation?.state}</div>
      <div>{JSON.stringify(loaderData)}</div> */}
      <div className="container py-6">
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => navigate(-1)}> Go back </button>
          <h1 className="text-xl font-bold"> Blog </h1>
        </div>

        <div className="p-4">
          {/* {searchParams?.get("search")} */}
          <input
            placeholder="search"
            className="p-2 px-3 rounded-md"
            value={searchParams.get("search") || ""}
            onChange={(e) => {
              const value = e.target.value;

              if (value) {
                setSearchParams({ search: value });
              } else {
                setSearchParams({});
              }
            }}
          />
        </div>

        {isLoading && <div> Loading... </div>}
        {error && <div> {error} </div>}
        {!isLoading && !error && (
          <>
            {!filterdPosts.length ? (
              <div> No data </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {" "}
                {filterdPosts.map((post) => (
                  // <div key={post.id}>{post.title}</div>
                  <PostCard post={post} key={post.id} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// export const blogLoader = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/posts");

//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       // throw new Error("Something went wrong");
//       // setError("Something went wrong");
//     }
//   } catch (error) {
//     // setError(error);
//   }
// };

export default BlogPage;
