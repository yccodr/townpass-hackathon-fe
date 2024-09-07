import { createFileRoute } from "@tanstack/react-router";
// import useHandleConnectionData from "@/composables/useHandleConnectionData";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/test")({
  component: Test,
});

type Beacons = {
  UUID: string;
  Major: number;
  Minor: number;
};

function Test() {
  const [beacons, setBeacons] = useState<Beacons[]>();

  const handleBeaconData = (event: { data: string }) => {
    const result: { name: string; beacons: Beacons[] } = JSON.parse(event.data);

    if (!result.beacons) {
      setBeacons((prev) => prev?.concat(result.beacons));
    }
  };

  //   useHandleConnectionData(handleBeaconData);

  useEffect(() => {
    window.addEventListener("message", handleBeaconData);
  }, []);

  //   window.addEventListener('message', function(event) {
  //     if (event.data == 'capturePort') {
  //         // capture port2 coming from the Dart side
  //         if (event.ports[0] != null) {
  //             // the port is ready for communication,
  //             // so you can use port.postMessage(message); wherever you want
  //             port = event.ports[0];
  //             // To listen to messages coming from the Dart side, set the onmessage event listener
  //             port.onmessage = function (event) {
  //                 // event.data contains the message data coming from the Dart side
  //                 console.log(event.data);
  //             };
  //         }
  //     }

  return (
    <>
      {beacons?.map((val, idx) => {
        return (
          <h1 key={idx}>
            {idx} : {val.Major} {val.Minor} {val.UUID}
          </h1>
        );
      })}
    </>
  );
}
