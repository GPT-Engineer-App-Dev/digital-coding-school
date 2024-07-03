import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchCourseDetail = async (courseId) => {
  const response = await fetch(`/api/courses/${courseId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["courseDetail", courseId],
    queryFn: () => fetchCourseDetail(courseId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{data.description}</p>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Instructor</h2>
            <p>{data.instructor}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Course Content</h2>
            <ul className="list-disc list-inside">
              {data.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
          <Button className="mt-4">Enroll</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDetail;