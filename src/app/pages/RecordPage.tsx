import React from 'react';
import CardRecord from "@shared/partial/CardRecord";
import LineChartCustom from "@shared/partial/LineChartCustom";
import TableExercise from "@shared/partial/TableExercise";

const RecordPage = () => {
	return (
		<div className="record">
			<CardRecord/>
			<div className="record-chart bg-dark-chart">
				<p>
					<span>BODY RECORD</span>
					<span>2021.05.21</span>
				</p>
				<LineChartCustom/>
				<p className="record-chart-month">
					<span className="month-item bg-light color-primary-300 mr-2">日</span>
					<span className="month-item bg-light color-primary-300 mr-2">週</span>
					<span className="month-item bg-light color-primary-300 mr-2">月</span>
					<span className="month-item bg-primary-300 color-light mr-2">年</span>
				</p>

			</div>
			<div className="record-exercise bg-dark-text my-4">
				<TableExercise/>
				<div className="scrollbar">
					<div className="force-overflow"></div>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;

