import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  const postSlug = params.slug;

  console.log("PostPage");

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:5000/posts?slug=" + postSlug
      );

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Data Not Found");
        }
      } else {
        // throw new Error("Something went wrong");
        setError("Something went wrong");
      }
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }, [postSlug]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const len = useMemo(() => {
    return post?.content?.length || 0;
  }, [post?.content]);

  return (
    <section className="py-12">
      <div className="container">
        {isLoading && <div> Loading... </div>}
        {error && <div> {error} </div>}
        {!isLoading && !error && post && (
          <div>
            <h1 className="text-2xl mb-4"> {post.title} </h1>
            {post.content && (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}

            <code> {len}</code>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostPage;
