import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { toast } from "react-toastify";

const AssignmentDetailPage = () => {
  const { assignmentId } = useParams();
  const [loading, setLoading] = useState(true);
  const [assignment, setAssignment] = useState(null);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const assignments = [
    {
      id: 1,
      title: "Programming Project: Build a Web App",
      course: "Web Development",
      professor: "Dr. Sarah Johnson",
      dueDate: "2023-08-15",
      status: "in-progress",
      progress: 65,
      description:
        "Create a functional web application using React and a backend of your choice. The application should include user authentication, data storage, and at least three distinct features.",
      criteria: [
        "Working user authentication system",
        "Data persistence using a database",
        "Clean, responsive UI design",
        "At least 3 distinct features",
        "Code organization and readability",
        "Documentation of the application",
      ],
      resources: [
        { name: "React Documentation", link: "#" },
        { name: "Backend Options Guide", link: "#" },
        { name: "UI/UX Best Practices", link: "#" },
      ],
      submissions: [
        {
          id: 1,
          date: "2023-07-25",
          status: "submitted",
          feedback: "Good progress, but need more work on the UI design.",
          files: ["initial-draft.zip"],
        },
      ],
    },
    {
      id: 2,
      title: "Algorithm Design Analysis",
      course: "Data Structures",
      professor: "Dr. Michael Chen",
      dueDate: "2023-08-10",
      status: "overdue",
      progress: 25,
      description:
        "Analyze and compare the efficiency of different sorting algorithms. Implement at least 3 sorting algorithms and compare their performance with different input sizes.",
      criteria: [
        "Implementation of bubble sort, quick sort, and merge sort",
        "Performance analysis with varying input sizes",
        "Time complexity analysis",
        "Space complexity analysis",
        "Visual comparison of performance results",
        "Explanation of when to use each algorithm",
      ],
      resources: [
        { name: "Sorting Algorithms Guide", link: "#" },
        { name: "Performance Analysis Techniques", link: "#" },
      ],
      submissions: [],
    },
    {
      id: 3,
      title: "Database Schema Design",
      course: "Database Systems",
      professor: "Dr. Lisa Wong",
      dueDate: "2023-08-22",
      status: "upcoming",
      progress: 0,
      description:
        "Design a normalized database schema for an e-commerce application. Create the ER diagram and implement the schema in MySQL.",
      criteria: [
        "Entity-Relationship Diagram",
        "Normalized database design (3NF)",
        "SQL implementation script",
        "Sample data insertion script",
        "Common query examples",
        "Explanation of design decisions",
      ],
      resources: [
        { name: "Database Normalization Guide", link: "#" },
        { name: "E-commerce Database Examples", link: "#" },
        { name: "MySQL Documentation", link: "#" },
      ],
      submissions: [],
    },
    {
      id: 4,
      title: "Research Paper: AI Ethics",
      course: "Artificial Intelligence",
      professor: "Dr. James Wilson",
      dueDate: "2023-09-05",
      status: "upcoming",
      progress: 10,
      description:
        "Write a 10-page research paper on ethical considerations in AI development. Focus on a specific area such as bias in machine learning, privacy concerns, or automation impact on employment.",
      criteria: [
        "Clear thesis statement",
        "Literature review of existing research",
        "Analysis of current ethical frameworks",
        "Case studies of ethical issues",
        "Proposed guidelines or solutions",
        "Proper citations (APA format)",
      ],
      resources: [
        { name: "AI Ethics Research Papers", link: "#" },
        { name: "Citation Guide", link: "#" },
      ],
      submissions: [],
    },
    {
      id: 5,
      title: "Network Security Analysis",
      course: "Cybersecurity",
      professor: "Dr. Robert Taylor",
      dueDate: "2023-07-30",
      status: "completed",
      progress: 100,
      description:
        "Conduct a security analysis of a given network configuration. Identify vulnerabilities and propose security measures.",
      criteria: [
        "Vulnerability assessment",
        "Threat modeling",
        "Security control recommendations",
        "Implementation plan",
        "Security testing approach",
        "Cost-benefit analysis of security measures",
      ],
      resources: [
        { name: "Network Security Best Practices", link: "#" },
        { name: "Vulnerability Assessment Tools", link: "#" },
      ],
      submissions: [
        {
          id: 2,
          date: "2023-07-15",
          status: "submitted",
          feedback:
            "Excellent work! Comprehensive analysis and well-thought-out recommendations.",
          files: ["security-analysis.pdf", "presentation.pptx"],
        },
        {
          id: 3,
          date: "2023-07-29",
          status: "submitted",
          feedback:
            "Perfect final submission. All requirements met with excellent quality.",
          files: ["final-report.pdf"],
        },
      ],
    },
  ];

  useEffect(() => {
    // Simulate fetching assignment data
    setLoading(true);
    setTimeout(() => {
      const foundAssignment = assignments.find(
        (a) => a.id === parseInt(assignmentId, 10)
      );
      setAssignment(foundAssignment || null);
      setLoading(false);
    }, 500);
  }, [assignmentId]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission process
    setTimeout(() => {
      toast.success("Assignment submitted successfully!");
      setIsSubmitting(false);
      setComment("");
      setFile(null);

      // Update the assignment progress
      if (assignment) {
        const updatedAssignment = {
          ...assignment,
          progress: Math.min(assignment.progress + 25, 100),
          submissions: [
            ...assignment.submissions,
            {
              id: Date.now(),
              date: format(new Date(), "yyyy-MM-dd"),
              status: "submitted",
              feedback: "",
              files: [file.name],
            },
          ],
        };

        if (updatedAssignment.progress === 100) {
          updatedAssignment.status = "completed";
        }

        setAssignment(updatedAssignment);
      }
    }, 1500);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:check-circle" className="w-3 h-3 mr-1" />{" "}
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:clock" className="w-3 h-3 mr-1" /> In Progress
          </span>
        );
      case "overdue":
        return (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:alert-circle" className="w-3 h-3 mr-1" /> Overdue
          </span>
        );
      case "upcoming":
        return (
          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
            <Icon icon="tabler:calendar" className="w-3 h-3 mr-1" /> Upcoming
          </span>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className={`flex-1`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="flex min-h-screen bg-white">
        <div className={`flex-1 `}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Icon
                icon="tabler:file-question"
                className="h-16 w-16 mx-auto text-gray-400 mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Assignment Not Found</h2>
              <p className="text-gray-500 mb-6">
                The assignment you&apos;re looking for doesn&apos;t exist or has been
                removed.
              </p>
              <Link
                to="/assignments"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon icon="tabler:arrow-left" className="mr-2 h-4 w-4" />
                Back to Assignments
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className={`flex-1`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Link
                to="/assignments"
                className="text-gray-500 hover:text-gray-700"
              >
                <Icon icon="tabler:arrow-left" className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold">{assignment.title}</h1>
              {getStatusBadge(assignment.status)}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Icon icon="tabler:book" className="h-4 w-4 mr-1" />
                <span>{assignment.course}</span>
              </div>
              <div className="flex items-center">
                <Icon icon="tabler:user" className="h-4 w-4 mr-1" />
                <span>{assignment.professor}</span>
              </div>
              <div className="flex items-center">
                <Icon icon="tabler:calendar" className="h-4 w-4 mr-1" />
                <span>
                  Due: {format(new Date(assignment.dueDate), "MMMM dd, yyyy")}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Assignment Details */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Assignment Description
                </h2>
                <p className="text-gray-700 mb-6">{assignment.description}</p>

                <h3 className="text-md font-semibold mb-2">
                  Evaluation Criteria
                </h3>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  {assignment.criteria.map((criterion, idx) => (
                    <li key={idx} className="text-gray-700">
                      {criterion}
                    </li>
                  ))}
                </ul>

                <h3 className="text-md font-semibold mb-2">Resources</h3>
                <ul className="space-y-2">
                  {assignment.resources.map((resource, idx) => (
                    <li key={idx}>
                      <a
                        href={resource.link}
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <Icon
                          icon="tabler:external-link"
                          className="h-4 w-4 mr-1"
                        />
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submission History */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Submission History
                </h2>

                {assignment.submissions.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon
                      icon="tabler:file-upload"
                      className="h-12 w-12 mx-auto text-gray-300 mb-3"
                    />
                    <p className="text-gray-500">No submissions yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {assignment.submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="border border-gray-100 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="font-medium">
                              Submitted on{" "}
                              {format(
                                new Date(submission.date),
                                "MMMM dd, yyyy"
                              )}
                            </div>
                            <span className="text-sm text-green-600">
                              Submission #{submission.id}
                            </span>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">
                            {submission.status}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {submission.files.map((file, fileIdx) => (
                            <div
                              key={fileIdx}
                              className="flex items-center bg-gray-100 px-3 py-1 rounded-md text-sm"
                            >
                              <Icon
                                icon="tabler:file"
                                className="h-4 w-4 mr-1"
                              />
                              {file}
                              <button className="ml-2 text-gray-500 hover:text-gray-700">
                                <Icon
                                  icon="tabler:download"
                                  className="h-4 w-4"
                                />
                              </button>
                            </div>
                          ))}
                        </div>

                        {submission.feedback && (
                          <div className="mt-3">
                            <h4 className="text-sm font-medium mb-1">
                              Feedback:
                            </h4>
                            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                              {submission.feedback}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Progress */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Your Progress</h2>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1 text-sm">
                    <span>Completion</span>
                    <span className="font-medium">{assignment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        assignment.status === "overdue"
                          ? "bg-red-500"
                          : assignment.status === "completed"
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }`}
                      style={{ width: `${assignment.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Submissions</span>
                    <span className="font-medium">
                      {assignment.submissions.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Time Remaining</span>
                    <span className="font-medium">
                      {new Date(assignment.dueDate) > new Date()
                        ? `${Math.ceil(
                            (new Date(assignment.dueDate) - new Date()) /
                              (1000 * 60 * 60 * 24)
                          )} days`
                        : "Past due"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Assignment */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Submit Assignment
                </h2>

                {assignment.status === "completed" ? (
                  <div className="text-center py-4">
                    <Icon
                      icon="tabler:check-circle"
                      className="h-12 w-12 mx-auto text-green-500 mb-3"
                    />
                    <p className="text-gray-700">
                      This assignment has been completed
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Comment (optional)
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        placeholder="Add any comments about your submission..."
                      ></textarea>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Files
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6">
                        <div className="space-y-2 text-center">
                          <Icon
                            icon="tabler:upload"
                            className="mx-auto h-12 w-12 text-gray-400"
                          />
                          <div className="text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, DOC, ZIP up to 10MB
                          </p>
                        </div>

                        {file && (
                          <div className="mt-3 flex items-center justify-center bg-gray-100 px-3 py-2 rounded-md text-sm">
                            <Icon icon="tabler:file" className="h-4 w-4 mr-1" />
                            {file.name}
                            <button
                              type="button"
                              className="ml-2 text-gray-500 hover:text-gray-700"
                              onClick={() => setFile(null)}
                            >
                              <Icon icon="tabler:x" className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !file}
                      className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                        isSubmitting || !file
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>Submit Assignment</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetailPage;
