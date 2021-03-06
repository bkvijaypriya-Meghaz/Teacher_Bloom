import Link from 'next/link'
import { useForm } from 'react-hook-form'

const TeacherSignIn = () => {
  const { register, handleSubmit } = useForm({
    mode:"onChange"})
    const onSubmit = data => {
      console.log(data);
    }
  return(
    <div className="auth-wrapper">
      <div className="auth-content subscribe">
          <div className="card">
              <div className="row no-gutters">
                <div className="col-md-4 col-lg-6 theme-bg align-items-center justify-content-center">
                  <div className="loginicondiv">
                    <div className="loginusericon"><img src="assets/images/user/teachericon.png" alt="lock images" className="img-fluid"/>
                    </div>
                    <div className="loginusertxt">Teacher Login</div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-6">
                    <div className="card-body text-center">
                        <div className="row justify-content-center">
                            <div className="col-sm-10">
                                <h3 className="mb-4">Login</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name="Email" ref={register} />
                                </div>
                                <div className="input-group mb-4">
                                    <input type="password" className="form-control" placeholder="password" name="password" ref={register} />
                                </div>
                                <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked="" ref={register} readOnly />
                                        <label htmlfor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div>
                                <a href="dashboard"><button className="btn btn-primary shadow-2 mb-4">Login</button></a>
                                <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password-v4.html">Reset</a></p>
                                </form>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherSignIn