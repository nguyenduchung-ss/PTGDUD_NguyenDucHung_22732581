import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronUp } from "react-feather";
import "./Filter.css";

export default function Filter() {
  return (
    <aside className="filters">
      <div style={{ padding: "10px" }} className="d-flex">
        {" "}
        <img className="img-menu" src="/images/List 2.png" alt="" />{" "}
        <h3>Filters</h3>
      </div>
      <div style={{ padding: "10px" }} className="filter-section">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Type</h4>
          <button className="border-0 bg-transparent">
            <ChevronUp size={30} color="hotpink" />
          </button>
        </div>

        <div className="type-grid">
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Pan-fried
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Stir-fried
          </label>
          <label>
            <img src="/images/Checkbox 15.png" alt="" /> Grilled
          </label>
          <label>
            <img src="/images/Checkbox 15.png" alt="" /> Roasted
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Sauteed
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Baked
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Steamed
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" /> Stewed
          </label>
        </div>
      </div>

      <div style={{ padding: "10px" }} className="filter-section">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Time</h4>
          <button className="border-0 bg-transparent">
            <ChevronUp size={30} color="hotpink" />
          </button>
        </div>
        <div>
          <span style={{ fontSize: "9px", marginLeft: "70px" }}>
            30 minutes{" "}
          </span>{" "}
          <span style={{ fontSize: "10px", marginLeft: "45px" }}>
            50 minutes{" "}
          </span>
          <img src="/images/Slider 2.png" alt="" className="minutes" />
        </div>
      </div>

      <div style={{ padding: "10px" }} className="filter-section">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-0">Rating</h4>
          <button className="border-0 bg-transparent">
            <ChevronUp size={30} color="hotpink" />
          </button>
        </div>
        <div className="stars">
          <label>
            <img src="/images/Checkbox 13.png" alt="" />
            <span>
              <img src="/images/Rating 18.png" alt="" />
            </span>
          </label>
          <label>
            <img src="/images/Checkbox 13.png" alt="" />
            <span>
              <img src="/images/Rating 17.png" alt="" />
            </span>
          </label>
          <label>
            <img src="/images/Checkbox 15.png" alt="" />
            <span>
              <img src="/images/Rating 19.png" alt="" />
            </span>
          </label>
          <label>
            <img src="/images/Checkbox 15.png" alt="" />
            <span>
              <img src="/images/Rating 20.png" alt="" />
            </span>
          </label>
          <label>
            <img src="/images/Checkbox 15.png" alt="" />
            <span>
              <img src="/images/Rating 16.png" alt="" />
            </span>
          </label>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className=" apply-filters">Apply</button>
      </div>
    </aside>
  );
}
