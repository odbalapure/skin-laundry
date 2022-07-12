import { useState } from "react";
import { banner } from "../../styles/Search.module.css";

function Search() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className={`card mt-4 ${banner}`}>
      <div className="card-body p-4">
        <div>
          <div className="card-text fs-2 fw-bold">Welcome to Skin Laundry</div>
          <div className="card-text">Search a Skin Laundry clinic using a keyword</div>
        </div>
        <div className="input-group mb-3 mt-3">
          <input type="search"
            onKeyDown={(e) => setSearch(e.target.value)}
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="text-muted"><span className="fw-bold">NOTE</span>: Yet to implement search <span style={{ fontSize: "1.5rem" }}>😅</span></div>
      </div>
    </div>
  );
}

export default Search;