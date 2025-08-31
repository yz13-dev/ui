"use client"

import { Check, ChevronRight } from "lucide-react"
import { CSSProperties, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export interface SwipeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onSwipeComplete?: () => void
  text?: string
  className?: string
  gap?: number
  validationDuration?: number
}

export function SwipeButton({
  onSwipeComplete,
  text = "Swipe to validate",
  className,
  gap = 3,
  validationDuration = 2000,
  ...props
}: SwipeButtonProps) {
  const [isSwiped, setIsSwiped] = useState(false)
  const [isValidated, setIsValidated] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLButtonElement>(null)
  const buttonRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isValidated) {
      const timer = setTimeout(() => {
        setIsValidated(false)
        setIsSwiped(false)
        setCurrentX(0)
        setIsDragging(false)
      }, validationDuration)
      return () => clearTimeout(timer)
    }
  }, [isValidated, validationDuration])

  const handleStart = (clientX: number) => {
    if (isValidated) return
    setStartX(clientX)
    setIsDragging(true)
  }

  const handleMove = (clientX: number) => {
    if (!buttonRef.current || !isDragging || isValidated) return

    const containerWidth = containerRef.current?.offsetWidth || 0
    const buttonWidth = buttonRef.current.offsetWidth
    const maxSwipe = containerWidth - buttonWidth - gap * 2

    let newX = clientX - startX
    newX = Math.max(0, Math.min(newX, maxSwipe))

    setCurrentX(newX)
    setIsSwiped(newX >= maxSwipe - 10)
  }

  const handleEnd = () => {
    if (isValidated) return

    if (isSwiped) {
      setIsValidated(true)
      setCurrentX(0)
      onSwipeComplete?.()
    } else {
      setCurrentX(0)
      setIsSwiped(false)
    }
    setIsDragging(false)
  }

  return (
    <button
      ref={containerRef}
      className={cn(
        "relative h-10 w-[250px] overflow-hidden rounded-lg",
        "border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
        "transition-colors duration-200",
        className
      )}
      onTouchStart={(e) => handleStart(e.touches[0]?.clientX ?? 0)}
      onTouchMove={(e) => handleMove(e.touches[0]?.clientX ?? 0)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      aria-label={isValidated ? "Validated" : "Swipe to validate"}
      disabled={isValidated}
      {...props}
    >
      <span
        ref={buttonRef}
        className={cn(
          "absolute rounded-md",
          "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
          "flex items-center justify-center",
          "cursor-grab active:cursor-grabbing",
          "shadow-sm transition-all duration-300",
          "hover:bg-neutral-800 dark:hover:bg-neutral-100",
          "focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:outline-none dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-neutral-900",
          "disabled:pointer-events-none",
          isValidated &&
          "w-[calc(100%-6px)] cursor-default bg-emerald-500 opacity-100 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-500"
        )}
        style={{
          width: isValidated ? `calc(100% - ${gap * 2}px)` : "36px",
          height: `calc(100% - ${gap * 2}px)`,
          left: isValidated ? `${gap}px` : `${gap}px`,
          top: `${gap}px`,
          transform: isValidated ? "none" : `translateX(${currentX}px)`,
          transition: isDragging ? "none" : "all 0.3s ease",
        }}
      >
        {isValidated ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        )}
      </span>
      <div className="flex h-full w-full items-center justify-center">
        <span
          style={{ "--swipe-button-text-width": "130px" } as CSSProperties}
          className={cn(
            "pointer-events-none mx-auto max-w-md text-sm text-neutral-600/70 dark:text-neutral-400/70",
            "animate-swipe-button-text [background-size:var(--swipe-button-text-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat select-none [transition:background-position_1s_cubic-bezier(.4,0,.2,1)_infinite]",
            "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80"
          )}
        >
          {text}
        </span>
      </div>
    </button>
  )
}
