import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Share, Bookmark, ArrowLeft, Clock } from "lucide-react"

export default function DSADetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dsa">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Problems
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Two Sum</h1>
            <Badge>Easy</Badge>
          </div>
          <p className="text-muted-foreground">
            Given an array of integers nums and an integer target, return indices of the two numbers such that they add
            up to target.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Arrays</Badge>
          <Badge variant="outline">Hash Table</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Problem Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You may assume that each input would have exactly one solution, and you may not use the same element
              twice.
            </p>
            <p>You can return the answer in any order.</p>

            <div className="space-y-2">
              <h3 className="font-semibold">Example 1:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  Input: nums = [2,7,11,15], target = 9{"\n"}
                  Output: [0,1]{"\n"}
                  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                </code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Example 2:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  Input: nums = [3,2,4], target = 6{"\n"}
                  Output: [1,2]
                </code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Example 3:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>
                  Input: nums = [3,3], target = 6{"\n"}
                  Output: [0,1]
                </code>
              </pre>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Constraints:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  2 ≤ nums.length ≤ 10<sup>4</sup>
                </li>
                <li>
                  -10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup>
                </li>
                <li>
                  -10<sup>9</sup> ≤ target ≤ 10<sup>9</sup>
                </li>
                <li>Only one valid answer exists.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="solutions" className="w-full">
          <TabsList className="w-full max-w-md grid grid-cols-2">
            <TabsTrigger value="solutions">Solutions (12)</TabsTrigger>
            <TabsTrigger value="discussions">Discussions (8)</TabsTrigger>
          </TabsList>
          <TabsContent value="solutions" className="mt-6 space-y-6">
            <Button>Submit Your Solution</Button>

            {/* Solution Card 1 */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Submitted 2 weeks ago
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="outline">O(n) Time</Badge>
                  <Badge variant="outline">O(n) Space</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
};`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Explanation:</h3>
                    <p>
                      This solution uses a hash map to store the numbers we've seen so far and their indices. For each
                      number, we calculate its complement (target - current number) and check if it exists in our map.
                      If it does, we've found our pair and return their indices. If not, we add the current number and
                      its index to the map and continue.
                    </p>
                    <p className="mt-2">
                      This approach gives us O(n) time complexity as we only need to iterate through the array once, and
                      O(n) space complexity for storing the hash map.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    45
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </CardFooter>
            </Card>

            {/* Solution Card 2 */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> Submitted 3 weeks ago
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="outline">O(n) Time</Badge>
                  <Badge variant="outline">O(n) Space</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-md overflow-x-auto">
                    <pre className="text-sm">
                      <code>
                        {`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, value in enumerate(nums):
            remaining = target - value
            
            if remaining in seen:
                return [seen[remaining], i]
                
            seen[value] = i
            
        return []`}
                      </code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Explanation:</h3>
                    <p>
                      This Python solution follows the same approach as the JavaScript solution above. We use a
                      dictionary to keep track of the numbers we've seen and their indices. For each number, we check if
                      its complement exists in our dictionary. If it does, we return both indices. Otherwise, we add the
                      current number and its index to the dictionary.
                    </p>
                    <p className="mt-2">
                      The time complexity is O(n) as we only need to iterate through the array once, and the space
                      complexity is O(n) for storing the dictionary.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    38
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />8
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="discussions" className="mt-6 space-y-6">
            <Button>Start a Discussion</Button>

            {/* Discussion threads would go here */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Chen</div>
                    <div className="text-xs text-muted-foreground">Posted 1 month ago</div>
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">Can we solve this without using extra space?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I'm wondering if there's a way to solve this problem without using a hash map or any extra space.
                  Would sorting the array first help? But then we'd lose the original indices...
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />5 replies
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  View Discussion
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">David Park</div>
                    <div className="text-xs text-muted-foreground">Posted 2 months ago</div>
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">Time complexity comparison: Brute force vs. Hash Map</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Let's discuss the time complexity difference between the brute force approach (nested loops) and the
                  hash map approach. The brute force solution would be O(n²) while the hash map solution is O(n). For
                  large inputs, this difference is significant.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />8 replies
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  View Discussion
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

