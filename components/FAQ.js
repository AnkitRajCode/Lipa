import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"border-b border-gray-200 pb-2 px-2 faq " + (faq.open ? 'open' : '')}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question text-xl font-semibold flex justify-between mt-5">
				{faq.question}
			</div>
			<div className="faq-answer text-lg text-justify">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ