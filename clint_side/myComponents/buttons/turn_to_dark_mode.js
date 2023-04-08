import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={30.002}
			height={30.002}
			viewBox="0 0 30.002 30.002"
			{...props}
		>
			<Path
				d="M55 157.819a6.809 6.809 0 114.824-1.994A6.572 6.572 0 0155 157.819zm-13.978-5.8a.987.987 0 01-.729-.3 1 1 0 01-.294-.733.979.979 0 01.294-.727 1 1 0 01.729-.29h3.409a.987.987 0 01.729.3 1 1 0 01.294.733.979.979 0 01-.294.727 1 1 0 01-.729.29zm24.547 0a.987.987 0 01-.729-.3 1 1 0 01-.294-.733.979.979 0 01.294-.727 1 1 0 01.729-.29h3.409a.987.987 0 01.729.3 1 1 0 01.294.733.979.979 0 01-.294.727 1 1 0 01-.729.29zm-10.574-10.564a.979.979 0 01-.727-.294 1 1 0 01-.29-.729v-3.409a.987.987 0 01.3-.729 1 1 0 01.733-.294.979.979 0 01.727.294 1 1 0 01.29.729v3.409a.987.987 0 01-.3.729 1 1 0 01-.733.294zm0 24.547a.979.979 0 01-.727-.294 1 1 0 01-.29-.729v-3.409a.987.987 0 01.3-.729 1 1 0 01.733-.294.979.979 0 01.727.294 1 1 0 01.29.729v3.409a.987.987 0 01-.3.729 1 1 0 01-.733.292zm-8.176-21.752l-1.943-1.909a.962.962 0 01-.294-.737 1.1 1.1 0 01.291-.733 1.037 1.037 0 011.47 0l1.909 1.943a1.044 1.044 0 01.273.716.983.983 0 01-.273.7.917.917 0 01-.7.29 1.066 1.066 0 01-.733-.27zm16.841 16.876l-1.909-1.943a1.06 1.06 0 01-.273-.729.94.94 0 01.29-.7.927.927 0 01.7-.307.981.981 0 01.716.307l1.943 1.909a.962.962 0 01.294.737 1.1 1.1 0 01-.291.733 1.037 1.037 0 01-1.47 0zm-1.909-16.876a.989.989 0 010-1.432l1.909-1.943a.962.962 0 01.737-.294 1.1 1.1 0 01.733.291 1.037 1.037 0 010 1.47l-1.943 1.909a.94.94 0 01-.694.273 1.094 1.094 0 01-.742-.274zm-16.879 16.88a1.037 1.037 0 010-1.47l1.943-1.909a.963.963 0 01.713-.307.942.942 0 01.706.307.962.962 0 01.32.716.981.981 0 01-.307.716l-1.909 1.943a.962.962 0 01-.737.294 1.1 1.1 0 01-.729-.29z"
				transform="translate(-40 -136)"
				fill="#212529"
			/>
		</Svg>
	);
}

export default SvgComponent;
