export const api = "http://localhost:2000/api";

const generatePublicUrl = (fileName) => {
    return `http://localhost:2000/public/${fileName}`;
  };
  export default generatePublicUrl
