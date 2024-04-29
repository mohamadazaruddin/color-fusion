import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function ThunderIcon(props: IconProps) {
  return (
    <Icon
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9063 5.31582H9.03388L12.5161 0.916016C12.5882 0.822852 12.5231 0.6875 12.4054 0.6875H5.66415C5.61493 0.6875 5.56747 0.713867 5.54286 0.757812L0.988368 8.62402C0.933876 8.71719 1.00067 8.83496 1.10966 8.83496H4.17528L2.6038 15.1209C2.5704 15.258 2.73563 15.3547 2.83759 15.2562L13.003 5.55664C13.0944 5.47051 13.0329 5.31582 12.9063 5.31582Z"
        fill="white"
      />
    </Icon>
  );
}
