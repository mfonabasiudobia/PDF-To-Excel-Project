import React from 'react';
import { useState, createContext, useContext } from "react"

export const ConvertionContext = createContext();

export const ContextProvider = ({children}) => {

	const [contextData, setContextData] = useState({
        loading : false,
        pdf_to_xls : [],
        pdf_to_txt : [],
        pdf_to_csv : [],
        pdf_to_json : [],
        pdf_to_png : [],
        pdf_to_jpg : [],
        current_route : 'pdf-to-xls',
    });

	const addFiles = (e) => {

 		let data = contextData[getRouteIndex()];

 		if(data.length === 5) return;

 		data.push({url : '', data : e.target.files[0]});
 		setContextData({...contextData, [getRouteIndex()] : data});

 	}

 	const clearAll = () => {
 		setContextData({...contextData, [getRouteIndex()] : []});
 	}

 	const getType = () => {

 		if(contextData.current_route === 'pdf-to-xls')
			return {type : 'xls', title : 'XLS'};
		else if(contextData.current_route === 'pdf-to-csv')
			return {type : 'csv', title : 'CSV'};
		else if(contextData.current_route === 'pdf-to-txt')
			return {type : 'text-simple', title : 'TXT'}; 
		else if(contextData.current_route === 'pdf-to-json')
			return {type : 'json-meta', title : 'Json'};  
		else if(contextData.current_route === 'pdf-to-png')
			return {type : 'png', title : 'Png'};
		else if(contextData.current_route === 'pdf-to-jpg')
			return {type : 'jpg', title : 'JPG'};

 	}

 	const getRouteIndex = () => {

		if(contextData.current_route === 'pdf-to-xls')
			return 'pdf_to_xls';
		else if(contextData.current_route === 'pdf-to-csv')
			return 'pdf_to_csv';
		else if(contextData.current_route === 'pdf-to-txt')
			return 'pdf_to_txt';
		else if(contextData.current_route === 'pdf-to-json')
			return 'pdf_to_json';
		else if(contextData.current_route === 'pdf-to-png')
			return 'pdf_to_png';
		else if(contextData.current_route === 'pdf-to-jpg')
			return 'pdf_to_jpg';
	}


	const getRouteIndexByName = (route) => {

		if(route === 'pdf-to-xls')
			return 'pdf_to_xls';
		else if(route === 'pdf-to-csv')
			return 'pdf_to_csv';
		else if(route === 'pdf-to-txt')
			return 'pdf_to_txt';
		else if(route === 'pdf-to-json')
			return 'pdf_to_json';
		else if(route === 'pdf-to-png')
			return 'pdf_to_png';
		else if(route === 'pdf-to-jpg')
			return 'pdf_to_jpg';
	}



	return (
		<ConvertionContext.Provider value={{ contextData, setContextData, addFiles, clearAll, getRouteIndex, getRouteIndexByName, getType }}>
        	{children}
    	</ConvertionContext.Provider>
	)
}

export const useConvertionContext = () => useContext(ConvertionContext);