import { useState } from "react";
import { useCreateLead } from "../hooks/useLeads";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    status: "New", // Default status
    purpose: "",
  });

  const { mutate, isPending, isSuccess, isError } = useCreateLead();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
    setFormData({ name: "", company: "", email: "", status: "New", purpose: "" });
  };

  return (
    <div className="p-6 mt-8 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Expand Your Business Network Effortlessly</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        {/* Name Input */}
        <label className="block text-gray-700 font-semibold mb-1 text-left">Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-md mb-3" />

        {/* Company Input */}
        <label className="block text-gray-700 font-semibold mb-1 text-left  ">Company Name</label>
        <input type="text" name="company" placeholder="Enter company name" value={formData.company} onChange={handleChange} required className="w-full p-2 border rounded-md mb-3" />

        {/* Email Input */}
        <label className="block text-gray-700 font-semibold mb-1 text-left  ">Email Address</label>
        <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-md mb-3" />

        {/* Status Dropdown */}
        <label className="block text-gray-700 font-semibold mb-1 text-left  ">Lead Status</label>
        <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded-md mb-3">
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Closed">Closed</option>
        </select>

        {/* Purpose Textarea */}
        <label className="block text-gray-700 font-semibold mb-1 text-left  ">Purpose</label>
        <textarea name="purpose" placeholder="Describe the lead purpose..." value={formData.purpose} onChange={handleChange} required className="w-full p-2 border rounded-md mb-3 h-24"></textarea>

        {/* Submit Button */}
        <button type="submit" disabled={isPending} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          {isPending ? "Submitting..." : "Submit Lead"}
        </button>

        {/* Success & Error Messages */}
        {isSuccess && <p className="text-green-600 mt-2">Lead submitted successfully!</p>}
        {isError && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
};

export default LeadForm;
