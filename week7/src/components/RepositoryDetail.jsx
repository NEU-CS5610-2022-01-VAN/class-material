import React from "react";
import "../style/repositoryDetail.css";

export default function RepositoryDetail() {
  return (
    <div className="repositoryDetail">
      <h2>[Repo Name]</h2>
      <div>
        <a href="http://google.com" target="_blank" rel="noreferrer">
          🏠 Repository Url
        </a>
      </div>
      <div>
        <p>💻 Language: </p>
      </div>
      <div>
        <p>🍴 Forks count: </p>
      </div>
      <div>
        <p>🐛 Open issues count: </p>
      </div>
      <div>
        <p>✨ Subscribers count: </p>
      </div>
      <div>
        <p>🔥 Default branch: </p>
      </div>
    </div>
  );
}
