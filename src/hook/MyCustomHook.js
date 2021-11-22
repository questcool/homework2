import { useEffect, useState } from "react";

export default function MyCustomHook() {
  const [inputValue, setInputValue] = useState("Custom hook");
  useDocumentTitle(inputValue);

  function editing(event) {
    setInputValue(event.target.value);
  }

  function useDocumentTitle(value) {
    useEffect(() => {
      document.title = value;
    });
  }

  return (
    <div>
      <p>
        <a href="/">На главную</a>
      </p>
      <div>Это кастомный хук</div>
      <div>Введённый текст станет названием документа (названием вкладки)</div>
      <input placeholder="" onChange={editing}></input>
    </div>
  );
}
