import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ArrowRight, MessageSquare, ThumbsUp, Eye } from "lucide-react"

export default function DiscussionsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Discussions</h1>
          <p className="text-muted-foreground">Ask questions and participate in technical discussions</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search discussions..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button className="sm:w-auto">Ask Question</Button>
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {/* Discussion Card 1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Michael Chen</span>
                  <span className="text-xs text-muted-foreground">asked 2 days ago</span>
                </div>
                <Badge>Hot</Badge>
              </div>
              <CardTitle className="text-lg mt-2">
                <Link href="/discussions/api-design" className="hover:underline">
                  Best Practices for API Design
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                I'm designing a RESTful API for a new project and I'm wondering what are the current best practices for
                API design, especially regarding versioning, authentication, and error handling.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">API</Badge>
                <Badge variant="outline">REST</Badge>
                <Badge variant="outline">Backend</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  128 votes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  32 replies
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  456 views
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/discussions/api-design">
                  View <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Discussion Card 2 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Sarah Johnson</span>
                  <span className="text-xs text-muted-foreground">asked 5 days ago</span>
                </div>
              </div>
              <CardTitle className="text-lg mt-2">
                <Link href="/discussions/react-state-management" className="hover:underline">
                  React State Management in 2023: Redux vs. Context API vs. Zustand
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                With so many state management options available for React applications, I'm trying to decide which one
                to use for a new project. What are the pros and cons of Redux, Context API, and newer libraries like
                Zustand?
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">State Management</Badge>
                <Badge variant="outline">Frontend</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  95 votes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  28 replies
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  380 views
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/discussions/react-state-management">
                  View <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Discussion Card 3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">David Park</span>
                  <span className="text-xs text-muted-foreground">asked 1 week ago</span>
                </div>
                <Badge variant="outline">Solved</Badge>
              </div>
              <CardTitle className="text-lg mt-2">
                <Link href="/discussions/typescript-generics" className="hover:underline">
                  Understanding TypeScript Generics and Advanced Types
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                I'm struggling to understand how to effectively use TypeScript generics and advanced types like
                conditional types and mapped types. Can someone provide examples and explain when to use each?
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Generics</Badge>
                <Badge variant="outline">Types</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  76 votes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  15 replies
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  290 views
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/discussions/typescript-generics">
                  View <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Discussion Card 4 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Emily Wilson</span>
                  <span className="text-xs text-muted-foreground">asked 2 weeks ago</span>
                </div>
              </div>
              <CardTitle className="text-lg mt-2">
                <Link href="/discussions/microservices-vs-monolith" className="hover:underline">
                  Microservices vs. Monolith: When to Choose Which?
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                I'm starting a new project and trying to decide between a microservices architecture and a monolithic
                approach. What factors should I consider when making this decision?
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Architecture</Badge>
                <Badge variant="outline">Microservices</Badge>
                <Badge variant="outline">Monolith</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  112 votes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  42 replies
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  520 views
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/discussions/microservices-vs-monolith">
                  View <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Discussion Card 5 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>RG</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Ryan Garcia</span>
                  <span className="text-xs text-muted-foreground">asked 3 weeks ago</span>
                </div>
                <Badge variant="outline">Solved</Badge>
              </div>
              <CardTitle className="text-lg mt-2">
                <Link href="/discussions/docker-compose" className="hover:underline">
                  Docker Compose for Local Development Environment
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                I'm trying to set up a local development environment using Docker Compose for a full-stack application
                with a React frontend, Node.js backend, and PostgreSQL database. What's the best way to structure this?
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">DevOps</Badge>
                <Badge variant="outline">Development</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  89 votes
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1" />
                  23 replies
                </div>
                <div className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  345 views
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild className="gap-1">
                <Link href="/discussions/docker-compose">
                  View <ArrowRight className="h-4 w-4" />
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

