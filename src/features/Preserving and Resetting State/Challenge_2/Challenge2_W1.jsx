import { useState } from "react";

export default function App() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <div>
      {reverse ? (
        <>
          <Field label="Last name" key="1" />
          <Field label="First name" key="2" />
          {checkbox}
        </>
      ) : (
        <>
          <Field label="Last name" key="2" />
          <Field label="First name" key="1" />
          {checkbox}
        </>
      )}
    </div>
  );
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label>
      {label}:{" "}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}
