"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Wraps Radix's Avatar.Root with default avatar styling and a data-slot attribute.
 *
 * @param className - Additional CSS classes appended to the default avatar classes
 * @param props - Additional props forwarded to AvatarPrimitive.Root
 * @returns The AvatarPrimitive.Root element with predefined styling and `data-slot="avatar"`
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Wraps the Radix Avatar Image primitive, enforcing a square aspect ratio and default sizing.
 *
 * @param className - Additional CSS class names to merge with the component's default classes
 * @returns A Radix Avatar Image element with combined class names and `data-slot="avatar-image"`
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled avatar fallback slot shown when the avatar image is unavailable.
 *
 * The component forwards all props to Radix's `AvatarPrimitive.Fallback`, applies
 * base fallback styling and a `data-slot="avatar-fallback"` attribute, and merges
 * any provided `className`.
 *
 * @returns The rendered avatar fallback element.
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }