import LikeIcon from "../.././assets/icons/like.svg";
import LikeFilledIcon from "../.././assets/icons/like-filled.svg";
import CommentIcon from "../.././assets/icons/comment.svg";
import ShareIcon from "../.././assets/icons/share.svg";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";

const PostAction = ({ commentCount, post }) => {
  const { auth } = useAuth();
  const [like, setLike] = useState(post?.likes?.includes(auth?.user?.id));

  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
      );

      if (response.status === 200) {
        setLike(!like);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img
          className="w-6"
          src={like ? LikeFilledIcon : LikeIcon}
          alt="Like"
        />
        {!like && <span>Like</span>}
      </button>
      {/* Comment Button */}
      <button className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm flex items-center">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount})</span>
      </button>
      {/* Share Button */}
      {/* Like Button */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostAction;
