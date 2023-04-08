import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 40 40"
      {...props}
    >
      <G data-name="Group 129">
        <G data-name="Group 62">
          <Rect
            data-name="Rectangle 1462"
            width={40}
            height={40}
            rx={20}
            transform="translate(-191 -607) translate(161 68) translate(30 539)"
            fill="#518379"
          />
        </G>
        <Path
          d="M50.219 154.5l-5.51-3.169a1.354 1.354 0 01-.538-.54 1.514 1.514 0 01-.188-.737v-6.314a1.514 1.514 0 01.187-.74 1.354 1.354 0 01.538-.54l5.535-3.218a1.632 1.632 0 011.553 0l5.535 3.218a1.354 1.354 0 01.538.54 1.514 1.514 0 01.188.737v6.314a1.467 1.467 0 01-.751 1.278l-5.585 3.171a1.534 1.534 0 01-1.5 0zM40 140.643v-1.892a2.623 2.623 0 01.827-1.941 2.726 2.726 0 011.978-.81h1.929v1.474h-1.929a1.272 1.272 0 00-.927.369 1.223 1.223 0 00-.376.909v1.892zm2.805 16.977a2.726 2.726 0 01-1.979-.811 2.623 2.623 0 01-.826-1.941v-1.892h1.5v1.892a1.223 1.223 0 00.376.909 1.272 1.272 0 00.927.369h1.929v1.474zm14.5-.1v-1.474h1.929a1.272 1.272 0 00.927-.369 1.223 1.223 0 00.376-.909v-1.892h1.5v1.892a2.623 2.623 0 01-.827 1.941 2.726 2.726 0 01-1.979.811zm3.231-16.878v-1.892a1.223 1.223 0 00-.376-.909 1.272 1.272 0 00-.927-.369h-1.926V136h1.929a2.726 2.726 0 011.979.811 2.623 2.623 0 01.827 1.941v1.892zm-14.276 2.629l-.751.442v.909l4.759 2.678v5.5l.751.442.751-.442v-5.5l4.784-2.678v-.909l-.776-.442-4.759 2.7z"
          transform="translate(-191 -607) translate(159.98 480.19)"
          fill="#f8f9fa"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
