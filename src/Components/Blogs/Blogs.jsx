import Space from "../Space/Space";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = [
    {
      postDate: "2025-02-18",
      name: "Admin",
      title: "Why Single-Building Management is the Future of Smart Living",
      description: [
        "Managing a single building efficiently can offer residents a seamless living experience while reducing operational complexities.",
        "With the rise of smart home technologies, single-building management systems ensure better security, automation, and energy efficiency.",
        "Having a dedicated management system means faster maintenance responses and improved resident satisfaction.",
        "A well-structured management platform provides real-time updates on building events, announcements, and service schedules.",
        "Integrating smart access control, visitor logs, and digital payment options enhances the overall convenience for tenants.",
      ],
    },
    {
      postDate: "2025-02-17",
      name: "Building Manager",
      title: "How a Centralized System Improves Apartment Living",
      description: [
        "A centralized building management system helps streamline communication between tenants and management.",
        "Residents can track their utility bills, maintenance requests, and community events in one place.",
        "With integrated complaint resolution, issues are addressed quickly, making the living experience stress-free.",
        "A single-platform system ensures data security and prevents miscommunication.",
        "It also offers transparency in service charges and rent management, ensuring smooth operations for both tenants and landlords.",
      ],
    },
    {
      postDate: "2025-02-16",
      name: "Facility Supervisor",
      title: "Top Features Every Modern Building Management System Should Have",
      description: [
        "An efficient system should provide automated maintenance requests and tracking.",
        "Smart security integrations, like CCTV monitoring and digital key access, are essential for tenant safety.",
        "A user-friendly interface that allows tenants to book amenities like gyms and meeting rooms improves convenience.",
        "Real-time notifications about building events, maintenance schedules, and emergency alerts keep residents informed.",
        "A seamless payment gateway for rent, maintenance fees, and other charges enhances financial transparency.",
      ],
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-dark-blue text-xl md:text-2xl lg:text-4xl mb-5">
          Our Latest Blogs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
