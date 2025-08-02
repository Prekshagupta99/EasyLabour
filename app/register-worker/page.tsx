'use client';

import { useState } from 'react';

export default function RegisterWorker() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    address: '',
    idFile: null as File | null,
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    if (name === 'phone') {
      if (!/^\d{0,10}$/.test(value)) {
        setError('Phone number must be numeric and up to 10 digits');
      } else {
        setError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.state || !formData.address || !formData.idFile) {
      setError('Please fill in all fields and upload a document.');
      return;
    }

    if (formData.phone.length !== 10) {
      setError('Phone number must be exactly 10 digits.');
      return;
    }

    setError('');
    console.log('Submitted data:', formData);
    alert('Form submitted successfully!');

    //Add actual API call to backend
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Register as a Labour</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number (+91)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={10}
            pattern="\d*"
            placeholder="10-digit number"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Upload ID (PDF or Image)</label>
          <input
            type="file"
            name="idFile"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
