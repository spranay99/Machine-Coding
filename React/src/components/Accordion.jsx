import React, { useState } from "react";

const SingleAccordion = ({ title, content }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ width: "600px", border: "1px solid #ccc" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          padding: "10px",
        }}
        onClick={() => setToggle(!toggle)}
      >
        <div>{title}</div>
        <div>{toggle ? "-" : "+"}</div>
      </div>
      {toggle && <div style={{ padding: "10px" }}>{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore hic temporibus velit dicta earum suscipit commodi eum enim atque at Et perspiciatis dolore iure voluptatem",
    },
    {
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore hic temporibus velit dicta earum suscipit commodi eum enim atque at Et perspiciatis dolore iure voluptatem",
    },
    {
      title: "Accordion 3",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore hic temporibus velit dicta earum suscipit commodi eum enim atque at Et perspiciatis dolore iure voluptatem",
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion</h1>
      <div
        className="accordion"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {accordionData.map(({ title, content }) => (
          <SingleAccordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
