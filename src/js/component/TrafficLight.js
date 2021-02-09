import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("yellow");

	return (
		<div id="trafficTop">
			<div className="stickArea">
				<div className="vl"></div>
			</div>
			<div className="container">
				<div
					className={"red light " + (color == "red" ? "active" : "")}
					onClick={() => {
						setColor("red");
					}}
				/>
				<div
					className={
						"yellow light " + (color == "yellow" ? "active" : "")
					}
					onClick={() => {
						setColor("yellow");
					}}
				/>
				<div
					className={
						"green light " + (color == "green" ? "active" : "")
					}
					onClick={() => {
						setColor("green");
					}}
				/>
			</div>
		</div>
	);
};
