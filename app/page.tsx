import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, Video, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Learn, Share, and Grow Together
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A platform for developers to share DSA solutions, write blogs, upload lectures, and engage in
                  discussions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/dsa">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 w-full max-w-[500px] aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-muted flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Developer-Friendly Platform</h3>
                <p className="text-muted-foreground mt-2">Clean UI with dark mode support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to learn, share knowledge, and connect with other developers
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <Code className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>DSA Solutions</CardTitle>
                <CardDescription>Share and explore data structure and algorithm solutions</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-1">
                  <Link href="/dsa">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Blogs & Notes</CardTitle>
                <CardDescription>Write and share technical blogs with markdown support</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-1">
                  <Link href="/blogs">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <Video className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Video Lectures</CardTitle>
                <CardDescription>Upload and watch categorized technical lectures</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-1">
                  <Link href="/lectures">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <MessageSquare className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Discussions</CardTitle>
                <CardDescription>Ask questions and participate in technical discussions</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-1">
                  <Link href="/discussions">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Content</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Trending posts and most-upvoted solutions from our community
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Featured DSA Solution */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">DSA</Badge>
                  <Badge variant="secondary">Hard</Badge>
                </div>
                <CardTitle className="line-clamp-1">Efficient Graph Traversal Algorithm</CardTitle>
                <CardDescription className="line-clamp-2">
                  A detailed explanation of an optimized approach to traverse complex graph structures
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>Sarah Johnson</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                  <Link href="/dsa/graph-traversal">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Featured Blog */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Blog</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
                <CardTitle className="line-clamp-1">Understanding React Server Components</CardTitle>
                <CardDescription className="line-clamp-2">
                  A deep dive into React Server Components and how they change the way we build web applications
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg?height=24&width=24" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>Michael Chen</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                  <Link href="/blogs/react-server-components">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Featured Discussion */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Discussion</Badge>
                  <Badge variant="secondary">Hot</Badge>
                </div>
                <CardTitle className="line-clamp-1">Best Practices for API Design</CardTitle>
                <CardDescription className="line-clamp-2">
                  Community discussion on RESTful API design patterns and best practices
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">32 replies • 128 upvotes</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="gap-1 ml-auto">
                  <Link href="/discussions/api-design">
                    Join discussion <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with thousands of developers, share your knowledge, and accelerate your learning
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

