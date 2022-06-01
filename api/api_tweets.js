import { AxiosInstanceWithXAuthToken} from "./api";

export const getStudent = (data,callback) => {
    AxiosInstanceWithXAuthToken().get(`admin/user/fetchUserLike?nameFa=${data.name}&lastNameFa=${data.lname}`,data)
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
