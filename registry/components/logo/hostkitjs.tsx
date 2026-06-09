type IconProps = React.SVGProps<SVGSVGElement>

function HostkitIcon({ width = "100%", height = "100%", viewBox = "0 0 40 40", fill = "none", xmlns = "http://www.w3.org/2000/svg", ...props }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns={xmlns}
      {...props}
    >
      <path d="M8 32H16V40H8V32Z" fill="var(--foreground)" />
      <path d="M24 0H32V8H24V0Z" fill="var(--foreground)" />
      <path d="M0 8H8V32H0V8Z" fill="var(--foreground)" />
      <path d="M32 8H40V32H32V8Z" fill="var(--foreground)" />
    </svg>
  )
}

function HostkitWithTextIcon({ width = "100%", height = "100%", viewBox = "0 0 338 64", fill = "none", xmlns = "http://www.w3.org/2000/svg", ...props }: IconProps) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns={xmlns} {...props}>
      <path d="M12.8 51.2H25.6V64H12.8V51.2Z" fill="var(--foreground)" />
      <path d="M38.4 0H51.2V12.8H38.4V0Z" fill="var(--foreground)" />
      <path d="M0 12.8H12.8V51.2H0V12.8Z" fill="var(--foreground)" />
      <path d="M51.2 12.8H64V51.2H51.2V12.8Z" fill="var(--foreground)" />
      <path d="M98.75 25.6H124.25V38.4H98.75V25.6Z" fill="var(--foreground)" />
      <path d="M86 38.4H98.75V64H86V38.4Z" fill="var(--foreground)" />
      <path d="M86 0H98.75V25.6H86V0Z" fill="var(--foreground)" />
      <path d="M124.25 0H137V25.6H124.25V0Z" fill="var(--foreground)" />
      <path d="M124.25 38.4H137V64H124.25V38.4Z" fill="var(--foreground)" />
      <path d="M165.75 0H191.25V12.8H165.75V0Z" fill="var(--foreground)" />
      <path d="M165.75 51.2H191.25V64H165.75V51.2Z" fill="var(--foreground)" />
      <path d="M153 12.8H165.75V51.2H153V12.8Z" fill="var(--foreground)" />
      <path d="M191.25 12.8H204V51.2H191.25V12.8Z" fill="var(--foreground)" />
      <path d="M258.25 38.4H271V51.2H258.25V38.4Z" fill="var(--foreground)" />
      <path d="M258.25 12.8H271V25.6H258.25V12.8Z" fill="var(--foreground)" />
      <path d="M232.75 0H258.25V12.8H232.75V0Z" fill="var(--foreground)" />
      <path d="M232.75 51.2H258.25V64H232.75V51.2Z" fill="var(--foreground)" />
      <path d="M220 12.8H232.75V51.2H220V12.8Z" fill="var(--foreground)" />
      <path d="M306.125 12.8H318.875V64H306.125V12.8Z" fill="var(--foreground)" />
      <path d="M287 0H338V12.8H287V0Z" fill="var(--foreground)" />
    </svg>
  )
}

export { HostkitIcon, HostkitWithTextIcon }
export type { IconProps }

