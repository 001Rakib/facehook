const PostBody = ({ post }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      <p>{post?.content}</p>

      {post?.image && (
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="max-w-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`}
            alt="poster"
          />
        </div>
      )}
    </div>
  );
};

export default PostBody;
