import React from 'react';

import column1 from '@assets/images/column-1.jpg';
import column2 from '@assets/images/column-2.jpg';
import column3 from '@assets/images/column-3.jpg';
import column4 from '@assets/images/column-4.jpg';
import column5 from '@assets/images/column-5.jpg';
import hexagon from '@assets/images/img.png';
import banner from '@assets/images/d01.jpg';
import {ReactComponent as IconKnife} from '@assets/icons/icon_knife.svg';
import {ReactComponent as IconCup} from '@assets/icons/icon_cup.svg';

import TableLoadMore from '@shared/partial/TableLoadMore';
import LineChartCustom from '@shared/partial/LineChartCustom';

const TopPage = () => {
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
        }, {
            img: column3,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column2,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column1,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column2,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column4,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column5,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column1,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column3,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column5,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column1,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column4,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column2,
            time: '05.21.Morning',
            content: '',
            tags: ''
        }, {
            img: column5,
            time: '05.21.Morning',
            content: '',
            tags: ''
        },
    ]

    const listHexagons = [
        {
            title: 'Morning',
            icon: <IconKnife/>
        },
        {
            title: 'Lunch',
            icon: <IconKnife/>
        },
        {
            title: 'Dinner',
            icon: <IconKnife/>
        },
        {
            title: 'Snack',
            icon: <IconCup/>
        }

    ]
    return (
        <div className="home">
            <div className="home-header">
                <div className="home-header-banner">
                    <img src={banner} alt="banner" className="home-header-banner-img"/>
                </div>
                <div className="home-header-chart">
                    <LineChartCustom/>
                </div>
            </div>
            <div className="home-hexagon">
                {listHexagons && listHexagons.map((item: any, index: number) => (
                    <div className="home-hexagon-item" key={index}>
                        <img src={hexagon} alt="hexagon" className='home-hexagon-item-image'/>
                        <div className="home-hexagon-item-content">
                            {item.icon}
                            <p className="color-light">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="home-table">
                <TableLoadMore data={listData} initialItems={8} loadMoreItems={4}/>
            </div>
        </div>
    );
};

export default TopPage;

