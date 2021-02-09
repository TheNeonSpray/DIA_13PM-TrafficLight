import React from "react";
import { TrafficLight } from "./TrafficLight.js";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<TrafficLight />
		</div>
	);
}
