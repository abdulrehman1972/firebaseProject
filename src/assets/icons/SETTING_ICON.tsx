import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

function SETTING_ICON(props: SvgProps) {
  return (
    <Svg
      width={21.5}
      height={21.5}
      viewBox="0 0 21.5 21.5"
      {...props}
    >
      <G
        data-name="Icon feather-settings"
        opacity={props.fill ? 1 : 0.5}
        fill="none"
        stroke={props.fill ?? "#e4b40e"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path
          data-name="Path 4"
          d="M13.256 10.75a2.506 2.506 0 11-2.506-2.506 2.506 2.506 0 012.506 2.506z"
        />
        <Path
          data-name="Path 5"
          d="M17.477 13.477a1.5 1.5 0 00.3 1.655l.055.055a1.82 1.82 0 11-2.573 2.573l-.055-.055a1.512 1.512 0 00-2.564 1.073v.155a1.818 1.818 0 11-3.636 0v-.083a1.5 1.5 0 00-.982-1.373 1.5 1.5 0 00-1.655.3l-.055.055a1.82 1.82 0 11-2.573-2.573l.055-.055a1.512 1.512 0 00-1.073-2.564h-.153a1.818 1.818 0 010-3.636h.082a1.5 1.5 0 001.373-.982 1.5 1.5 0 00-.3-1.655l-.055-.055a1.819 1.819 0 112.573-2.571l.055.055a1.5 1.5 0 001.655.3h.073a1.5 1.5 0 00.909-1.373v-.155a1.818 1.818 0 013.636 0v.082a1.512 1.512 0 002.564 1.073l.055-.055a1.82 1.82 0 112.573 2.573l-.055.055a1.5 1.5 0 00-.3 1.655v.073a1.5 1.5 0 001.373.909h.155a1.818 1.818 0 110 3.636h-.084a1.5 1.5 0 00-1.373.909z"
        />
      </G>
    </Svg>
  )
}

export default SETTING_ICON;
