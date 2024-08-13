declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const value: string;
  export default value;
}

// declare module "*.svg" {
//   import React = require("react");
//   export const ReactComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement>
//   >;
//   const src: string;
//   export default src;
// }
