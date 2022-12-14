
// shimmer effect for image placeholder
export const shimmer = (w: number, h: number): string => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
// export const repeater = async (list:[]) {
//   for (item of list) {
//     console.log(item);
//     await delay(2000);
//   }
// }



export const secondsToDhms = (seconds:number, dhms:"dhms"|"dhm") => {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);
  let dDisplay = d > 0 ? d + "d " : "";
  let hDisplay = h > 0 ? h + "h " : "";
  let mDisplay = m > 0 ? m + "min " : "";
  let sDisplay = s > 0 ? s + "s" : "";
  if (dhms === "dhms") {
    return dDisplay + hDisplay + mDisplay + sDisplay;
  } else if (dhms === "dhm") {
    return dDisplay + hDisplay + mDisplay;
  }
};