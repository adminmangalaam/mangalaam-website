export default function About() {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Mike Chen",
      role: "Design Head",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    },
    {
      name: "Emma Davis",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div>
      <div className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About WITECH</h1>
          <p className="text-gray-400 text-lg">
            Leading provider of IT solutions since 2015
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, WITECH has been at the forefront of digital
                innovation, helping businesses transform their operations
                through cutting-edge technology solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced professionals is dedicated to delivering
                exceptional results and building long-term partnerships with our
                clients.
              </p>
              <p className="text-gray-600">
                We believe in the power of technology to solve complex problems
                and drive meaningful business growth.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-light py-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl mb-2">🎯</p>
                <h3 className="font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project we undertake.
                </p>
              </div>
              <div>
                <p className="text-3xl mb-2">🤝</p>
                <h3 className="font-bold mb-2">Partnership</h3>
                <p className="text-gray-600">
                  We build strong partnerships with our clients.
                </p>
              </div>
              <div>
                <p className="text-3xl mb-2">💡</p>
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace innovation and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
