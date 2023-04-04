import React, {useState} from 'react';


interface DataProps {
	data?: any[];
	dataText?: any[];
	initialItems: number;
	loadMoreItems: number
}

const TableLoadMore = (props: DataProps) => {

	const [items, setItems] = useState(props.data?.slice(0, props.initialItems) || []);

	const loadMore = () => {
		const newItems = props.data?.slice(
			items?.length,
			(items?.length || 0) + props.loadMoreItems
		) ?? [];
		setItems([...items, ...newItems]);
	}

	const originalList = [
		{
			year: '2021.05.21',
			time: "23:25",
			textTitle: '私の日記の記録が一部表示されます。',
			textContent: ' テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
		}
	];

	const listExercise = Array.from({length: 100}, (_, i) => {
		const originalData = originalList[i % originalList.length];
		return {
			year: originalData.year,
			time: originalData.time,
			textTitle: originalData.textTitle,
			textContent: originalData.textContent
		};
	});


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

			<div className="load-more-text">
				{listExercise && listExercise.map((value: any, index: number) => (
					<div className="load-more-text-item pd-2" key={index}>
						<p className="txt-exercise-calo">{value.year}</p>
						<p className="txt-exercise-calo pb-1">{value.time}</p>
						<p className="txt_diary">{value.textTitle}</p>
						<p className="txt_diary">{value.textContent}</p>
					</div>
				))}
			</div>
			{items && items.length < props.data!.length && (
				<button onClick={loadMore} className="btn btn-primary my-5">自分の日記をもっと見る</button>
			)}
		</div>
	);
};

export default TableLoadMore;
