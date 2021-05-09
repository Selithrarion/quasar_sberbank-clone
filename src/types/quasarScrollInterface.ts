export default interface QuasarScrollInterface {
  delta: {
    top: number;
    left: number;
  };
  directionChanged: boolean;
  inflectionPoint: {
    left: number;
    top: number;
  };
  position: {
    left: number;
    top: number;
  };
}
