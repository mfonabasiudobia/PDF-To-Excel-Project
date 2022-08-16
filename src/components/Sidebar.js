import React from 'react';
import { Link } from "react-router-dom";
import { useConvertionContext } from "../ContextApi";

const styles = {
		wrapper : `w-[200px] bg-gray-100 h-screen border-r`,
		listWrapper : `p-3 space-y-2 `,
		listItem : `font-bold text-sm py-1 px-2 hover:bg-gray-500 hover:bg-opacity-10 block rounded flex items-center space-x-2`,
		activeListItem : `text-blue-500 bg-opacity-10 bg-gray-500`,
		icons : `w-[15px] h-[15px]`,
		listTitle : `font-bold opacity-50 py-1 px-5 text-sm`
	}

export const Item = ({route, name}) => {

	const { contextData } = useConvertionContext();

		return (
		<li>
			<Link to={route === 'pdf-to-xls' ? '/' : '/' + route} 
			className={`${styles.listItem} ${contextData.current_route === route ? styles.activeListItem : ''}`}>{name}</Link>
		</li>
		)

}


const Sidebar = () => {
	return (
		<section className={styles.wrapper}>
			<div className="flex items-center space-x-3 px-5 text-sm py-3">
				<img src="favicon.ico" alt="Logo" className="w-[20px] rounded-lg"/>
				<span>PDF Converter</span>
			</div>
			<h2 className={styles.listTitle}>PDF to Others</h2>
			<ul className={styles.listWrapper}>
				
				<Item route='pdf-to-xls' name='PDF to Excel' />

				<Item route='pdf-to-txt' name='PDF to TXT' />

				<Item route='pdf-to-csv' name='PDF to CSV' />

				<Item route='pdf-to-json' name='PDF to JSON' />

				{/*<Item route='pdf-to-jpg' name='PDF to JPG' />

				<Item route='pdf-to-png' name='PDF to PNG' />*/}

			</ul>
		</section>
	)
}

export default Sidebar;