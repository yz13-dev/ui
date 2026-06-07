import { cn } from "@yz13/ui/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type IconProps = ComponentPropsWithoutRef<"svg">;

function YZ13Icon({ width = "40", height = "40", className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      width={width} height={height} viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.01316 4H0V36H4.01316L4.01307 40H8.02632V36H4.01316V4H8.02632V0H4.01316V4Z" fill="var(--foreground)" />
      <path d="M28.2526 27.8571V39.9998H32.7474V27.8571H28.2526Z" fill="var(--foreground)" />
      <path d="M41.7368 21.4286V25H45.4825V21.4287L41.7368 21.4286Z" fill="var(--foreground)" />
      <path d="M45.4825 25V28.5714H49.2281V25H45.4825Z" fill="var(--foreground)" />
      <path d="M19.2632 21.4287L15.5175 21.4286V25H19.2632V21.4287Z" fill="var(--foreground)" />
      <path d="M15.5175 25H11.7719V28.5714H15.5175V25Z" fill="var(--foreground)" />
      <path d="M17.7649 5V8.57143H21.5105V5H17.7649Z" fill="var(--foreground)" />
      <path d="M14.0193 5H17.7649V1.42857H14.0193V5Z" fill="var(--foreground)" />
      <path d="M43.2351 5H39.4895V8.57143H43.2351V5Z" fill="var(--foreground)" />
      <path d="M43.2351 1.42857V5H46.9807V1.42857H43.2351Z" fill="var(--foreground)" />
      <path d="M37.9912 26.4286V30H41.7368V26.4286H37.9912Z" fill="var(--foreground)" />
      <path d="M23.0088 26.4286H19.2632V30H23.0088V26.4286Z" fill="var(--foreground)" />
      <path d="M28.2526 3.57143V8.57143H25.2561V12.1429H15.5175V15.7143H19.2632V19.2857L23.0088 19.2857V26.4286H26.7544V22.8571H34.2456V26.4286H37.9912V19.2857H41.7368L41.7368 15.7143H45.4824L45.4824 12.1429H35.7438L35.7436 8.57143H32.752C32.752 7.26914 32.7474 3.57143 32.7474 3.57143H28.2526Z" fill="var(--foreground)" />
      <path d="M56.9868 4H61V36H56.9868L56.9869 40H52.9737V36H56.9868V4H52.9737V0H56.9868V4Z" fill="var(--foreground)" />
    </svg>
  )
}

function YZ13WithTextIcon({ className, ...props }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      className={cn("[&>*]:foreground", className)}
      viewBox="0 0 239 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 5H0V45H5L4.99989 50H10V45H5V5H10V0H5V5Z" fill="var(--foreground)" />
      <path d="M35.2 34.8214V49.9998H40.8V34.8214H35.2Z" fill="var(--foreground)" />
      <path d="M52 26.7857V31.25H56.6667V26.7858L52 26.7857Z" fill="var(--foreground)" />
      <path d="M56.6667 31.25V35.7143H61.3333V31.25H56.6667Z" fill="var(--foreground)" />
      <path d="M24 26.7858L19.3333 26.7857V31.25H24V26.7858Z" fill="var(--foreground)" />
      <path d="M19.3333 31.25H14.6667V35.7143H19.3333V31.25Z" fill="var(--foreground)" />
      <path d="M22.1333 6.25V10.7143H26.8V6.25H22.1333Z" fill="var(--foreground)" />
      <path d="M17.4667 6.25H22.1333V1.78571H17.4667V6.25Z" fill="var(--foreground)" />
      <path d="M53.8667 6.25H49.2V10.7143H53.8667V6.25Z" fill="var(--foreground)" />
      <path d="M53.8667 1.78571V6.25H58.5333V1.78571H53.8667Z" fill="var(--foreground)" />
      <path d="M47.3333 33.0357V37.5H52V33.0357H47.3333Z" fill="var(--foreground)" />
      <path d="M28.6667 33.0357H24V37.5H28.6667V33.0357Z" fill="var(--foreground)" />
      <path d="M35.2 4.46429V10.7143H31.4667V15.1786H19.3333V19.6429H24V24.1071L28.6667 24.1071V33.0357H33.3333V28.5714H42.6667V33.0357H47.3333V24.1071H52L52 19.6429H56.6666L56.6666 15.1786H44.5332L44.533 10.7143H40.8058C40.8058 9.08642 40.8 4.46429 40.8 4.46429H35.2Z" fill="var(--foreground)" />
      <path d="M71 5H76V45H71L71.0001 50H66V45H71V5H66V0H71V5Z" fill="var(--foreground)" />
      <path d="M92 16.5V29H96H100V33V37H108.5H117V45.5V54H108.5H100V58V62H108.5H117V58V54H121H125V29V4H121H117V16.5V29H108.5H100V16.5V4H96H92V16.5Z" fill="var(--foreground)" />
      <path d="M144 21V29H135V46H169V37H144V29H160V21H144Z" fill="var(--foreground)" />
      <path d="M160 21L169 21V4L135 4L135 13L160 13V21Z" fill="var(--foreground)" />
      <path d="M188 12H179V16L179 20H188V45H196V4H188V12Z" fill="var(--foreground)" />
      <path d="M206 4V12H231V20H214V29H231V37H206V45H231V37H239V29H231V24.5V20H239V12H231V4H206Z" fill="var(--foreground)" />
    </svg>
  )
}

export { YZ13Icon, YZ13WithTextIcon };
export type { IconProps };

