const FAQs = () => {
  return (
    <section className="py-24 bg-rose-50 max-w-full mx-auto px-4">
      <h1 className="text-5xl font-bold mb-10 text-center">FAQs</h1>

      {[
        "Do you offer bridal trials?",
        "Which products do you use?",
        "Is advance booking required?"
      ].map(q => (
        <div key={q} className="mb-6 bg-white p-6 max-w-5xl mx-auto rounded-xl shadow">
          <h3 className="font-bold">{q}</h3>
          <p className="text-gray-600 mt-2">Yes, absolutely. Please contact us.</p>
        </div>
      ))}
    </section>
  );
};

export default FAQs;
