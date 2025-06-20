import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import PostList from "../components/posts/PostList";
import { actions } from "../actions";
import usePosts from "../hooks/usePosts";
import NewPost from "../components/posts/NewPost";

const HomePage = () => {
  const { state, dispatch } = usePosts();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    const fetchPosts = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    };
    fetchPosts();
  }, [api, dispatch]);

  if (state.loading)
    return <div className="text-center text-gray-500">Loading...</div>;

  if (state.error)
    return (
      <div className="text-center text-red-500">Error: {state?.error}</div>
    );

  return (
    <div className="container">
      <NewPost />
      <PostList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
