/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
