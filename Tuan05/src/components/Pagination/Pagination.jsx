import React from "react";
import "./Pagination.css";

export default function Pagination() {
  return (
    <div className="d-flex align-items-end flex-column">
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              &lt;
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              10
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              11
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              &gt;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
