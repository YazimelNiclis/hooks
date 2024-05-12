import { useEffect } from "react";

type Callback = (event: KeyboardEvent) => void;

function useKeyboardEvent(
  key: string,
  callback: Callback,
  dependencies: any[] = []
): void {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [key, callback, ...dependencies]);
}
export default useKeyboardEvent;
