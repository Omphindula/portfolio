import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeButton() {
  return (
    <Button className="gap-2">
      <FileDown className="h-4 w-4" />
      Download Resume
    </Button>
  )
}
