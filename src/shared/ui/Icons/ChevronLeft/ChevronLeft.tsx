import { HTMLAttributes } from "react";
import { IconWrapper } from "@/shared/ui/IconWrapper";

export const ChevronLeft = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 15L7.5 10L12.5 5"
          stroke="#6A0BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconWrapper>
  );
};
