const MentorCard = ({ name, role, image }) => {
    return (
      <div className="flex flex-col gap-2">
        <div className="relative w-[259.45px] h-[320px] rounded-2xl shadow-lg overflow-hidden group bg-white">
          {/* Mentor Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-50"
          />
    
          {/* Overlay & View Button (Hidden Initially) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="bg-sky-500 text-white px-6 py-2 rounded-full shadow-lg text-sm font-semibold hover:bg-sky-600">
              View →
            </button>
          </div>
        </div>
        {/* Mentor Name & Role */}
        <div className="text-center">
        <h3 className="text-2xl font-bold tracking-wide">{name}</h3>
        <p className="text-base font-normal tracking-wide ">{role}</p>
      </div>
    </div>
    );
  };

  export default MentorCard