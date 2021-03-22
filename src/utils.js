import Axios from "axios";

// export const getData = () => Axios.get("https://walkwel.herokuapp.com");
// Axios({
//   method: "GET",
//   url: "https://walkwel.herokuapp.com",
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
// });

const url = "https://walkwel.herokuapp.com";

export const getData = async () =>
  await Axios({
    method: "GET",
    url: "https://walkwel.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

export const getInitials = (name) => {
  const fullname = name && name.trim().split(" ");
  const firstname = fullname[0];
  const lastname = fullname[fullname.length - 1];
  return lastname !== firstname ? firstname[0] + lastname[0] : firstname[0];
};
