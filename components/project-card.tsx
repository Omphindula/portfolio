import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
