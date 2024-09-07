declare global {
  interface FlutterObject {
    postMessage(message: any): void;
    addEventListener(event: "message", cb: (ev: any) => void): void;
    removeEventListener(event: "message", cb: (ev: any) => void): void;
  }

  var flutterObject: FlutterObject;
}

export {};
