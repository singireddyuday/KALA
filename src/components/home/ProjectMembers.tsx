import React from "react";

const projectMembers = [
  {
    name: "UDAY KIRAN REDDY S",
    role: "Frontend Developer, UI/UX Designer",
    linkedin: "https://www.linkedin.com/in/johndoe",
    github: "https://github.com/singireddyuday",
    email: "udaykiranreddysingireddy2@gmail.com",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "B Varsha",
    role: "Backend Developer",
    linkedin: "./",
    github: "https://github.com/janesmith",
    email: "22r21a0571@mlrit.ac.in",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "K SUSHRUTH",
    role: "UI/UX Designer, Frontend Developer",
    linkedin: "https://www.linkedin.com/in/sushruth-kamolkar/",
    github: "https://github.com/Sushruthh",
    email: "sushruth.kamolkar@gmail.com",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "K NAVADEEP",
    role: "Frontend Developer",
    linkedin: "",
    github: "",
    email: "",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const ProjectMembers = () => {
  return (
    <section id="project-members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Project Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
              <div className="text-gray-600">
                <p>
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:underline"
                  >
                    Email
                  </a>
                </p>
                <p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMembers;
