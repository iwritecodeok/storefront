import axios from "axios";

const instance = axios.create({
  baseUrl: "...", //this is where api (cloud function) url goes
});

export default instance;
