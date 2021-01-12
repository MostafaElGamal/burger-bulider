import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-af189.firebaseio.com/",
});

export default instance;
