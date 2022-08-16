import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Png = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-png'});

		if(contextData[getRouteIndexByName('pdf-to-png')].length > 0)
													navigate('/convert');

	},[contextData.current_route])

	return (
		<Layout title="PNG" image="images/xls.png"  />
	)
}

export default Png;