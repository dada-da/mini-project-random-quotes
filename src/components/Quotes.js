import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("#046582");
  const colorList = [
    "#046582",
    "#34626C",
    "#32AFA9",
    "#745C97",
    "#3A6351",
    "#D35D6E",
    "#FF8364",
    "#99154E",
  ];

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let quoteList = data.quotes;
        let randomNum = Math.floor(Math.random() * quoteList.length);
        let randomQuote = quoteList[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const getColor = () => {
    let randomColorNum = Math.floor(Math.random() * colorList.length);
    setColor(colorList[randomColorNum]);
  };

  const handleClick = () => {
    getQuote();
    getColor();
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "74vh",
        paddingTop: "15rem",
        backgroundColor: color,
        transition: "0.7s all linear",
      }}
    >
      <section id="quote-box">
        <h1 style={{ color: color }}>"{quote}"</h1>
        <p style={{ color: color }}>- {author}</p>
        <button
          type="button"
          onClick={handleClick}
          style={{ backgroundColor: color }}
        >
          Quote!!!
        </button>
      </section>
    </div>
  );
};

export default Quotes;
