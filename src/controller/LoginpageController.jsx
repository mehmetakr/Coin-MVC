import { schema } from "../Schema";
import { useFormik } from "formik";
import Loginpageview from "../views/Loginpageview";
import "bootstrap/dist/css/bootstrap.min.css";



const LoginpageController = () => {

  // Formik in bütün özelliklerini kullanmamızı sağlar

  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password:"",
      confirmpassword:"",
    },

    // validasyon şeması

    validationSchema: schema,

    // Form gönderildikce çalışıcak olan fonksiyon
    //   otomatik olarak sayfayı yenilemeyi engeller..
    // 1. parametre  olarak formdaki verileri alır..
    // 2. parametre olarak formda çalışabilecek aksiyonları alır..
    onSubmit: (values, actions) => {
      console.log(actions);
    },
  });
    
  return <Loginpageview  formik={formik}/>;
};
export default LoginpageController;
