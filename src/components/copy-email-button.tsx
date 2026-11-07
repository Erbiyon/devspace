"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

interface CopyEmailButtonProps {
  email: string
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      toast.success("Email copied to clipboard!", {
        description: email,
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Failed to copy email")
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={copyToClipboard}
      className="group relative inline-flex items-center gap-2 rounded-full border-border/40 bg-background/50 px-3.5 py-1.5 text-xs font-mono font-medium text-foreground/80 backdrop-blur transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:scale-110" />
      )}
      <span>{email}</span>
    </Button>
  )
}

