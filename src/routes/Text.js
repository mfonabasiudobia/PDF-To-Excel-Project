import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Txt = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-txt'});

		if(contextData[getRouteIndexByName('pdf-to-txt')].length > 0)
													navigate('/convert');

	},[contextData.current_route])

	return (
		<Layout title="TXT" image="images/txt.png"  />
	)
}

export default Txt;