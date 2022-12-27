import { useEffect, useState } from "react";

const PREFIX = "codepen-clone ";

function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const JsonValue = localStorage.getItem(prefixedKey);
    if (JsonValue != null) return JSON.parse(JsonValue);

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}

export default useLocalStorage;
