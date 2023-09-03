import usePost from "./hooks/usePostList";

const PostList = () => {
  const { data, error, isLoading } = usePost();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className='list-group'>
      {data?.map((post) => (
        <li
          key={post.id}
          className='list-group-item'
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
