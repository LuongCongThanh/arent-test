import React, {useState} from 'react';

const ListItems = () => {

	const listData = [
		{
			img:'',
			time: '',
			content: '',
			tags :''
		},
		{
			img:'',
			time: '',
			content: '',
			tags :''
		},
		{
			img:'',
			time: '',
			content: '',
			tags :''
		},
	]
	const [rowData, setRowData] = useState(listData.slice(0, 10));
	const [visibleRows, setVisibleRows] = useState(10);

	const handleLoadMore = () => {
		setVisibleRows(visibleRows + 10);
		setRowData(listData.slice(0, visibleRows + 10));
	};

	return (
		<div className="list">
			<div className="list-item">
				<img src="../../assets/images/column-3.jpg" alt="3"/>
				<p>05.21.Moring</p>
			</div>
		</div>
	);
};

export default ListItems;
