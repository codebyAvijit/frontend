import React from "react";
import "./post.css";
function Post() {
  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="createPost">
      <div className="upload-pic">
        <img id="output" />
        <input
          type="file"
          placeholder="Choose a pic to upload"
          accept="image/*"
          onChange={(event) => {
            loadfile(event);
          }}
          id="browse"
        />
      </div>
      <div className="secondary">
        <input type="text" placeholder="author" className="second" />
        <input type="text" placeholder="location" className="second" />
      </div>
      <div className="caption">
        <input type="text" placeholder="Description" id="caption" />
      </div>
      <button type="submit" className="share-btn" value="Share">
        Share
      </button>
    </div>
  );
}
export default Post;
