'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  thumbClassName?: string
}

function Switch({ className, thumbClassName, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input disabled:cursor-not-allowed disabled:opacity-50 dark:data-[state=unchecked]:bg-input/80 [--switch-thumb-size:1rem] [--switch-translate-x:calc(100%-2px)] [--switch-translate-x-unchecked:0]',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-(--switch-thumb-size) rounded-full bg-background transition-transform data-[state=checked]:translate-x-(--switch-translate-x) data-[state=unchecked]:translate-x-(--switch-translate-x-unchecked) dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground',
          thumbClassName,
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
