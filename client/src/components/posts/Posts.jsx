import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <>
    <div><h className="poststitle">Posts</h></div>
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
    </>
  );
}