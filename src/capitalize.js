export default function capitalize(str) {
  if (str === null || str === undefined) {
    return "";
  }
  
  if (typeof str !== "string") {
    str = String(str);
  }
  
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}