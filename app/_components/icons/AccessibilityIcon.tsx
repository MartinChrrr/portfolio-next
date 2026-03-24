import { ComponentPropsWithoutRef } from "react"

export const AccessibilityIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    const size = props.size ?? 12;
    return (
    <svg      width={size} 
    height={size} 
    fill="currentColor"  viewBox="0 0 16 16" {...props}>
    <circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/>

    </svg>

    )
}