import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  date: string
  bullets: string[]
}

export default function ExperienceCard({
  title,
  company,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-base">{company}</CardDescription>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
