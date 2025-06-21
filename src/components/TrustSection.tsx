
const trustPoints = [
  "Local Bangalore team that understands Indian market dynamics",
  "Strategy-first approach — we solve business problems, not just code",
  "Proven track record with startups from MVP to Series A",
  "No outsourcing — your project stays with our core team",
  "Post-launch support and scaling guidance included",
  "Transparent pricing with no hidden costs or surprises"
];

export const TrustSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C700F2] via-[#00FFF7] to-[#D1FF00]"> Z01.tech?</span>
          </h2>
          <p className="text-xl text-[#F5F5F5] max-w-3xl mx-auto">
            We're not freelancers or a faceless agency. We're your local tech partners committed to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gradient-to-r hover:from-[#0D0D0D] hover:to-[#1a1a1a] border border-[#D1FF00] hover:border-[#00FFF7] transition-all duration-300 hover:shadow-[0_0_20px_#C700F2]"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C700F2] to-[#00FFF7] flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_0_10px_#C700F2]">
                <svg className="w-3 h-3 text-[#0D0D0D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-[#F5F5F5] text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3-6x", label: "Faster Time to Market" },
            { number: "24/7", label: "Technical Support" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-lg border border-[#D1FF00] bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] hover:shadow-[0_0_20px_#C700F2] transition-all duration-300">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C700F2] via-[#00FFF7] to-[#D1FF00] mb-2">
                {stat.number}
              </div>
              <div className="text-[#F5F5F5] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
