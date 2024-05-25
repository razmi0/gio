type SizeType = "sm" | "md" | "lg" | "xl" | "full";
type ExtensionType = "sm" | "md" | "lg" | "xl" | "none";
type SectionProps = {
  size?: SizeType;
  extension?: ExtensionType;
  children?: React.ReactNode;
  className?: string;
};

const extensions: Record<ExtensionType, string> = {
  none: "",
  sm: "h-16",
  md: "h-32",
  lg: "h-48",
  xl: "h-64",
};

const sizes: Record<SizeType, string> = {
  sm: "min-h-sm",
  md: "min-h-md",
  lg: "min-h-lg",
  xl: "min-h-xl",
  full: "min-h-screen",
};

const Section = ({ children, extension = "none", size = "full", className = "" }: SectionProps) => {
  return <section className={`w-screen ${sizes[size]} ${extensions[extension]}${className}`}>{children}</section>;
};

export default Section;
