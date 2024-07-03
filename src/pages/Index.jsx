import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to LearnCode</h1>
      <p className="mb-8">Your platform to learn coding from the best instructors.</p>
      <Button as={Link} to="/courses" className="mb-8">
        Explore Courses
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Featured Course 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn the basics of web development with this comprehensive course.</p>
            <Link to="/courses/1" className="text-blue-500">
              View Details
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Course 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Master JavaScript with our advanced course.</p>
            <Link to="/courses/2" className="text-blue-500">
              View Details
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Course 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Get started with Python programming.</p>
            <Link to="/courses/3" className="text-blue-500">
              View Details
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;