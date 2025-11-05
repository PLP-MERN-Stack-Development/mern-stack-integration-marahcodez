import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Share Your Stories,
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Connect With Readers
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A modern platform for writers and readers. Create, discover, and engage with meaningful content.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/posts">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                  Explore Posts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/new-post">
                <Button size="lg" variant="outline" className="gap-2">
                  Start Writing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-2xl border bg-card p-8 shadow-card transition-all hover:shadow-card-hover animate-fade-in">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Rich Content</h3>
              <p className="text-muted-foreground">
                Write and format beautiful posts with our intuitive editor. Organize by categories.
              </p>
            </div>

            <div className="group rounded-2xl border bg-card p-8 shadow-card transition-all hover:shadow-card-hover animate-fade-in [animation-delay:100ms]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community Driven</h3>
              <p className="text-muted-foreground">
                Connect with like-minded readers and writers. Build your audience.
              </p>
            </div>

            <div className="group rounded-2xl border bg-card p-8 shadow-card transition-all hover:shadow-card-hover animate-fade-in [animation-delay:200ms]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Modern tech stack ensures blazing fast performance and smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border bg-gradient-card p-12 text-center shadow-card">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join our community of passionate writers and readers today.
            </p>
            <Link to="/auth">
              <Button size="lg" className="shadow-lg shadow-primary/20">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;