import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const PostCard = ({ post }) => {
  return (
    <article class="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostAction commentCount={post?.comments?.length} post={post} />
      <PostComments post={post} />
    </article>
  );
};

export default PostCard;
