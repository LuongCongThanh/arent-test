import React from 'react';
import TableLoadMore from "@shared/partial/TableLoadMore";
import column1 from "@assets/images/column-1.jpg";
import column2 from "@assets/images/column-2.jpg";
import column3 from "@assets/images/column-3.jpg";
import column4 from "@assets/images/column-4.jpg";
import column5 from "@assets/images/column-5.jpg";

const ColumPage = () => {

    const listRecommend = [
        {title: "recommended column", text: 'オススメ'},
        {title: "recommended diet", text: 'オススメ'},
        {title: "recommended beauty", text: 'オススメ'},
        {title: "recommended health", text: 'オススメ'}
    ]

    const listData = [
        {
            img: column1,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column2,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column3,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column4,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column5,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column5,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        },
        {
            img: column4,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column3,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column2,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column1,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column2,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column4,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column5,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column1,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column3,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column5,
            time: '05.21.Morning',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column1,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column4,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column2,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }, {
            img: column5,
            time: '2021.05.17   23:25',
            content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA']
        }
    ]
    return (
        <div className="column">
            <div className="column-header ">
                {listRecommend && listRecommend.map((item: any, index: number) => (
                    <div className="column-header-item bg-dark" key={index}>
                        <p className=" txt-exercise-h3 color-primary-300 txt-uppercase txt-center"> {item.title}</p>
                        <span className="column-header-item-line bg-light my-2"></span>
                        <p className="color-light txt-center"> {item.text}</p>
                    </div>
                ))}
            </div>
            <div className="column-list">
                <TableLoadMore data={listData} initialItems={8} loadMoreItems={4}/>
            </div>
        </div>
    );
};

export default ColumPage;
