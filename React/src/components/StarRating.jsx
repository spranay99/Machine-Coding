import React, { useState } from "react";

const StarRating = () => {
  const [selected, setSelected] = useState();
  const [hover, setHover] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star_container">
      <h1>Star Rating</h1>
      <div>
        {stars.map((num) => (
          <span
            key={num}
            onClick={() => setSelected(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(selected)}
            className={`star ${
              num <= ((selected && hover) || hover) ? "filled" : "not-filled"
            }`}
          >
            &#9733;
          </span>
        ))}
      </div>
      <h2 id="rated">You rated: {selected}</h2>
    </div>
  );
};

export default StarRating;
