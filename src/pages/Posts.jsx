import { useState } from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - will be replaced with real data from database
const mockPosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    content: "TypeScript adds static typing to React, making your code more robust and maintainable. In this comprehensive guide, we'll explore how to set up a React project with TypeScript, define component props with interfaces, and leverage TypeScript's powerful type system to catch errors early in development.",
    category: "Technology",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    author: "Sarah Chen",
  },
  {
    id: "2",
    title: "The Art of Minimalist Design",
    content: "Minimalism in design isn't just about using less—it's about using what matters most. This philosophy transforms how we approach user interfaces, content creation, and visual storytelling. Learn the principles that make minimalist design so powerful and timeless.",
    category: "Design",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    author: "Marcus Wu",
  },
  {
    id: "3",
    title: "Building Scalable Node.js Applications",
    content: "As your application grows, scalability becomes crucial. This article covers best practices for building Node.js applications that can handle increasing loads, from microservices architecture to efficient database queries and caching strategies.",
    category: "Technology",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    author: "Alex Kumar",
  },
  {
    id: "4",
    title: "Morning Routines of Successful People",
    content: "How you start your morning sets the tone for your entire day. Discover the common habits shared by high achievers, from meditation and exercise to strategic planning. These simple routines can dramatically improve your productivity and well-being.",
    category: "Lifestyle",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    author: "Emma Wilson",
  },
];

const categories = ["All", "Technology", "Design", "Lifestyle"];

const Posts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? mockPosts
    : mockPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">All Posts</h1>
          <p className="text-lg text-muted-foreground">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-md grid-cols-4">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div key={post.id} className="animate-fade-in">
              <PostCard {...post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;