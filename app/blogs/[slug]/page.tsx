import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp, MessageSquare, Share, Bookmark, ArrowLeft, Calendar, Clock } from "lucide-react"

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blogs">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Blogs
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Server Components</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Understanding React Server Components</h1>

          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Michael Chen</div>
              <div className="text-sm text-muted-foreground flex items-center gap-3">
                <span className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" /> March 15, 2023
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> 8 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 border-y py-4">
          <Button variant="ghost" size="sm" className="gap-1">
            <ThumbsUp className="h-4 w-4" />
            128
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <MessageSquare className="h-4 w-4" />
            24 comments
          </Button>
          <Button variant="ghost" size="sm" className="gap-1">
            <Share className="h-4 w-4" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 ml-auto">
            <Bookmark className="h-4 w-4" />
            Save
          </Button>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="lead">
            React Server Components represent a paradigm shift in how we build React applications. They allow components
            to run on the server, opening up new possibilities for performance optimization and data access.
          </p>

          <h2>What are React Server Components?</h2>

          <p>
            React Server Components (RSC) are a new kind of component that runs only on the server. They were introduced
            by the React team to help solve some of the challenges of modern web development, such as:
          </p>

          <ul>
            <li>Reducing bundle size by keeping server-only code out of the client bundle</li>
            <li>Providing direct access to server-side resources without API endpoints</li>
            <li>Improving initial page load performance</li>
            <li>Simplifying data fetching patterns</li>
          </ul>

          <p>
            Unlike traditional React components that run in the browser, Server Components execute on the server and
            send their rendered result to the client. This means they can access server-side resources directly, such as
            databases, file systems, and APIs, without exposing credentials to the client.
          </p>

          <h2>Server Components vs. Client Components</h2>

          <p>In the new React model, we have two types of components:</p>

          <h3>Server Components:</h3>

          <ul>
            <li>Run only on the server</li>
            <li>Can access server-side resources directly</li>
            <li>Cannot use hooks or browser APIs</li>
            <li>Cannot have event handlers (onClick, etc.)</li>
            <li>Don't re-render on the client</li>
          </ul>

          <h3>Client Components:</h3>

          <ul>
            <li>Run on both the server (for initial render) and client</li>
            <li>Can use hooks and browser APIs</li>
            <li>Can have event handlers and interactivity</li>
            <li>Re-render on the client when state changes</li>
            <li>Are marked with the "use client" directive at the top of the file</li>
          </ul>

          <div className="bg-muted p-4 rounded-md my-6">
            <pre className="text-sm">
              <code>
                {`// This is a Client Component
"use client"

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h2>Benefits of Server Components</h2>

          <h3>Reduced Bundle Size</h3>

          <p>
            One of the biggest advantages of Server Components is that they don't increase your JavaScript bundle size.
            Since they run only on the server, their code is never sent to the client. This means you can use large
            dependencies (like date formatting libraries, markdown processors, etc.) in your Server Components without
            worrying about increasing the bundle size.
          </p>

          <h3>Direct Access to Backend Resources</h3>

          <p>
            Server Components can directly access backend resources like databases, file systems, and internal APIs
            without exposing credentials to the client. This eliminates the need for creating API endpoints for data
            fetching in many cases.
          </p>

          <div className="bg-muted p-4 rounded-md my-6">
            <pre className="text-sm">
              <code>
                {`// This is a Server Component
import { db } from '@/lib/database';

export default async function UserProfile({ userId }) {
  // Direct database access - no API needed
  const user = await db.users.findUnique({
    where: { id: userId },
  });
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>Improved Performance</h3>

          <p>Server Components can improve performance in several ways:</p>

          <ul>
            <li>Reduced bundle size means less JavaScript to download, parse, and execute</li>
            <li>Server rendering means users see content faster</li>
            <li>Data fetching happens on the server, closer to the data source</li>
            <li>Streaming allows for progressive rendering of components</li>
          </ul>

          <h2>Patterns and Best Practices</h2>

          <h3>Interleaving Server and Client Components</h3>

          <p>
            You can compose Server and Client Components together in the same component tree. This allows you to keep as
            much logic on the server as possible while still having interactive UI elements where needed.
          </p>

          <div className="bg-muted p-4 rounded-md my-6">
            <pre className="text-sm">
              <code>
                {`// Server Component
import { db } from '@/lib/database';
import LikeButton from './like-button'; // Client Component

export default async function BlogPost({ id }) {
  const post = await db.posts.findUnique({
    where: { id },
  });
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      {/* Client Component for interactivity */}
      <LikeButton postId={id} initialLikes={post.likes} />
    </article>
  );
}`}
              </code>
            </pre>
          </div>

          <h3>Data Fetching</h3>

          <p>
            With Server Components, data fetching becomes much simpler. You can use async/await directly in your
            components to fetch data, without needing to use useEffect or other client-side data fetching patterns.
          </p>

          <h2>Conclusion</h2>

          <p>
            React Server Components represent a significant evolution in how we build React applications. By allowing
            components to run on the server, they enable new patterns for performance optimization, data access, and
            component composition.
          </p>

          <p>
            As frameworks like Next.js adopt Server Components, we're seeing a shift towards a more server-first
            approach to React development, where we keep as much logic on the server as possible and only send to the
            client what's necessary for interactivity.
          </p>

          <p>
            While Server Components are still evolving, they're already changing how we think about building React
            applications and will likely become a standard part of the React ecosystem in the coming years.
          </p>
        </div>

        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Comments (24)</h3>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">2 days ago</div>
                      </div>
                    </div>
                    <p className="text-sm">
                      Great article! I've been using Server Components in my Next.js 13 project and they've really
                      simplified my data fetching logic. No more useEffect spaghetti code!
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        12
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <MessageSquare className="h-3 w-3" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">Sarah Johnson</div>
                        <div className="text-xs text-muted-foreground">3 days ago</div>
                      </div>
                    </div>
                    <p className="text-sm">
                      I'm still a bit confused about when to use Server Components vs. Client Components. If I need to
                      use useState or useEffect, I have to use a Client Component, right? But then I lose the ability to
                      fetch data directly from the database?
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <ThumbsUp className="h-3 w-3" />8
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 gap-1">
                        <MessageSquare className="h-3 w-3" />
                        Reply
                      </Button>
                    </div>

                    {/* Nested reply */}
                    <div className="mt-4 ml-6 pl-4 border-l">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-medium">Michael Chen</div>
                              <div className="text-xs text-muted-foreground">2 days ago</div>
                            </div>
                          </div>
                          <p className="text-sm">
                            That's right, Sarah. If you need hooks or interactivity, you need a Client Component. But
                            you can still have a Server Component parent that fetches data and passes it as props to
                            your Client Component children. This way, you keep data fetching on the server but still
                            have interactive UI elements.
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <ThumbsUp className="h-3 w-3" />5
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 gap-1">
                              <MessageSquare className="h-3 w-3" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="w-full mt-4">Load More Comments</Button>
        </div>
      </div>
    </div>
  )
}

