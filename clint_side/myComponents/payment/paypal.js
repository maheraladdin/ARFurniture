import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={15.687}
			height={19.314}
			viewBox="0 0 15.687 19.314"
			{...props}
		>
			<Path
				data-name="Path 230"
				d="M-858.081-237.968a.557.557 0 00-.55.47l-.914 5.794-.84 5.324.84-5.324a.556.556 0 01.55-.47h2.677a5.468 5.468 0 005.4-4.629 4.447 4.447 0 00.053-.6 5.076 5.076 0 00-2.37-.564z"
				transform="translate(898.192 276.071) translate(-33.973 -34.24)"
				fill="#001c64"
			/>
			<Path
				data-name="Path 231"
				d="M-855.579-232.4a4.4 4.4 0 01-.053.6 5.468 5.468 0 01-5.4 4.629h-2.677a.556.556 0 00-.55.47l-.84 5.324-.527 3.34a.452.452 0 00.1.364.453.453 0 00.344.158h2.906a.557.557 0 00.55-.47l.765-4.854a.557.557 0 01.55-.47h1.711a5.467 5.467 0 005.4-4.629 4.243 4.243 0 00-2.282-4.464z"
				transform="translate(898.192 276.071) translate(-29.262 -39.242)"
				fill="#0070e0"
			/>
			<Path
				data-name="Path 232"
				d="M-895.356-276.071a.557.557 0 00-.55.47l-2.28 14.458a.453.453 0 00.1.364.453.453 0 00.344.158h3.381l.84-5.324.914-5.794a.557.557 0 01.55-.47h4.844a5.084 5.084 0 012.37.564 4.463 4.463 0 00-4.705-4.427z"
				fill="#003087"
				transform="translate(898.192 276.071)"
			/>
		</Svg>
	);
}

export default SvgComponent;