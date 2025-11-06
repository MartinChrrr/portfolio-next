export type SpacingProps = {
    size?: "sm" | "md" | "lg";
}

export const Spacing = ({size = "md"}: SpacingProps) => {
    return <div className={
    size === "sm" ? "h-8 lg:h-16" :
    size === "md" ? "h-16 lg:h-24" :
    "h-24 lg:h-32"
  }></div>
}