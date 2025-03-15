import React from "react";
import MentorCard from "../../components/MentorCard";

const mentors = [
  { name: "Alice Johnson", role: "Frontend Developer", image: "/teacher-1.jpg" },
  { name: "Bob Smith", role: "Backend Developer", image: "/teacher-2.jpg" },
  { name: "Charlie Brown", role: "Full Stack Developer", image: "/teacher-1.jpg" },
  { name: "Diana Prince", role: "UI/UX Designer", image: "/teacher-2.jpg" },
];

const Mentors = () => {
  return (
    <div className="mt-24 flex flex-col gap-10">
      <div className="max-w-2xl text-center mx-auto flex flex-col gap-2">
      <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl">Meet the <span className="text-sky-500">Mentors</span></h1>
      <p className="text-base text-stone-600">Nunc eu hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non pellentesque ultricies. Donec pretium gravida neque et placerat. Aliquam erat volutpat Proin.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-8 bg-[url(https://lms.factoryze.tech/demo-home-page1/dots.svg)] bg-no-repeat">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentors;
