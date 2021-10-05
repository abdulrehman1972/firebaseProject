import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function DeleteButton(props: SvgProps) {
  return (
    <Svg
      width={34.791}
      height={26}
      viewBox="0 0 34.791 26"
      {...props}
    >
      <Path
        data-name="Combined Shape"
        d="M34.789 26H8.368L0 13 8.368 0h26.423v26zM1.857 13L9.24 24.47h23.976V1.53H9.24zm18.759 1.081l-5.743 5.578-1.114-1.082L19.5 13l-5.741-5.576 1.114-1.082 5.743 5.578 5.743-5.578 1.114 1.082L21.729 13l5.744 5.576-1.114 1.082z"
        fill="#e4b40e"
      />
    </Svg>
  )
}

export default DeleteButton;
