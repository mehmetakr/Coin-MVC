
import Inputfieldview from "./Inputfieldview";
import { inputs } from "../constant";

const Loginpageview = ({formik}) => {


return (

<div className="loginpage ">
      <div className="container my-5">
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span>Coinmania </span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <Inputfieldview key={data.id}  formik={formik} data={data} />
          ))}

          <button>Gönder</button>
        </form>
      </div>
    </div>

)

}

export  default Loginpageview 