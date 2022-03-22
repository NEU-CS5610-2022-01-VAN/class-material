import "../style/home.css";

function App() {
  return (
    <div className="home">
      <form onSubmit={() => {}} className="home-form">
        <div>
          <label htmlFor="username">Enter your Github username:</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <input type="submit" value="Enter App" />
        </div>
      </form>
    </div>
  );
}

export default App;
