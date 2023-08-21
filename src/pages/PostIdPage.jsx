import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetch(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommLoading, commError] = useFetch(async (id) => {
    const response = await PostService.getComments(id);
    setComments(response.data);
    console.log(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>You are now checking post №{params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isCommLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => {
            return (
              <div key={comment.id} style={{ marginTop: "15px" }}>
                <h5>{comment.email}</h5>
                <div>{comment.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
