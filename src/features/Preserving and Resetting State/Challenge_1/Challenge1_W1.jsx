import { useState } from "react";

export default function Challenge1_1() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint ? (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      ) : (
        <p>
          <i></i>
        </p>
      )}

      <Form state="show" />
      {showHint ? (
        <button
          onClick={() => {
            setShowHint(false);
          }}
        >
          Hide hint
        </button>
      ) : (
        <button
          onClick={() => {
            setShowHint(true);
          }}
        >
          Show hint
        </button>
      )}
    </div>
  );
}

function Form({ state }) {
  const [text, setText] = useState("");
  return (
    <textarea
      key={state}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
