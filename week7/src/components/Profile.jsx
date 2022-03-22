import React from "react";

export default function Profile() {
  return (
    <div>
      <div>
        <p>Name: </p>
      </div>
      <div>
        <img src="" width="70" alt="profile avatar" />
      </div>
      <div>
        <p>🏢 Company: </p>
      </div>
      <div>
        <p>📍 Location: </p>
      </div>
      <div>
        <p>🔗 Blog: </p>
      </div>
      <div>
        <p>🐦 Twitter: </p>
      </div>
      <div>
        <p>📄 Bio: </p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Public repos</th>
              <th>Public_gists</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
