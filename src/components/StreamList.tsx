import React, { useState } from "react";

function StreamList() {
  const [movies, setMovies] = useState<string[]>([]);

  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      setMovies([...movies, input]);

      setInput("");
    }
  };

  const clearAllMovies = () => setMovies([]);

  return (
    <div>
      <h1>StreamList</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a movie title"
        />

        <button type="submit">Add Movie</button>
      </form>

      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}

      <button onClick={clearAllMovies}>Clear All</button>
    </div>
  );
}

export default StreamList;
