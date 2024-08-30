"use client";
import "./_register.scss";
import { BiLogoGmail} from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {

	const formik = useFormik({
		initialValues: {name: "", email: "", password: ""}, 
		onSubmit: (values) => {
			setTimeout(() => {
				console.log(JSON.stringify(values));
				formik.setSubmitting(false);
			}, 200);
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Please enter your name"),
			email: Yup.string().email().required("Please enter your email address"),
			password: Yup.string().min(8, "Minimum Characters Should Be 8").required("Please enter your password")
		})
	})


	return (
		<main className="register_page w-100">
			<h1 className="w-100 text-center mb-5">Welcome to our family</h1>
			<div className="row justify-content-center align-items-center row-gap-5">

				{/* left section */}
				<div className="left_section col-12 col-md-6 d-flex justify-content-center align-items-center column-gap-5 order-2 order-md-1">
					<div className="svg_border"><BsFacebook className="w-100 h-100" style={{color: "#1877f2"}}/></div>
					<div className="svg_border"><BiLogoGmail className="w-100 h-100" style={{color: "#c5221f"}}/></div>
					<div className="svg_border"><BsTwitter className="w-100 h-100" style={{color: "#1d9Bf0"}}/></div>
				</div>
				
				{/* right section */}
				<form className="col-10 col-sm-8 col-md-6 p-md-5 row row-gap-4 justify-content-center align-items-center order-1 order-md-2" onSubmit={formik.handleSubmit}>
					<div className="col-12 col-lg-8">
						<input type="text" name="name" className="form-control"  placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.name ? <span className="text-danger d-block mt-1">{formik.errors.name}</span> : undefined}
					</div>
					<div className="col-12 col-lg-8">
						<input type="email" name="email" className="form-control" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.email ? <span className="text-danger d-block mt-1">{formik.errors.email}</span> : undefined}
					</div>
					<div className="col-12 col-lg-8">
						<input type="password" name="password" className="form-control"  placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
						{formik.touched.password ? <span className="text-danger d-block mt-1">{formik.errors.password}</span> : undefined}
					</div>
					<div className="col-12 col-lg-8">
						<button type="submit" className={`submit_btn w-100 text-white border-0 ${formik.isSubmitting ? "opacity-75" : undefined}`} disabled={formik.isSubmitting} >SIGN UP</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Register;