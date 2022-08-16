import React from 'react';
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useConvertionContext } from "../../ContextApi";

const Layout = ({ title, image }) => {

	const { addFiles } = useConvertionContext();
	const navigate = useNavigate();

	const styles = {
		wrapper : `h-screen w-full flex items-center overflow-hidden`,
		title : `text-2xl font-semibold text-center`,
		innerWrapper : `flex items-center justify-center border border-dashed rounded-xl flex-1 w-full`
	}
 
	return (
		<section className={styles.wrapper}>
			<Sidebar />
			<section className="h-full w-full p-3 space-y-5 flex flex-col items-center justify-center">
				<h1 className={styles.title}>PDF to { title }</h1>

				<section className={styles.innerWrapper}>
					<section className="space-y-5">
						
						<div className="flex items-center space-x-3">
							<img src="images/pdf.png" className="w-[120px] h-auto" alt="" />
							<span>&#8658;</span>
							<img src={image} className="w-[120px] h-auto" alt="" />
						</div>
					   
					   <div className="flex flex-col text-sm text-center justify-center items-center ">

					   	<label htmlFor="file" className="inline-block rounded-lg text-white bg-blue-500 px-8 py-2 cursor-pointer">Open Files</label>
					  	 <span>Or drag files here</span>

						<input type='file' hidden id="file" onChange={(e) => {
							addFiles(e);
							navigate("/convert");

						}} accept="application/pdf" />

					  </div>
					</section>
				</section>
			</section>
		</section>
	)
}

export default Layout;