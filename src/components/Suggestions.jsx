import "./Suggestions.scss";

function Suggestions() {
  return (
    <div>
      <form action="/submit-suggestion" method="POST">
        <h3>
          If you have any suggestions, advice, or if you find <br />
          any bugs with my current projects let me know here!
        </h3>

        <div>
          {" "}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required></input>{" "}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
        </div>

        <div>
          {" "}
          <label htmlFor="suggestion">Your Suggestion:</label>
          <textarea
            id="suggestion"
            name="suggestion"
            maxLength="255"
            rows="5"
            required></textarea>{" "}
        </div>

        <button className="sug-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Suggestions;
