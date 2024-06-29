import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";
import { toast } from "react-toastify";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      // toast.error("Please Provide All Fields...");
      toast.error("Invalid Login Account!!!", { autoClose: 100 });
      // return alert("Please Provide All Fields...");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    if (
      !name ||
      !role ||
      !email ||
      !password ||
      !phone ||
      !organisationName ||
      !address ||
      !hospitalName
    )
      store.dispatch(
        userRegister({
          name,
          role,
          email,
          password,
          phone,
          organisationName,
          address,
          hospitalName,
        })
      );
  } catch (error) {
    console.log(error);
  }
};
