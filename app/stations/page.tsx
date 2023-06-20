import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function IndexPage() {
  return (
    <section>
      <div className="flex h-screen items-center justify-center px-8 md:px-0">
        <Card className={cn("w-full md:w-5/12 p-6")}>
          <CardContent className="grid gap-4">tes</CardContent>
        </Card>
      </div>
    </section>
  )
}
