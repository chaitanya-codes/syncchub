import { useEffect, useState } from "react";
import "./styles/styles.css";
import Box from "./Box";

function App() {
	const totalBoxes = 6 * 15;
	const [highlighted, setHighlighted] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const random = new Set();
			while (random.size < 5) {
				random.add(Math.floor(Math.random() * totalBoxes));
			}
			setHighlighted([...random]);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const boxes = Array.from({ length: 15 });
	const rows = Array.from({ length: 6 });

	return (
		<div>
			<div className="boxes">
				{rows.map((_, r) => (
					<div className="row" key={r}>
						{boxes.map((_, c) => {
							const boxIndex = r * 15 + c;
							if (boxIndex % 19 === 0) return (
								<>
									<Box key={boxIndex} highlighted={highlighted.includes(boxIndex)} />
									<span className="line"></span>
								</>
							); else return (
								<Box key={boxIndex} highlighted={highlighted.includes(boxIndex)} />
							);
						})}
					</div>
				))}

			</div>
			<nav className="navbar">
				<ul>
					<li>Home</li>
					<li>XYZ</li>
					<li>ABC</li>
					<li>DEF</li>
				</ul>
			</nav>
			<div className="download">
				<span className="capsule">New</span>
				Demo version is  available to download
			</div>
			<div className="heading">
				<h1 className="h">A design test for</h1>
				<h1 className="h synchubb">SyncHubb</h1>
			</div>
		</div>
	);
}

export default App;
