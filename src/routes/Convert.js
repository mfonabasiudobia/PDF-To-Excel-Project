import React from 'react';
import axios from "../config/axios";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Sidebar from "../components/Sidebar";
// import { Link } from "react-router-dom";

const Convert = () => {

	const { contextData, setContextData, addFiles, clearAll, getRouteIndex, getType } = useConvertionContext();
	const navigate = useNavigate();

	const styles = {
		wrapper : `h-screen w-full flex items-center overflow-hidden`,
		title : `text-2xl font-semibold text-center`,
		innerWrapper : `rounded-xl flex-1 w-full`,
		btn :`inline-block rounded-lg px-3 py-1 text-sm cursor-pointer` 
	}


 	const convertToExcel = (index) => {

 	  setContextData({...contextData, loading : true});

	  		axios({
		  		url: 'https://api.pdf.co/v1/file/upload/get-presigned-url?name=converted.pdf&contenttype=application/pdf',
	 			method : 'GET',
	 		}).then((res) => {

	 			 	const { presignedUrl, url } = res['data']; 

	                	axios({
					  		url: presignedUrl,
				 			method : 'PUT',
				 			data: contextData[getRouteIndex()][index].data,
				 			headers: {
				 				'content-type': 'application/pdf'
				 			},

				 		}).then((res) => {

				 			axios({
						  		url: 'https://api.pdf.co/v1/pdf/convert/to/' + getType().type,
					 			method : 'POST',
					 			data : {
					 				url : url,
					 				async : false,
					 				lang : "hin",
					 			}

					 		}).then((res) => {

					 			let data = contextData[getRouteIndex()];
					 			data[index].url = res.data.url;

					 			setContextData({...contextData, loading : false, [getRouteIndex()] : data});

					 		}).catch(() => {

					 			setContextData({...contextData, loading : false});
								alert("An error Occured while processing content");
								
					 		});


				 		}).catch(() => {

				 			setContextData({...contextData, loading : false});
							alert("An error Occured while processing content");
							
				 		});

	 		}).catch(() => {

	 			setContextData({...contextData, loading : false});
				alert("An error Occured while processing content");

	 		});



 }  

 	const removeItem = (index) => {

 		let data = contextData[getRouteIndex()];
 		data.splice(index, 1);
 		setContextData({...contextData, [getRouteIndex()] : data});

 		if(data.length === 0)
 			navigate(contextData.current_route === 'pdf-to-xls' ? '/' : '/' + contextData.current_route);
 	}

	return (
		<section className={styles.wrapper}>
			<Sidebar />
			<Loading />
			<section className="h-full w-full p-3 space-y-5 flex flex-col items-center justify-center">
				<h1 className={styles.title}>PDF to { getType().title.toUpperCase() }</h1>

				<section className={styles.innerWrapper}>
					<section className="flex items-center justify-between py-2 border-b">
						<h1 className='text-sm'>Maximum: {contextData[getRouteIndex()].length}/5 file(s)</h1>

						<div className="space-x-2">
							<label htmlFor="file" 
								className={`${styles.btn} bg-blue-500  text-white`}>&#43; Adds Files</label>
							<input type='file' hidden id="file" onChange={addFiles} accept="application/pdf" />
							<button className={`${styles.btn} bg-white border`} onClick={() => {
								clearAll();
								navigate(contextData.current_route === 'pdf-to-xls' ? '/' : '/' + contextData.current_route);
							}}>Clear All</button>
						</div>
					</section>


					<section>
						<table className='table'>
							<tbody>

							{contextData[getRouteIndex()]?.map((item, index) => 
								<tr key={index}>
									<td><img src="images/pdf.png" className="w-[20px] h-auto" alt="" /></td>
									<td>{item.data.name}</td>
									<td>{Math.floor(item.data.size/1000)}Kb</td>


									<td>

									{item.url.length > 0 ? 

										['csv', 'xls'].includes(getType().type) ?

										 <a href={item.url} className={`${styles.btn} bg-blue-500  text-white`} download>Download</a> :
										 
										<a href={item.url} target="_blank" rel="noreferrer" className={`${styles.btn} bg-blue-500  text-white`} download>Download</a>
										: 
										<button  
										className={`${styles.btn} bg-blue-500  text-white`} 
										onClick={() => convertToExcel(index)}>Convert</button>}
									</td>

									<td className="flex justify-end">
										<button className="text-xl" onClick={() => removeItem(index)}>&#xd7;</button>
									</td>

								</tr>
								 )}

							</tbody>
						</table>
					</section>
				</section>



					{/*<section className="flex items-center justify-end py-2 w-full border-t">
						<div>
							<button 
								disabled={contextData.pdf_to_excel[0]?.url.length > 0 ? true : false}
								className={`inline-block rounded-lg px-8 py-2 bg-blue-500  text-white`} 
								onClick={() => convertToExcel()}>Convert</button>
						</div>
					</section>*/}
			</section>
		</section>
	)
}

export default Convert;