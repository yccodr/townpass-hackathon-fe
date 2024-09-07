import { useCallback, useEffect, useState } from "react";

export function useBeacon() {
  const [beaconData, setBeaconData] = useState<BeaconEvent["detail"] | null>(
    null
  );

  // Function to handle the beacon update event
  const updateBeacon = useCallback((event: BeaconEvent) => {
    console.log("Beacon update event:", event);
    setBeaconData(event.detail);
  }, []);

  // Function to reset the beacon data
  const reset = useCallback(() => {
    setBeaconData(null);
  }, []);

  // Set up and clean up the event listener
  useEffect(() => {
    window.addEventListener("onBeaconUpdate", updateBeacon);
    window.addEventListener("onBeaconLeave", reset);

    return () => {
      window.removeEventListener("onBeaconUpdate", updateBeacon);
      window.removeEventListener("onBeaconLeave", reset);
    };
  }, []);

  return { beaconData };
}
