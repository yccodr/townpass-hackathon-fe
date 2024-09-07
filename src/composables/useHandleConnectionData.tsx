import { useEffect } from "react";

/**
 * Custom hook to handle connection data from the app.
 *
 * @param cb - Callback to process the data sent by the app. The callback receives an event parameter, where the app's returned data is in event.data as a string.
 *
 * <strong>Important Reminder:</strong>
 * It is recommended to call this hook in /views.
 * Each view should call it only once to handle all app data needed for the view.
 * Avoid calling it in /components to prevent management issues and unexpected errors due to duplicate listeners.
 */
const useHandleConnectionData = (cb?: (event: MessageEvent) => void) => {
  useEffect(() => {
    // Check if flutterObject is defined
    if (
      typeof (window as any).flutterObject !== "undefined" &&
      (window as any).flutterObject
    ) {
      if (cb) {
        (window as any).flutterObject.addEventListener("message", cb);

        // Cleanup the event listener on unmount
        return () => {
          (window as any).flutterObject.removeEventListener("message", cb);
        };
      }
    }
  }, [cb]); // The effect depends on the callback function
};

export default useHandleConnectionData;
