declare global {
  interface BeaconEvent extends CustomEvent {
    detail: {
      uuid: string;
      major: number;
      minor: number;
    };
  }

  interface WindowEventMap {
    onBeaconUpdate: BeaconEvent;
    onBeaconLeave: BeaconEvent;
  }
}

// This empty export is necessary to make the file a module
export {};
