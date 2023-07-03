import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Evereve | Technology Solutions Coordinator",
    duration: "Current",
    details: "Monitor performance of applications and websites; identifying, diagnosing and troubleshooting issues as necessary. Plan, test, and implement process and configuration changes across the organization. Maintain day-to-day helpdesk tickets including fielding escalated user questions, making minor customizations, troubleshooting issues, and working with 3rd party vendor support as needed. Assist with all IT aspects of retail operation, including IT infrastructure, hardware, POS software and integration with ERP.",
  },
  {
    year: 2019,
    title: "U.S. Bank | Help Desk Technician",
    duration: "2 years",
    details: "Provided professional phone and chat support to the U.S. Bank employees, utilizing effective troubleshooting methods to identify and resolve a wide range of technical issues. Promptly and efficiently assisted with password resets and unlocks in the Active Directory, ensuring a smooth user experience. Successfully resolved Outlook-related problems and provided assistance with the Microsoft suite of applications to increase overall productivity. Conducted hardware troubleshooting to diagnose and resolve technical issues, optimizing system performance and minimizing downtime.",
  },
  {
    year: 2012,
    title: "Army National Guard | IT Specialist",
    duration: "8 years",
    details: "Configured CISCO routes, switches, and other networking devices. Executed hands-on tasks such as assembling military equipment, designing network layouts, and managing cabling infrastructure. Installed software, operating systems, and windows server software. Lead teams during military exercises whose task was to establish and secure the network.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-red-700 my-8">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
      <div className="flex justify-center">
        <a href="https://docs.google.com/document/d/1v-8QfcK7yfW_ug2FbuTA7daWkMQpYIn0SnhGeRzj2HI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="border border-4 border-gray-400 p-3 mt-6 text-red-700 uppercase hover:shadow-xl font-bold">View Resume
        </a>
      </div>
    </div>
  );
};

export default Work;
