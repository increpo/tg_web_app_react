import React, {useState, useEffect, useCallback} from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem.jsx';
import {useTelegram} from '../../hooks/useTelegram.js';

const products = [
	{id: '1', title: 'Jeens', 			price: 5000, 	description: 'Blue color, streight'},
	{id: '2', title: 'Jacket', 			price: 12000, 	description: 'green color, streight'},
	{id: '3', title: 'Jeens slim', 		price: 5500, 	description: 'Pink color, slim'},
	{id: '4', title: 'Jacket leather', 	price: 11300, 	description: 'Brown color, leather'},
	{id: '5', title: 'Jeens skiny', 	price: 7200, 	description: 'Purple color, skiny'},
	{id: '6', title: 'Jacket jeens', 	price: 11400, 	description: 'Wigth color, jeens'},
	{id: '7', title: 'Denim shorts', 	price: 3100, 	description: 'Red color, denim'},
	{id: '8', title: 'Jacket classic', 	price: 15000, 	description: 'Black color, classic'}
]

const getTotalPrice = (items = []) => {
	return items.reduce((acc, item) => {
		return acc += item.price
	}, 0)
}

const ProductList = () => {
	const [addedItems, setAddedItems] = useState([]);
	const {tg} = useTelegram();

	const onAdd = (product) => {
		const alreadyAdded = addedItems.find(item => item.id === product.id);
		let newItems = [];

		if(alreadyAdded){
			newItems = addedItems.filter(item => item.id !== product.id);
		} else {
			newItems = [...addedItems, product];
		}

		setAddedItems(newItems);

		if(newItems.length === 0){
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
			tg.MainButton.setParams({
				text: `Buy for ${getTotalPrice(newItems)}`
			})
		}
	}
	return (
		<div className={'list'}>
			{products.map(item => {
				<ProductItem
					product={item}
					anAdd={onAdd}
					className={'item'}
				/>
			})}
		</div>
	)
}

export default ProductList;