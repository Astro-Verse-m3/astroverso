import * as React from "react";

export interface iModelViewer
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "ref"
  > {
  src: string;
  "ios-src"?: string;
  "camera-controls"?: boolean;
  "disable-zoom"?: boolean;
  "auto-rotate"?: boolean;
  ar?: boolean;
  autoplay?: boolean;
  "shadow-intensity"?: number | string;
  "ar-scale"?: number | string;
  style?: React.CSSProperties;
  ref?: React.MutableRefObject<iModelViewer>;
  toBlob?: ({ idealAspect }: { idealAspect: boolean }) => Promise<Blob>;
}

// Add model-viewer to the IntrinsicElements list
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": iModelViewer;
    }
  }
}

export const AnimatedImage = ({ src }: iModelViewer) => {
  return (
    <model-viewer
      className="animated-image"
      src={src}
      ar
      ios-src=""
      auto-rotate
      style={{ width: "15rem", height: "15rem" }}
    ></model-viewer>
  );
};
