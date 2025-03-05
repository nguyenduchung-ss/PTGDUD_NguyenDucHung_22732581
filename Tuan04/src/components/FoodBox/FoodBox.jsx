import React from "react";
import { Bookmark } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FoodBox.css";

export default function FoodBox({ image, title, time }) {
  return (
    <div
      className="foodBox shadow-sm border-0 rounded-4"
      style={{ width: "100%" }}
    >
      <img src={image} className="card-img-top rounded-top-4 object-fit-cover " alt={title} />
      <div className="card-body">
        <div className="m-2 d-flex align-items-center justify-content-between">
          <h5 className="card-title fw-bold">{title}</h5>
          <button className="btn btn_favorites">
            <Bookmark className="text_favorites " size={20} />
          </button>
        </div>
        <div className="d-flex">
          <span style={{ width: "40%" }} className="m-2 badge text-minutes">{time}</span>
        </div>
      </div>
    </div>
  );
}
