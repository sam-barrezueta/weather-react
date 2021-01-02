import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-9 search-bar">
            <input
              type="search"
              placeholder="Search city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-1 search-button">
            <button
              type="submit"
              className="btn btn-outline-secondary"
              autoComplete="off"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="col-1 search-button">
            <button
              type="button"
              className="btn btn-outline-secondary current-city-btn"
            >
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
