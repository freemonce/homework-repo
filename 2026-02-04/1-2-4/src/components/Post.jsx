import React from "react";

function Post({ author, content }) {
  const postStyle = {
    border: "1px solid white",
    padding: "20px",
    margin: "10px",
    width: "150px",
    borderRadius: "8px",
  };

  return (
    <>
      <div style={postStyle}>
        <div> 작성자 : {author}</div>
        <p> 내용 : {content}</p>
      </div>
    </>
  );
}

export default Post;
