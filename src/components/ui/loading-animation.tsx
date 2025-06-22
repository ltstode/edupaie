
import * as React from "react"
import { cn } from "@/lib/utils"

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

const LoadingAnimation = React.forwardRef<HTMLDivElement, LoadingAnimationProps>(
  ({ size = "md", className }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-8 h-8", 
      lg: "w-12 h-12"
    }

    return (
      <>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .loading-spinner {
              border: 2px solid #f3f3f3;
              border-top: 2px solid #3498db;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
          `}
        </style>
        <div
          ref={ref}
          className={cn("loading-spinner", sizeClasses[size], className)}
          role="status"
          aria-label="Loading"
        />
      </>
    )
  }
)
LoadingAnimation.displayName = "LoadingAnimation"

export { LoadingAnimation }
