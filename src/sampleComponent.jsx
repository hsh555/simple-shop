import { useEffect, useState } from "react";

const SampleComponent = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/hsh555/reactFurom-db/comments"
      );
      const resJson = await res.json();
      setComments(resJson);
    };

    getComments();
  }, []);

  const handleOnClick = () => {
    const data = {
      body: "این کامنت الان پست شد",
      topicId: 3,
      userId: 1,
    };
    const addNewComment = async (url, data) => {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json();
    };

    addNewComment(
      "https://my-json-server.typicode.com/hsh555/reactFurom-db/comments",
      data
    )
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  };

  return (
    <div className="comments">
      {comments.map((comment) => {
        return (
          <div className="comment-item">
            <h2 className="title">{comment.body}</h2>
          </div>
        );
      })}
      <button onClick={handleOnClick}>add new</button>
    </div>
  );
};

export default SampleComponent;
