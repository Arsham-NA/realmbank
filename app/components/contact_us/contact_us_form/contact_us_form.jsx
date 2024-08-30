"use client";
import "./_contact_us_form.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsForm = () => {

	const formik = useFormik({
		initialValues: {name: "", email: "", phone_number: "", message: ""},
		onSubmit: (values) => {
			setTimeout(() => {
				console.log(JSON.stringify(values));
				formik.setSubmitting(false);
				toast.success("Your message has been sent", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Zoom,
					});
			}, 200);
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Please enter your name"),
			email: Yup.string().email("Your email is incorrect").required("Please enter your email address"),
			phone_number: Yup.number("Your number is incorrect").required("Please enter your number"),
			message: Yup.string().required("Please write your message")
		})
	})

	return (
		<form className="contact_us_form row row-gap-4" onSubmit={formik.handleSubmit}>
			<div className="col-12">
				<input type="text" name="name" className="form-control py-3" placeholder="Your Name..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.touched.name ? <span className="text-danger d-block mt-2">{formik.errors.name}</span> : undefined}
			</div>

			<div className="col-sm-6">
				<input type="email" name="email" className="form-control py-3" placeholder="Your Email..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.touched.email ? <span className="text-danger d-block mt-2">{formik.errors.email}</span> : undefined}
			</div>

			<div className="col-sm-6">
				<input type="tel" name="phone_number" className="form-control py-3" placeholder="Your Phone..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.touched.phone_number ? <span className="text-danger d-block mt-2">{formik.errors.phone_number}</span> : undefined}
			</div>
			
			<div className="col-12">
				<textarea name="message" className="form-control py-3" placeholder="Your Message" rows={7} onChange={formik.handleChange} onBlur={formik.handleBlur} ></textarea>
				{formik.touched.message ? <span className="text-danger d-block mt-2">{formik.errors.message}</span> : undefined}
			</div>

			<div className="col-lg-5">
				<button type="submit" className={`submit_btn ${formik.isSubmitting ? "opacity-75" : undefined}`} disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Submitting" : "Share It With Us"}
				</button>
			</div>
			<ToastContainer />
		</form>
	);
};

export default ContactUsForm;