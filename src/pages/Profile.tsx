import { useState } from "react";

interface ProfileData {
  name: string;
  location: string;
  description: string;
  logo?: File;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData>({ name: "", location: "", description: "" });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 2 * 1024 * 1024 && ["image/png", "image/jpeg"].includes(file.type)) {
      setProfile({ ...profile, logo: file });
      setLogoPreview(URL.createObjectURL(file));
    } else {
      alert("Invalid file. Please upload a JPG/PNG under 2MB.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile Data:", profile);
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Business Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full border p-3 rounded-md" type="text" name="name" placeholder="Business Name" onChange={handleInputChange} required />
        <input className="w-full border p-3 rounded-md" type="text" name="location" placeholder="Location" onChange={handleInputChange} required />
        <textarea className="w-full border p-3 rounded-md" name="description" placeholder="Description" onChange={handleInputChange} required />

        <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} className="w-full border p-2 rounded-md" />

        {logoPreview && <img src={logoPreview} alt="Preview" className="w-32 h-32 rounded-md mt-2 mx-auto" />}

        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
