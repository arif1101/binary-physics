import TestimonialCard from "../../components/TestimonialCard";

const Testimonials = () => {

    const testimonials = [
        {
          title: "Leadership Legacy Program",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Matthew David",
          role: "Web Developer",
          img: "/men-1.jpg"
        },
        {
          title: "Data Visualization Workshop",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Xavier Reid",
          role: "Research Scientist",
          img: "/men-1.jpg"
        },
        {
          title: "Leadership Legacy Program",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Matthew David",
          role: "Web Developer",
          img: "/men-1.jpg"
        },
        {
          title: "Data Visualization Workshop",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Xavier Reid",
          role: "Research Scientist",
          img: "/men-1.jpg"
        },
        {
          title: "Leadership Legacy Program",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Matthew David",
          role: "Web Developer",
          img: "/men-1.jpg"
        },
        {
          title: "Data Visualization Workshop",
          text: "Fermentum justo turpis in justo. Pellentesque fringilla eget nisl eget interdum. Vivamus semper enim at nunc fringilla faucibus. Suspendisse mattis nunc quis lorem faucibus molestie.",
          name: "Xavier Reid",
          role: "Research Scientist",
          img: "/men-1.jpg"
        }
      ];
    
    return (
      <div className="text-center mt-[100px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
          Opinion <span className="text-sky-500">of Our</span> Pupils
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;