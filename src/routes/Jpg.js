import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Jpg = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-jpg'});

		if(contextData[getRouteIndexByName('pdf-to-jpg')].length > 0)
													navigate('/convert');

	},[contextData.current_route])

	return (
		<Layout title="JPG" image="images/xls.png"  />
	)
}

export default Jpg;