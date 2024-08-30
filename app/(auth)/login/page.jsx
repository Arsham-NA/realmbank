"use client";
import "./_login.scss";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {

	const formik = useFormik({
		initialValues: {email: "", password: ""},
		onSubmit: (values) => {
			setTimeout(() => {
				console.log(JSON.stringify(values))
				formik.setSubmitting(false);
			}, 200);
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email().required("Please enter your email address"),
			password: Yup.string().min(8, "Minimum Characters Should Be 8").required("Please enter your password")
		})
	})

	return (
		<div className="row col-6 col-md-12 mx-auto login_page">
			
			<div className="section_left col-md-7 d-none d-md-block p-0 pt-5">
				<h1 className="text-center">Have A Nice Day!</h1>
				<div className="image_border"></div>
			</div>

			<form className="form col-md-5 p-0 py-5" onSubmit={formik.handleSubmit}>
				<div className="col-12 text-center">
					<h3 className="mb-5">Login Your Account</h3>
				</div>
				<div className="col-10 col-md-7 mb-5">
					<input type="email" className="form-control" placeholder="Username" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					{formik.touched.email ? <span className="d-block text-danger mt-2">{formik.errors.email}</span> : undefined}
				</div>
				<div className="col-10 col-md-7 mb-5">
					<input type="password" className="form-control" placeholder="Password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					{formik.touched.password && <span className="d-block text-danger mt-2">{formik.errors.password}</span>}
				</div>
				<div className="col-10 col-md-7 d-flex justify-content-start align-items-end mb-3">
					<Link href={"/register"} className="text-decoration-none">Dont Have An Account?</Link>
				</div>
				<div className="col-10 col-md-7">
					<button type="submit" className={`submit_btn ${formik.isSubmitting ? "opacity-75" : undefined}`} disabled={formik.isSubmitting}>Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;