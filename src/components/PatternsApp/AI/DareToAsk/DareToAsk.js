import React, { useState } from "react";
import "./DareToAsk.css";

const DareToAsk = () => {
  const [inputValue, setInputValue] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const onInputHandle = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setAnswer(null);
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiKey = "#";

      const parameters = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: inputValue }],
        temperature: 0.7,
      };

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(parameters),
      });

      const data = await res.json();
      console.log(data);
      setAnswer(data.choices[0].message.content);
      //
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert("Something goes wrong!!");
      setLoading(false);
    }
  };

  return (
    <div className="art-container">
      <h1>Dare to Ask 🤓</h1>
      <p>Enter your prompt at bottom what do you want to ask</p>

      <form class="form" onSubmit={onSubmit}>
        <button>
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <input
          class="input"
          placeholder="Type your text"
          required=""
          type="text"
          value={inputValue}
          onChange={onInputHandle}
        />
        <button class="reset" type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>

      {loading && <div class="loader-2"></div>}
      {answer && <p className="answer">{answer}</p>}
    </div>
  );
};

export default DareToAsk;
