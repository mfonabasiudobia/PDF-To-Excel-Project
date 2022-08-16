import React from 'react';
import { useConvertionContext } from "../ContextApi";


const Loading = () => {

	const { contextData } = useConvertionContext();


	return (
		<section className={`modal-wrapper ${!contextData.loading ? 'hidden' : '' }`}>
			<section className="modal-inner-wrapper">
				<div className="modal-body">
					<img src="images/loading.gif" alt="" />
				</div>
			</section>
		</section>
	)
}

export default Loading;