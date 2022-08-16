import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Json = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-json'});

		if(contextData[getRouteIndexByName('pdf-to-json')].length > 0)
													navigate('/convert');

	},[contextData.current_route])

	return (
		<Layout title="JSON" image="images/json.png"  />
	)
}

export default Json;