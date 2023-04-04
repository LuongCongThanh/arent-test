import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis,} from "recharts";

const LineChartCustom = () => {
	const data = [
		{
			name: '6月',
			uv: 5000,
			pv: 5400,
		},
		{
			name: '7月',
			uv: 4000,
			pv: 4398,
		},
		{
			name: '8月',
			uv: 3000,
			pv: 3800,
		},
		{
			name: '9月',
			uv: 2780,
			pv: 2908,
		},
		{
			name: '10月',
			uv: 2190,
			pv: 2800,
		},
		{
			name: '11月',
			uv: 1000,
			pv: 1500,
		},
		{
			name: '12月',
			uv: 3240,
			pv: 3630,
		},
		{
			name: '1月',
			uv: 4240,
			pv: 4630,
		},
		{
			name: '2月',
			uv: 5240,
			pv: 5630,
		},
		{
			name: '3月',
			uv: 7240,
			pv: 7630,
		},
		{
			name: '4月',
			uv: 8240,
			pv: 8630,
		},
		{
			name: '5月',
			uv: 5240,
			pv: 5630,
		},
	];

	return (
		<div className="bg-dark-chart">
			<LineChart width={850} height={316} data={data} margin={{left: 60, right: 20, top: 20, bottom: 20}}>
				<XAxis dataKey="name" padding={{left: 30, right: 30}} tick={{fill: "#fff"}}/>
				<Tooltip/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Line type="monotone" dataKey="uv" stroke="#FFCC21" activeDot={{r: 6}}/>
				<Line type="monotone" dataKey="pv" stroke="#8FE9D0" activeDot={{r: 6}}/>
			</LineChart>
		</div>

	);
};

export default LineChartCustom;
