import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ArrowRight, ThumbsUp, MessageSquare, Calendar } from "lucide-react"

export default function BlogsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Blogs & Notes</h1>
          <p className="text-muted-foreground">Write and share technical blogs with markdown support</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search blogs..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button className="sm:w-auto">Write Blog</Button>
        </div>

        {/* Featured Blog */}
        <Card className="w-full overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-muted h-48 md:h-auto">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-muted flex items-center justify-center">
                <div className="text-center p-6">
                  <Badge className="mb-2">Featured</Badge>
                  <h3 className="text-xl font-semibold">Modern Web Development</h3>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> March 15, 2023
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl mb-2">The Complete Guide to Modern Web Development in 2023</CardTitle>
              <CardDescription className="line-clamp-2 mb-4">
                A comprehensive overview of the latest technologies, frameworks, and best practices for building modern
                web applications in 2023.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  245 likes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  42 comments
                </div>
              </div>
              <Button className="mt-4" asChild>
                <Link href="/blogs/modern-web-development">Read Article</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog List */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Blog Card 1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Michael Chen</span>
              </div>
              <CardTitle className="line-clamp-1">Understanding React Server Components</CardTitle>
              <CardDescription className="line-clamp-2">
                A deep dive into React Server Components and how they change the way we build web applications
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Server Components</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  128
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  24
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/react-server-components">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card 2 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Sarah Johnson</span>
              </div>
              <CardTitle className="line-clamp-1">Optimizing Database Performance</CardTitle>
              <CardDescription className="line-clamp-2">
                Learn how to optimize your database queries and improve overall application performance
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Database</Badge>
                <Badge variant="outline">Performance</Badge>
                <Badge variant="outline">SQL</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  95
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  18
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/optimizing-database-performance">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card 3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">David Park</span>
              </div>
              <CardTitle className="line-clamp-1">Introduction to Microservices Architecture</CardTitle>
              <CardDescription className="line-clamp-2">
                A beginner's guide to understanding microservices architecture and its benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Microservices</Badge>
                <Badge variant="outline">Architecture</Badge>
                <Badge variant="outline">Backend</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  76
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  12
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/microservices-architecture">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card 4 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Emily Wilson</span>
              </div>
              <CardTitle className="line-clamp-1">Getting Started with TypeScript</CardTitle>
              <CardDescription className="line-clamp-2">
                A practical guide to TypeScript for JavaScript developers
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Frontend</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  112
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  31
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/getting-started-with-typescript">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card 5 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Ryan Garcia</span>
              </div>
              <CardTitle className="line-clamp-1">Building Scalable APIs with GraphQL</CardTitle>
              <CardDescription className="line-clamp-2">
                Learn how to design and implement scalable APIs using GraphQL
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">GraphQL</Badge>
                <Badge variant="outline">API</Badge>
                <Badge variant="outline">Backend</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  89
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  15
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/graphql-apis">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Blog Card 6 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Alex Kim</span>
              </div>
              <CardTitle className="line-clamp-1">CI/CD Best Practices for Modern Teams</CardTitle>
              <CardDescription className="line-clamp-2">
                A comprehensive guide to implementing effective CI/CD pipelines for your development team
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">CI/CD</Badge>
                <Badge variant="outline">DevOps</Badge>
                <Badge variant="outline">Automation</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  67
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />9
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/blogs/cicd-best-practices">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ArrowRight className="h-4 w-4 rotate-180" />
            </Button>
            <Button variant="outline" size="sm" className="w-8">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-8">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-8">
              3
            </Button>
            <Button variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

