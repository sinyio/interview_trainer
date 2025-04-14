import { IconWrapper } from "@/shared/ui/IconWrapper/ui/IconWrapper";
import { HTMLAttributes } from "react";

export const TrendUp = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
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
          d="M18.7503 4.375V9.375C18.7503 9.54076 18.6845 9.69973 18.5673 9.81694C18.4501 9.93415 18.2911 10 18.1253 10C17.9596 10 17.8006 9.93415 17.6834 9.81694C17.5662 9.69973 17.5003 9.54076 17.5003 9.375V5.88359L11.0675 12.3172C11.0095 12.3753 10.9406 12.4214 10.8647 12.4529C10.7888 12.4843 10.7075 12.5005 10.6253 12.5005C10.5432 12.5005 10.4619 12.4843 10.386 12.4529C10.3101 12.4214 10.2412 12.3753 10.1832 12.3172L7.50035 9.63359L2.31753 14.8172C2.20026 14.9345 2.0412 15.0003 1.87535 15.0003C1.7095 15.0003 1.55044 14.9345 1.43316 14.8172C1.31588 14.6999 1.25 14.5409 1.25 14.375C1.25 14.2091 1.31588 14.0501 1.43316 13.9328L7.05816 8.30781C7.1162 8.2497 7.18514 8.2036 7.26101 8.17215C7.33688 8.1407 7.41821 8.12451 7.50035 8.12451C7.58248 8.12451 7.66381 8.1407 7.73968 8.17215C7.81556 8.2036 7.88449 8.2497 7.94253 8.30781L10.6253 10.9914L16.6168 5H13.1253C12.9596 5 12.8006 4.93415 12.6834 4.81694C12.5662 4.69973 12.5003 4.54076 12.5003 4.375C12.5003 4.20924 12.5662 4.05027 12.6834 3.93306C12.8006 3.81585 12.9596 3.75 13.1253 3.75H18.1253C18.2911 3.75 18.4501 3.81585 18.5673 3.93306C18.6845 4.05027 18.7503 4.20924 18.7503 4.375Z"
          fill="#6A0BFF"
        />
      </svg>
    </IconWrapper>
  );
};
