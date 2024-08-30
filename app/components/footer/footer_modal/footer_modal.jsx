"use client";
import "./_footer_modal.scss";
import { BsTelegram, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const FooterModal = () => {

	const [title, setTitle] = useState("");
	const [id, setId] = useState("");

	return (
		<>
			<BsTwitter style={{width: "30px", height: "30px", cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#modal" onClick={() => {setTitle("Twitter"); setId("Arsham_NA_")}}/>
			<BsLinkedin style={{width: "30px", height: "30px", cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#modal" onClick={() => {setTitle("Linkedin");setId("...") }}/>
			<BsTelegram style={{width: "30px", height: "30px", cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#modal" onClick={() => {setTitle("Telegram"); setId("arsham_na")}}/>
			<BsInstagram style={{width: "30px", height: "30px", cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#modal" onClick={() => {setTitle("Instagram"); setId("Arsham_NA_")}}/>

			<div className="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
				<div className="modal-dialog modal-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5 text-black" id="modalLabel">{title}</h1>
						</div>
						<div className="modal-body">
							<p className="text-black m-0 py-4 fs-5">{id}</p>
						</div>
						<div class="modal-footer">
							<button type="button" className="close_btn rounded-3 px-3 py-2" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FooterModal;