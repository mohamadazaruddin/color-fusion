import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

export default function EmailIcon(props: IconProps) {
  return (
    <Icon
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1.5C15 0.675 14.325 0 13.5 0H1.5C0.675 0 0 0.675 0 1.5V10.5C0 11.325 0.675 12 1.5 12H13.5C14.325 12 15 11.325 15 10.5V1.5ZM13.5 1.5L7.5 5.25L1.5 1.5H13.5ZM13.5 10.5H1.5V3L7.5 6.75L13.5 3V10.5Z"
        fill="#051020"
      />
    </Icon>
  );
}
