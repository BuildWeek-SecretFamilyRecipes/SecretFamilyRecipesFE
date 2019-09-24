import axios from 'axios';

export default () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            // 'Content-Type': 'application/json',
            // 'Authorization': `${token}`,
            baseURL: "https://secretfamilyrecipe.herokuapp.com/api/auth/",
            headers: {
              Authorization: token,
              // Remove when live
            //   AccessControlAllowOrigin: "http://localhost:3000",
        },
    },
})};

// import axios from "axios";

// export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");

//   return axios.create({
//     baseURL: "https://buildweek-foodie1.herokuapp.com",
//     headers: {
//       Authorization: token,
//       // Remove when live
//       AccessControlAllowOrigin: "http://localhost:3000",
//     },
//   });
// }; 

// export default axiosWithAuth;