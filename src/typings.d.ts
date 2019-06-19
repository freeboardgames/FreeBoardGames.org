declare module '*.png' {
  export default '' as string;
}
declare module '*.mp3' {
  export default '' as string;
}
declare module '*.md' {
  const content: string;
  export default content;
}
declare module '*.css' {
  export default {} as any;
}
declare module 'react-async-bootstrapper';
