import React from 'react';
import MyRecommend1 from '@assets/images/MyRecommend_1.jpg';
import MyRecommend2 from '@assets/images/MyRecommend-2.jpg';
import MyRecommend3 from '@assets/images/MyRecommend-3.jpg';
const CardRecord = () => {

	const cardsData = [
		{
			title: 'body record',
			content: '自分のカラダの記録',
			img: MyRecommend1
		},
		{
			title: 'my exercise',
			content: '自分の運動の記録',
			img: MyRecommend2
		},
		{
			title: 'my diary',
			content: '自分の日記',
			img: MyRecommend3
		}

	]

	return (
		<div className="cards">
			{cardsData && cardsData.map((card: any, index: number) =>(
				<div className="cards-item" key={index}>
					<img src={card.img} alt="card.title" className="cards-item-img"/>
					<div className="card-content">
						<p className="card-content-title txt-card-title color-primary-300 txt-uppercase">{card.title}</p>
						<p className="card-content-text txt-card-content color-light"> {card.content}</p>
					</div>
				</div>
			))}

		</div>
	);
};

export default CardRecord;
