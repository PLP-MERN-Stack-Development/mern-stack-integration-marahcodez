import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const PostCard = ({ id, title, content, category, createdAt, author = "Anonymous", image }) => {
  // Truncate content for preview
  const preview = content.length > 150 ? content.substring(0, 150) + "..." : content;

  return (
    <Link to={`/posts/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        {image && (
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {category}
            </Badge>
          </div>

          <h3 className="mb-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>

          <p className="mb-4 text-muted-foreground line-clamp-3">
            {preview}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PostCard;