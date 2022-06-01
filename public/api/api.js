import axios from 'axios'
export const AxiosInstanceWithXAuthToken = ()=>{
    return axios.create({
        baseURL : "185.239.106.26:8080/api/",
         headers : {
             "x-auth-token" : "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs"
         }
})};
