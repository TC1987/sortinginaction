import React, { useState } from 'react';
import styles from './sidebar.module.css';

import Algorithms from './Algorithms/Algorithms';
import Settings from './Settings/Settings';
import Playback from './Playback/Playback';

// MAKE SOME OF THE STYLE PROPS GLOBAL (LOCAL?) SO WE DON'T NEED TO PASS INTO COMPONENTS.
const Sidebar = ({
	sidebarOpen,
	setSidebarOpen,
	speed,
	setSpeed,
	barCount,
	setBarCount,
	minHeight,
	setMinHeight,
	maxHeight,
	setMaxHeight,
	algorithm,
	setAlgorithm,
	runAlgorithm,
	newNumbers,
	resetNumbers,
	running,
	setRunning
}) => {
	return (
		<div className={`${styles.sidebar} ${sidebarOpen ? styles.isOpen : ''}`}>
			<ul className={styles.list}>
				<Algorithms
					list={styles.list}
					heading={styles.heading}
					algorithm={algorithm}
					setAlgorithm={setAlgorithm}
					running={running}
				/>
				<Playback
					setSidebarOpen={setSidebarOpen}
					listContainer={styles.listContainer}
					list={styles.list}
					heading={styles.heading}
					algorithm={algorithm}
					runAlgorithm={runAlgorithm}
					newNumbers={newNumbers}
					resetNumbers={resetNumbers}
					running={running}
					setRunning={setRunning}
				/>
				<Settings
					listContainer={styles.listContainer}
					list={styles.list}
					heading={styles.heading}
					bold={styles.bold}
					speed={speed}
					setSpeed={setSpeed}
					barCount={barCount}
					setBarCount={setBarCount}
					minHeight={minHeight}
					setMinHeight={setMinHeight}
					maxHeight={maxHeight}
					setMaxHeight={setMaxHeight}
					running={running}
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
