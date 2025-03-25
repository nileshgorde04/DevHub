import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowRight } from "lucide-react"

export default function DSAPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">DSA Solutions</h1>
          <p className="text-muted-foreground">Explore and share data structure and algorithm solutions</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search problems..." className="w-full pl-8" />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button className="sm:w-auto">Submit Solution</Button>
        </div>

        {/* Tabs for categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="arrays">Arrays</TabsTrigger>
            <TabsTrigger value="strings">Strings</TabsTrigger>
            <TabsTrigger value="graphs">Graphs</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Problem Card 1 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Two Sum</CardTitle>
                      <CardDescription>Find indices of two numbers that add up to target</CardDescription>
                    </div>
                    <Badge>Easy</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Arrays</Badge>
                    <Badge variant="outline">Hash Table</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">12 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/two-sum">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Problem Card 2 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Merge Intervals</CardTitle>
                      <CardDescription>Merge overlapping intervals into a single interval</CardDescription>
                    </div>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Arrays</Badge>
                    <Badge variant="outline">Sorting</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">8 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/merge-intervals">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Problem Card 3 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">LRU Cache</CardTitle>
                      <CardDescription>Design and implement a Least Recently Used cache</CardDescription>
                    </div>
                    <Badge className="bg-red-500 hover:bg-red-600">Hard</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Hash Table</Badge>
                    <Badge variant="outline">Linked List</Badge>
                    <Badge variant="outline">Design</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">5 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/lru-cache">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Problem Card 4 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Valid Parentheses</CardTitle>
                      <CardDescription>Determine if string has valid parentheses ordering</CardDescription>
                    </div>
                    <Badge>Easy</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Stack</Badge>
                    <Badge variant="outline">String</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">15 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/valid-parentheses">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Problem Card 5 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Longest Substring</CardTitle>
                      <CardDescription>Find longest substring without repeating characters</CardDescription>
                    </div>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">String</Badge>
                    <Badge variant="outline">Sliding Window</Badge>
                    <Badge variant="outline">Hash Table</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">10 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/longest-substring">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Problem Card 6 */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">Binary Tree Traversal</CardTitle>
                      <CardDescription>Implement different binary tree traversal methods</CardDescription>
                    </div>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Tree</Badge>
                    <Badge variant="outline">DFS</Badge>
                    <Badge variant="outline">BFS</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">7 solutions</div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/dsa/binary-tree-traversal">
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="arrays" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* Array problems would go here */}</div>
          </TabsContent>

          <TabsContent value="strings" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* String problems would go here */}</div>
          </TabsContent>

          <TabsContent value="graphs" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{/* Graph problems would go here */}</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

