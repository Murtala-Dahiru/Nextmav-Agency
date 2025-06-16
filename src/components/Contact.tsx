  import { supabase } from '../lib/supabaseClient';
  import React, { useState } from 'react';
  
  const Contact = () => { const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    division: '',
    message: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Form submitted:', formData);

  const { data, error } = await supabase.from('contact_form').insert([
    {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      division: formData.division || null, // optional
      message: formData.message,
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error.message);
    alert("❌ Submission failed: " + error.message);
    return;
  }

  alert("✅ Your message was submitted successfully!");
  console.log("Supabase response:", data);

  // Clear the form
  setFormData({
    name: '',
    email: '',
    company: '',
    division: '',
    message: '',
  });
};

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Start Your Transformation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to scale smarter and innovate faster? Let's discuss how NextMav can transform your business.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>Email: Nextmavagency@gmail.com</p>
              <p>Phone: +2348039326564</p>
              <p>Address: Md Innovation Drive, Tech City</p>
            </div>
  
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
  
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">What to Expect</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Strategic consultation within 24 hours</li>
                <li>• Custom solution proposal</li>
                <li>• Clear project roadmap and timeline</li>
                <li>• Transparent pricing and deliverables</li>
              </ul>
            </div>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>
  
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              />
            </div>
  
            <div>
              <label htmlFor="division" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interested Division
              </label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              >
                <option value="">Select a division</option>
                <option value="tech">NextMav Tech</option>
                <option value="media">NextMav Media</option>
                <option value="both">Both Divisions</option>
              </select>
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project, goals, and how we can help..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              ></textarea>
            </div>
  
            <button type="submit" className="btn-primary w-full">
              Start Your Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
  };

  
  export default Contact;