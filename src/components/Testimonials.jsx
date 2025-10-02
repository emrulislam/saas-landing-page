import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "This SaaS changed my business! The AI tools saved us hours of work every week.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Bob Smith",
      feedback: "Amazing performance and great support. Highly responsive team!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Charlie Lee",
      feedback: "Highly recommend for startups. Easy to use and very efficient.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Diana Prince",
      feedback: "Fantastic UI and seamless workflow. Saved us tons of time!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // md tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-base-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-primary">
          What Our Users Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-4">
              <div className="bg-white rounded-xl shadow-lg border-t-4 border-primary p-6 flex flex-col items-center transition transform hover:-translate-y-1 hover:shadow-2xl duration-300">
                {/* Person Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary"
                />

                {/* Name */}
                <h4 className="mt-2 font-semibold text-gray-900">{t.name}</h4>

                {/* Rating */}
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="mt-4 italic text-gray-700 text-sm">{`"${t.feedback}"`}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
