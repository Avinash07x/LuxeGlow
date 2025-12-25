import { Instagram, Award } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Anita Sharma",
      role: "Bridal Makeup Expert",
      experience: "8+ Years Experience",
      specialty: "HD & Airbrush Bridal Makeup",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
    {
      name: "Riya Mehta",
      role: "Skin & Facial Specialist",
      experience: "6+ Years Experience",
      specialty: "Advanced Skin Treatments & Facials",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Neha Kapoor",
      role: "Senior Hair Stylist",
      experience: "7+ Years Experience",
      specialty: "Hair Coloring, Styling & Keratin",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Meet Our Beauty Experts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our highly skilled professionals bring years of experience,
            creativity, and passion to deliver stunning results.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h3 className="text-xl font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-rose-500 font-semibold mb-2">
                {member.role}
              </p>

              <p className="text-sm text-gray-600 mb-3">
                {member.specialty}
              </p>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-5">
                <Award size={16} className="text-rose-400" />
                {member.experience}
              </div>

              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-500 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
