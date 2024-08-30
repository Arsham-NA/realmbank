
import { faq_accordion_data } from "./faq_accordion_data";

const FaqAccordion = () => {
	return (
		<div className="accordion accordion-flush" id="accordionFlushExample">
			{
				faq_accordion_data.map((item) => {
					return (
						<div key={item.id} className="accordion-item py-2">
							<h2 className="accordion-header">
								<button className="accordion-button collapsed px-0 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
									{item.title}
								</button>
							</h2>
							<div id={`flush-collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
								<div className="accordion-body text-secondary px-1">{item.description}</div>
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default FaqAccordion;