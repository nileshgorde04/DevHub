import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, MessageSquare, Share, Bookmark, ArrowLeft, Calendar } from "lucide-react"

export default function DiscussionDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/discussions">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Discussions
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">API</Badge>
            <Badge variant="outline">REST</Badge>
            <Badge variant="outline">Backend</Badge>
            <Badge>Hot</Badge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Best Practices for API Design</h1>

          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Michael Chen</div>
              <div className="text-sm text-muted-foreground flex items-center">
                <Calendar className="h-3 w-3 mr-1" /> Asked 2 days ago
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <span className="font-medium">128</span>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsDown className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    I'm designing a RESTful API for a new project and I'm wondering what are the current best practices
                    for API design, especially regarding versioning, authentication, and error handling.
                  </p>

                  <p>Here are some specific questions I have:</p>

                  <ol>
                    <li>
                      <strong>Versioning:</strong> Should I use URL versioning (e.g., /v1/users) or header-based
                      versioning (e.g., Accept: application/vnd.api+json;version=1)? What are the pros and cons of each
                      approach?
                    </li>
                    <li>
                      <strong>Authentication:</strong> What's the best approach for API authentication these days? JWT
                      seems popular, but I've heard concerns about token size and security. Are there better
                      alternatives?
                    </li>
                    <li>
                      <strong>Error Handling:</strong> What's a good standard format for error responses? Should I
                      follow a specific standard like RFC 7807 (Problem Details for HTTP APIs)?
                    </li>
                    <li>
                      <strong>Rate Limiting:</strong> What are good practices for implementing rate limiting? And how
                      should I communicate rate limit information to API consumers?
                    </li>
                    <li>
                      <strong>Documentation:</strong> What tools do you recommend for API documentation? I've looked at
                      Swagger/OpenAPI, but are there better alternatives?
                    </li>
                  </ol>

                  <p>I'd appreciate any insights or resources you can share based on your experience. Thanks!</p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Bookmark className="h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">32 Answers</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="outline" size="sm">
              Highest Voted
            </Button>
          </div>
        </div>

        {/* Answer 1 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <span className="font-medium">45</span>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsDown className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> Answered 1 day ago
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    Based on my experience building and maintaining APIs, here are some best practices for each of your
                    questions:
                  </p>

                  <h3>Versioning</h3>

                  <p>
                    I prefer URL versioning (e.g., /v1/users) for its simplicity and visibility. It's easier for
                    developers to understand and use, and it's more visible in logs and debugging tools. Header-based
                    versioning is more "pure" from a REST perspective but adds complexity for API consumers.
                  </p>

                  <h3>Authentication</h3>

                  <p>JWT is still a solid choice, but with some caveats:</p>

                  <ul>
                    <li>Keep tokens small by minimizing claims</li>
                    <li>Use short expiration times (15-60 minutes) with refresh tokens</li>
                    <li>Store sensitive tokens in HTTP-only cookies to mitigate XSS</li>
                    <li>Consider OAuth 2.0 with PKCE for public clients</li>
                  </ul>

                  <h3>Error Handling</h3>

                  <p>
                    RFC 7807 (Problem Details for HTTP APIs) is an excellent standard to follow. It provides a
                    consistent format that includes:
                  </p>

                  <pre className="bg-muted p-4 rounded-md">
                    <code>
                      {`{
  "type": "https://example.com/problems/resource-not-found",
  "title": "Resource Not Found",
  "status": 404,
  "detail": "The user with ID 12345 was not found",
  "instance": "/users/12345"
}`}
                    </code>
                  </pre>

                  <h3>Rate Limiting</h3>

                  <p>Use standard headers to communicate rate limits:</p>

                  <ul>
                    <li>
                      <code>X-RateLimit-Limit</code>: Maximum requests allowed in a period
                    </li>
                    <li>
                      <code>X-RateLimit-Remaining</code>: Requests remaining in current period
                    </li>
                    <li>
                      <code>X-RateLimit-Reset</code>: Time when the limit resets
                    </li>
                    <li>Return 429 Too Many Requests when limits are exceeded</li>
                  </ul>

                  <h3>Documentation</h3>

                  <p>OpenAPI (formerly Swagger) is still the industry standard. I recommend:</p>

                  <ul>
                    <li>OpenAPI 3.0+ for specification</li>
                    <li>Swagger UI for interactive documentation</li>
                    <li>Consider tools like Stoplight Studio for design-first approach</li>
                    <li>Ensure documentation is always in sync with implementation</li>
                  </ul>

                  <p>Hope this helps! Let me know if you have any specific questions about these recommendations.</p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Answer 2 */}
        <Card>
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
                <span className="font-medium">32</span>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsDown className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> Answered 2 days ago
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    I'd like to add some additional thoughts to complement John's excellent answer, particularly around
                    API design philosophy:
                  </p>

                  <h3>API Design Principles</h3>

                  <p>Before diving into specific implementation details, consider these foundational principles:</p>

                  <ol>
                    <li>
                      <strong>Consistency:</strong> Use consistent naming, error handling, and patterns throughout your
                      API
                    </li>
                    <li>
                      <strong>Simplicity:</strong> Make common operations simple and straightforward
                    </li>
                    <li>
                      <strong>Evolvability:</strong> Design your API to evolve without breaking existing clients
                    </li>
                  </ol>

                  <h3>Resource Modeling</h3>

                  <p>
                    Spend time properly modeling your resources. This is often overlooked but is crucial for a good API
                    design:
                  </p>

                  <ul>
                    <li>Use nouns, not verbs for resource names (e.g., /users not /getUsers)</li>
                    <li>Use plural nouns for collection resources (/users instead of /user)</li>
                    <li>Nest resources to represent relationships (/users/123/posts)</li>
                    <li>Consider HATEOAS principles for discoverability</li>
                  </ul>

                  <h3>GraphQL Consideration</h3>

                  <p>
                    While REST is still widely used, consider if GraphQL might be a better fit for your use case,
                    especially if:
                  </p>

                  <ul>
                    <li>Clients need to fetch data from multiple resources in a single request</li>
                    <li>Different clients need different data shapes</li>
                    <li>Your API has complex relationships between resources</li>
                  </ul>

                  <p>
                    GraphQL can reduce over-fetching and under-fetching of data, which is a common problem with REST
                    APIs.
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Answer */}
        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold">Your Answer</h3>
          <Textarea placeholder="Write your answer here..." className="min-h-[200px]" />
          <Button>Post Your Answer</Button>
        </div>
      </div>
    </div>
  )
}

