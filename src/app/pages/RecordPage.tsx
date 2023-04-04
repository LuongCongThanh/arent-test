import React from 'react';
import CardRecord from "@shared/partial/CardRecord";
import LineChartCustom from "@shared/partial/LineChartCustom";
import TableExercise from "@shared/partial/TableExercise";
import TableLoadMore from "@shared/partial/TableLoadMore";

const RecordPage = () => {
    const originalList = [
        {
            year: '2021.05.21',
            time: "23:25",
            textTitle: '私の日記の記録が一部表示されます。',
            textContent: ' テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
        }
    ];

    const newList = [];

    for (let i = 0; i < 32; i++) {
        newList.push(...originalList);
    }

    return (
        <div className="record">
            <CardRecord/>
            <div className="record-chart bg-dark-chart">
                <p className="pd-5 color-light">
                    <span className="txt-exercise-calo mr-3">BODY RECORD</span>
                    <span className="txt-exercise-h3">2021.05.21</span>
                </p>
                <LineChartCustom/>
                <p className="record-chart-month pl-5 pb-3">
                    <span className="record-chart-month-item bg-light color-primary-300 mr-2">日</span>
                    <span className="record-chart-month-item bg-light color-primary-300 mr-2">週</span>
                    <span className="record-chart-month-item bg-light color-primary-300 mr-2">月</span>
                    <span className="record-chart-month-item bg-primary-300 color-light mr-2">年</span>
                </p>

            </div>
            <div className="record-exercise bg-dark-text my-4">
                <TableExercise/>
            </div>
            <TableLoadMore dataText={newList} loadMoreItems={8} initialItems={8}/>
        </div>
    );
};

export default RecordPage;

