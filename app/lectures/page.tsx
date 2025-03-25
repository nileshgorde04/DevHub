import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, ArrowRight, Play, Clock, Calendar } from "lucide-react"

export default function LecturesPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Video Lectures</h1>
          <p className="text-muted-foreground">Upload and watch categorized technical lectures</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search lectures..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button className="sm:w-auto">Upload Lecture</Button>
        </div>

        {/* Tabs for categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {/* Featured Lecture */}
            <Card className="w-full overflow-hidden mb-6">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <Badge className="mb-2">Featured</Badge>
                  <CardTitle className="text-2xl mb-2">Complete Web Development Bootcamp</CardTitle>
                  <CardDescription className="mb-4">
                    A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more.
                  </CardDescription>
                  <div className="flex items-center gap-2 mb-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">Senior Developer</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      12 hours
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      March 15, 2023
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/lectures/web-development-bootcamp">Watch Now</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Lecture Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Lecture Card 1 */}
              <Card>
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Advanced React Patterns</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Learn advanced React patterns and techniques for building scalable applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Michael Chen</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      2.5 hours
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Jan 10, 2023
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                    <Link href="/lectures/advanced-react-patterns">
                      Watch <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Lecture Card 2 */}
              <Card>
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Database Design Fundamentals</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Master the principles of database design and normalization
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">Sarah Johnson</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">Database</Badge>
                    <Badge variant="outline">SQL</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />3 hours
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Feb 15, 2023
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                    <Link href="/lectures/database-design">
                      Watch <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Lecture Card 3 */}
              <Card>
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-10 w-10">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Docker and Containerization</CardTitle>
                  <CardDescription className="line-clamp-2">
                    Learn how to use Docker to containerize your applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">David Park</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">DevOps</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />2 hours
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Mar 5, 2023
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                    <Link href="/lectures/docker-containerization">
                      Watch <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="frontend" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* Frontend lectures would go here */}</div>
          </TabsContent>

          <TabsContent value="backend" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* Backend lectures would go here */}</div>
          </TabsContent>

          <TabsContent value="devops" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* DevOps lectures would go here */}</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

