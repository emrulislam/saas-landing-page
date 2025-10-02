export default function PricingCard({ title, price, features, unavailable, popular }) {
  return (
    <div className="card w-full max-w-sm sm:max-w-md bg-base-100 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full mx-auto">
      <div className="card-body flex flex-col justify-between p-6">
        
        {/* Most Popular Badge */}
        {popular && (
          <span className="badge badge-primary absolute top-3 right-3 text-xs font-semibold">
            Most Popular
          </span>
        )}

        {/* Title + Price */}
        <div className="flex justify-between items-center flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          <span className="text-lg sm:text-xl mt-2 md:mt-4 sm:mt-0 font-semibold">{price}</span>
        </div>

        {/* Features List */}
        <ul className="mt-6 flex flex-col gap-3 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-success flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}

          {unavailable?.map((item, i) => (
            <li key={i} className="opacity-50 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-base-content/50 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="line-through">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6">
          <button className="btn btn-primary w-full rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
