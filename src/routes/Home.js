import React, { useEffect }  from 'react';
import Layout from "./layout";
import { useConvertionContext } from "../ContextApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
 	
 	const { setContextData, contextData, getRouteIndexByName } = useConvertionContext();
 	const navigate = useNavigate();

 	useEffect(() => {
		setContextData({...contextData, current_route : 'pdf-to-xls'});

		if(contextData[getRouteIndexByName('pdf-to-xls')].length > 0)
													navigate('/convert');
	},[contextData.current_route])

	return (
		<Layout title="Excel" image="images/xls.png"  />
	)
}

export default Home;