import { useState } from "react";
import LeadGeneration from "../components/LeadGeneration";

interface Listing {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const Marketplace = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [newListing, setNewListing] = useState<{ title: string; price: string; images: File[] }>({
    title: "",
    price: "",
    images: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setNewListing({ ...newListing, images: [...newListing.images, ...Array.from(files)] });
    }
  };

  const handleAddListing = () => {
    const id = listings.length + 1;
    setListings([
      ...listings,
      { id, title: newListing.title, price: parseFloat(newListing.price), images: newListing.images.map((file) => URL.createObjectURL(file)) },
    ]);
    setNewListing({ title: "", price: "", images: [] });
  };

  const handleDeleteListing = (id: number) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Marketplace Listings</h2>

      <div className="space-y-4">
        <input className="w-full border p-3 rounded-md" type="text" name="title" placeholder="Product Name" value={newListing.title} onChange={handleInputChange} required />
        <input className="w-full border p-3 rounded-md" type="number" name="price" placeholder="Price" value={newListing.price} onChange={handleInputChange} required />

        <input type="file" accept="image/png, image/jpeg" multiple onChange={handleImageUpload} className="w-full border p-2 rounded-md" />

        <button onClick={handleAddListing} className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">Add Listing</button>
      </div>

      <h3 className="text-lg font-bold mt-6">Product Listings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <div key={listing.id} className="border p-3 rounded-md shadow-md">
            <h4 className="font-semibold">{listing.title}</h4>
            <p className="text-gray-600">Price: ${listing.price}</p>
            <div className="flex space-x-2 mt-2">
              {listing.images.map((image, index) => (
                <img key={index} src={image} alt="Product" className="w-16 h-16 rounded-md" />
              ))}
            </div>
            <button onClick={() => handleDeleteListing(listing.id)} className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">Delete</button>
          </div>
        ))}
      </div>

      <LeadGeneration />
    </div>
  );
};

export default Marketplace;
