import React from 'react';

const TableExercise = () => {
	const originalList = [
		{
			title: '家事全般（立位・軽い）',
			calo: '26kcal',
			time: 10
		}
	];

	const listExercise = Array.from({length: 100}, (_, i) => {
		const originalData = originalList[i % originalList.length];
		return {
			title: originalData.title,
			calo: originalData.calo,
			time: originalData.time
		};
	});

	const listExercise2 = Array.from({length: 100}, (_, i) => {
		const originalData = originalList[i % originalList.length];
		return {
			title: originalData.title,
			calo: originalData.calo,
			time: originalData.time
		};
	});
	return (
		<React.Fragment>
			<div className="table-exercise mg-2">
				<p className="txt-exercise-calo color-light mr-4">
					MY EXERCISE
				</p>
				<p className="txt-exercise-h3 color-light ">2021.05.21</p>
			</div>
			<div className="exercise bg-dark-text">
				<ul className="exercise-list">
					{listExercise.map((exercise, index) => (
						<li key={index} className="exercise-info">
							<span className="exercise-info-dots bg-light"></span>
							<div className="exercise-info-inner">
								<p className="exercise-info-inner-text">
									<span className="txt-exercise-title color-light">{exercise.title}</span>
									<span className="txt-exercise-calo color-primary-300">{exercise.calo}</span>
								</p>
								<p className="exercise-info-inner-time color-primary-300 txt-exercise-time">{exercise.time} min</p>
							</div>
						</li>
					))}
				</ul>
				<ul className="exercise-list">
					{listExercise2.map((exercise, index) => (
						<li key={index} className="exercise-info">
							<span className="exercise-info-dots bg-light"></span>
							<div className="exercise-info-inner">
								<p className="exercise-info-inner-text">
									<span className="txt-exercise-title color-light">{exercise.title}</span>
									<span className="txt-exercise-calo color-primary-300">{exercise.calo}</span>
								</p>
								<p className="exercise-info-inner-time color-primary-300 txt-exercise-time">{exercise.time} min</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</React.Fragment>
	);
};

export default TableExercise;
