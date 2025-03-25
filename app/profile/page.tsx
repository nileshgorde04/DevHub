"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, MessageSquare, Github, Twitter, Linkedin, ThumbsUp } from "lucide-react"

export default function ProfilePage() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [bio, setBio] = useState("Full-stack developer with a passion for React and TypeScript.")

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and view your contributions</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[250px_1fr]">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@user" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <div className="w-full border-t my-2"></div>
                <div className="w-full">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Member since</span>
                    <span className="font-medium">Jan 2023</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Contributions</span>
                    <span className="font-medium">127</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Reputation</span>
                    <span className="font-medium">1,245</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Update Password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="contributions" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Contributions</CardTitle>
                    <CardDescription>View all your contributions across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="dsa" className="w-full">
                      <TabsList className="w-full grid grid-cols-4">
                        <TabsTrigger value="dsa">DSA Solutions</TabsTrigger>
                        <TabsTrigger value="blogs">Blogs</TabsTrigger>
                        <TabsTrigger value="lectures">Lectures</TabsTrigger>
                        <TabsTrigger value="discussions">Discussions</TabsTrigger>
                      </TabsList>

                      <TabsContent value="dsa" className="mt-4 space-y-4">
                        <div className="space-y-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between">
                                <CardTitle className="text-base">Efficient Graph Traversal Algorithm</CardTitle>
                                <Badge>Hard</Badge>
                              </div>
                              <CardDescription>Submitted 2 weeks ago</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">Graph</Badge>
                                <Badge variant="outline">DFS</Badge>
                                <Badge variant="outline">BFS</Badge>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ThumbsUp className="h-3 w-3" />
                                <span>45 upvotes</span>
                              </div>
                              <Button variant="ghost" size="sm" asChild className="gap-1">
                                <Link href="/dsa/graph-traversal">
                                  View <ArrowRight className="h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>

                          <Card>
                            <CardHeader className="pb-2">
                              <div className="flex justify-between">
                                <CardTitle className="text-base">Two Sum Optimized Solution</CardTitle>
                                <Badge>Easy</Badge>
                              </div>
                              <CardDescription>Submitted 1 month ago</CardDescription>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline">Arrays</Badge>
                                <Badge variant="outline">Hash Table</Badge>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <ThumbsUp className="h-3 w-3" />
                                <span>32 upvotes</span>
                              </div>
                              <Button variant="ghost" size="sm" asChild className="gap-1">
                                <Link href="/dsa/two-sum">
                                  View <ArrowRight className="h-4 w-4" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </div>

                        <Button variant="outline" className="w-full">
                          View All DSA Solutions
                        </Button>
                      </TabsContent>

                      <TabsContent value="blogs" className="mt-4 space-y-4">
                        {/* Blog contributions would go here */}
                      </TabsContent>

                      <TabsContent value="lectures" className="mt-4 space-y-4">
                        {/* Lecture contributions would go here */}
                      </TabsContent>

                      <TabsContent value="discussions" className="mt-4 space-y-4">
                        {/* Discussion contributions would go here */}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your recent activity across the platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="bg-muted rounded-md flex items-center justify-center h-10 w-10">
                          <ThumbsUp className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm">
                            You upvoted{" "}
                            <Link href="#" className="font-medium hover:underline">
                              Understanding React Server Components
                            </Link>
                          </p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="bg-muted rounded-md flex items-center justify-center h-10 w-10">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm">
                            You commented on{" "}
                            <Link href="#" className="font-medium hover:underline">
                              Best Practices for API Design
                            </Link>
                          </p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="bg-muted rounded-md flex items-center justify-center h-10 w-10">
                          <Code className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm">
                            You submitted a solution for{" "}
                            <Link href="#" className="font-medium hover:underline">
                              Two Sum
                            </Link>
                          </p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 pb-4 border-b">
                        <div className="bg-muted rounded-md flex items-center justify-center h-10 w-10">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm">
                            You published a blog{" "}
                            <Link href="#" className="font-medium hover:underline">
                              Getting Started with TypeScript
                            </Link>
                          </p>
                          <p className="text-xs text-muted-foreground">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>Manage your notification preferences</CardDescription>
                  </CardHeader>
                  <CardContent>{/* Notification settings would go here */}</CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

