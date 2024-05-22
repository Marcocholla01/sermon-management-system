import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  // console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b> Status: </b>Dratf
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
            accept=".jpg, .png, .jpeg"
          />
          <label htmlFor="file" className="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>

          <div className="cat">
            <input type="radio" name="category" id="category" value="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              id="category"
              value="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" id="category" value="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="category" value="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="category" value="food" />
            <label htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="category" value="science" />
            <label htmlFor="science">Science</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
