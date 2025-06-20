import useProfile from "./useProfile";

export const useAvatar = (post) => {
  const { state } = useProfile;

  const isMe = post?.author?.id === state?.user?.id;

  const avatar = isMe
    ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`
    : `${import.meta.env.VITE_SERVER_BASE_URL}/${post?.author?.avatar}`;

  return avatar;
};
