import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Csv = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-csv'});

		if(contextData[getRouteIndexByName('pdf-to-csv')].length > 0)
													navigate('/convert');

	},[contextData.current_route])

	return (
		<Layout title="CSV" image="images/csv.png"  />
	)
}

export default Csv;