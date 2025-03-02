import LeadForm from "../components/LeadForm";

const features = [
  {
    title: "Business Networking",
    description: "Build strong connections with industry experts.",
    image: "/images/business.jpg",
    alt: "Business Networking",
  },
  {
    title: "Marketing Solutions",
    description: "Boost your brand with our marketing tools.",
    image: "/images/marketing.jpg",
    alt: "Marketing Growth",
  },
  {
    title: "Sales Growth",
    description: "Increase revenue with powerful sales strategies.",
    image: "/images/sales.jpg",
    alt: "Sales Growth",
  },
];

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-gray-800">Grow Your Business with Biztoso 🚀</h1>
      <p className="text-gray-600 mt-4 text-lg">
        Connect with professionals, showcase your services, and expand your reach effortlessly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map(({ title, description, image, alt }) => (
          <div key={title} className="p-4 shadow-md rounded-lg bg-white">
            <img src={image} alt={alt} className="w-full rounded-md max-h-[160px] object-cover" />
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      <LeadForm />
    </div>
  );
};

export default Home;
