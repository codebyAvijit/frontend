import React from "react";
import "./landing.css";
export default function LandingPage() {
  return (
    <div className="home">
      {/* card */}
      <div className="card">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.pexels.com/photos/3078404/pexels-photo-3078404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h5>Victor</h5>
        </div>
        <div className="card-image">
          <img
            src="https://images.pexels.com/photos/12388716/pexels-photo-12388716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="card-content">
          <span class="material-symbols-outlined">favorite</span>
          <p>201 Like</p>
          <p>Adorable</p>
        </div>
        <div className="add-comment">
          <span class="material-symbols-outlined">sentiment_satisfied</span>
          <input type="text" placeholder="Add a comment"></input>
          <button className="comment">Post</button>
        </div>
      </div>
    </div>
  );
}
