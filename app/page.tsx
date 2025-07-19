'use client';

export default function Home() {
  const services = [
    { name: 'Labourer', price: 120, image: '/labourer.jpg' },
    { name: 'Painter', price: 150, image: '/painter.jpg' },
    { name: 'Electrician', price: 200, image: '/electrician.jpg' },
    { name: 'Plumber', price: 180, image: '/plumber.jpg' }
  ];

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-teal-800 mb-10">Available Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition hover:scale-[1.02] cursor-pointer border border-gray-200"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{service.name}</h2>
            <p className="text-teal-700 font-medium">₹{service.price} / hour</p>
          </div>
        ))}
      </div>
    </main>
  );
}
