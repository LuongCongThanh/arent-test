import React from 'react';
import TableLoadMore from "../shared/partial/TableLoadMore";
import column1 from '@assets/images/column-1.jpg';
import column2 from '@assets/images/column-2.jpg';
import column3 from '@assets/images/column-3.jpg';
import column4 from '@assets/images/column-4.jpg';
import column5 from '@assets/images/column-5.jpg';
import hexagon from '@assets/images/img.png';
import {ReactComponent as IconKnife} from '@assets/icons/icon_knife.svg';
const Home = () => {
	const listData = [
		{
			img: column1,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column2,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column3,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column4,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column5,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column5,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
		{
			img: column4,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column3,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column2,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column1,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column2,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column4,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column5,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column1,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column3,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column5,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column1,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column4,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column2,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},	{
			img: column5,
			time: '05.21.Morning',
			content: '',
			tags: ''
		},
	]
	return (
		<div className="home">
			<div className="home-hexagon">
				{/*<img src={hexagon} alt="hexagon" className='home-hexagon-image'/>*/}
				<div className="home-hexagon-content">
					<IconKnife/>
					<p>Morning</p>
				</div>
			</div>
			{/*<button className="btn btn-primary">記録をもっと見る</button>*/}
			<TableLoadMore data={listData} initialItems={8} loadMoreItems={4} />
		</div>
	);
};

export default Home;

