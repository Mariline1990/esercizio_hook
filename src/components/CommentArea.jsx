import { Component, useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetchBook();
  }, [asin]);

  const fetchBook = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNDRlYWZlMDMxZTAwMTliYTE4YjQiLCJpYXQiOjE3MDQ4MDgwMjksImV4cCI6MTcwNjAxNzYyOX0.7HnXve52u4DqrIfXlkl7aGwnK5R84TMqn-45efsTZDA",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();

        setComment(comments);
        setIsLoading(false);
        setError(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};
export default CommentArea;
