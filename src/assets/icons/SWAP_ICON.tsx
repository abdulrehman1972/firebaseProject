import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

function SWAP_ICON(props: SvgProps) {
  return (
    <Svg
      width={24.172}
      height={22.06}
      viewBox="0 0 24.172 22.06"
      {...props}
    >
      <G data-name="Group 13935" opacity={props.fill ? 1 : 0.5} fill="none" stroke={props.fill ?? "#e4b40e"}>
        <Path
          data-name="Path 31905"
          d="M.5 5.378a.569.569 0 01.2-.427L5.567.677A.74.74 0 016.054.5a.761.761 0 01.263.045.611.611 0 01.425.56v2.46h11.243v3.627H6.743v2.465a.609.609 0 01-.425.558.758.758 0 01-.75-.131L.7 5.806a.569.569 0 01-.2-.428z"
        />
        <Path
          data-name="Path 31907"
          d="M23.672 16.775a.558.558 0 01-.2.416l-4.77 4.191a.726.726 0 01-.477.174.746.746 0 01-.258-.044.6.6 0 01-.417-.549v-2.409H6.472v-3.557H17.55v-2.413a.6.6 0 01.422-.548.743.743 0 01.736.128l4.764 4.192a.558.558 0 01.2.419z"
        />
      </G>
    </Svg>
  )
}

export default SWAP_ICON;
