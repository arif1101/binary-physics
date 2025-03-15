const TestimonialCard = ({ title, text, name, role, img }) => {
    return (
      <div className="bg-white border border-sky-200 p-6 text-left rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
        <h3 className="text-lg font-bold text-sky-500">{title}</h3>
        <p className="text-gray-600 mt-2">{text}</p>
        <div className="flex items-center mt-4">
          <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover mr-3" />
          <div className="text-left">
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    );
  };
  export default TestimonialCard;