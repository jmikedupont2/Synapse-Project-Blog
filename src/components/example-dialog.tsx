'use client'

import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useDialog } from "@/hooks/use-dialog"

export function ExampleDialog() {
  const { isOpen, open, close } = useDialog()

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogTrigger asChild>
        <Button onClick={open}>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is an example dialog. You can put any content here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Your dialog content goes here */}
        </div>
      </DialogContent>
    </Dialog>
  )
} 