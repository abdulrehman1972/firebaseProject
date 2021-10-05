import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={24.172} height={22.06} viewBox='0 0 14 14' {...props}>
      <G
        data-name='Group 14324'
        fill={props.fill ?? "#e4b40e"}
        opacity={props.fill ? 1 : 0.5}
      >
        <Path data-name='Rectangle 5529' d='M0 0h6v6H0z' />
        <Path data-name='Rectangle 5530' d='M8 0h6v6H8z' />
        <Path data-name='Rectangle 5531' d='M8 8h6v6H8z' />
        <Path data-name='Rectangle 5532' d='M0 8h6v6H0z' />
      </G>
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
