import React, {useState} from 'react';


interface DataProps {
	data: any[];
	initialItems: number;
	loadMoreItems: number
}

const TableLoadMore = (props: DataProps) => {

	const [items, setItems] = useState(props.data.slice(0, props.initialItems));

	const loadMore = () => {
		const newItems = props.data.slice(
			items.length,
			items.length + props.loadMoreItems
		);
		setItems([...items, ...newItems]);
	}

	return (
		<div className="load-more">
			<div className="load-more-list">
				{items && items.map((value: any, index: number) => (
					<div className="load-more-list-item" key={index}>
						<img src={value?.img} alt={value?.time} className="load-more-list-item-images"/>
						<p className="load-more-list-item-time color-light">
							<span className="txt-time-item">{value?.time}</span>
						</p>
					</div>
				))}
			</div>
			{items.length < props.data.length && (
					<button onClick={loadMore} className="btn btn-primary my-5">Load more</button>
			)}
		</div>
	);
};

export default TableLoadMore;
