import React, { useState } from "react";

import "../style/repositories.css";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);

  return (
    <div>
      
      <ul className="repositories-list">
        {repositories.map((repository) => (
          <li
            className="repository-row-li"
            key={repository.id}
            onClick={() => {}}
          >
            <div className="repository-row">
              <div>{repository.name}</div>
              <div>
                <span className={`repo-language-color`}></span>
                <span>{repository.language}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
