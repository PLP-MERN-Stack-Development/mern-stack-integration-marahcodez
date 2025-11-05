import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar.jsx";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Edit } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// Mock data - will be replaced with real database query
const mockPost = {
  id: "1",
  title: "Getting Started with React and TypeScript",
  content: `TypeScript adds static typing to React, making your code more robust and maintainable. In this comprehensive guide, we'll explore how to set up a React project with TypeScript, define component props with interfaces, and leverage TypeScript's powerful type system to catch errors early in development.

## Why TypeScript with React?

TypeScript brings several key benefits to React development:

- **Type Safety**: Catch errors during development, not at runtime
- **Better IntelliSense**: Enhanced autocomplete and documentation in your IDE
- **Refactoring Confidence**: Safely rename and restructure your codebase
- **Self-Documenting Code**: Types serve as inline documentation

## Setting Up Your Project

The easiest way to start a new React TypeScript project is using Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Defining Component Props

One of the most common patterns is defining props for your components:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={variant}>
      {label}
    </button>
  );
};
\`\`\`

## State Management with TypeScript

TypeScript makes state management more predictable:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
\`\`\`

## Conclusion

TypeScript and React are a powerful combination that can significantly improve your development experience and code quality. Start small, add types gradually, and watch your confidence grow as you build more robust applications.`,
  category: "Technology",
  createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  author: "Sarah Chen",
};

const PostView = () => {
  const { id } = useParams();

  // In a real app, fetch post by id from database
  const post = mockPost;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="container mx-auto max-w-4xl px-4 py-12">
        <Link to="/posts">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Posts
          </Button>
        </Link>

        <div className="mb-8 animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground">{post.category}</Badge>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
            </div>
            <Link to={`/edit-post/${id}`}>
              <Button variant="ghost" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </Link>
          </div>
        </div>

        <div className="prose prose-slate max-w-none dark:prose-invert animate-fade-in [animation-delay:100ms]">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <h3 className="mb-4 text-xl font-semibold">About the Author</h3>
          <div className="flex items-center gap-4 rounded-lg border bg-card p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
              {post.author[0]}
            </div>
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm text-muted-foreground">Passionate writer and technology enthusiast</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostView;