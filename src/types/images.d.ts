declare module '*.png' {
    const value: string;
    export = value;
  }
  declare module '*.jpg' {
    const value: string;
    export = value;
  }
  declare module '*.jpeg' {
    const value: string;
    export = value;
  }
  declare module '*.svg' {
    import React = require('react');
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
    export { ReactComponent };
  }
  
  declare module '*.gif' {
    const src: string;
    export default src;
  }