import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, PenSquare } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl transition-colors hover:text-primary">
            <BookOpen className="h-6 w-6" />
            <span className="bg-gradient-hero bg-clip-text text-transparent">BlogSpace</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/posts">
              <Button variant="ghost">All Posts</Button>
            </Link>
            <Link to="/new-post">
              <Button className="gap-2">
                <PenSquare className="h-4 w-4" />
                Write Post
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;