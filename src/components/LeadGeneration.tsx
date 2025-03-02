import { useState, useEffect } from "react";
import { useLeads } from "../hooks/useLeads";

interface Lead {
  id: number;
  name: string;
  company: string;
  status: "New" | "Contacted";
}

const LeadGeneration = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<"all" | "New" | "Contacted">("all");

  const {data} = useLeads()

  console.log(data)

  useEffect(() => {
    // Simulating API fetch
    setLeads(data);
  }, [data]);

  const handleClaimLead = (id: number) => {
    setLeads((prevLeads) =>
      prevLeads?.map((lead) =>
        lead.id === id ? { ...lead, status: "Contacted" } : lead
      )
    );
  };

  const filteredLeads = leads?.filter((lead) =>
    filter === "all" ? true : lead?.status === filter
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800">Lead Generation</h2>

      {/* Filter Options */}
      <div className="mt-4 flex space-x-4">
        {["all", "New", "Contacted"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as "all" | "New" | "Contacted")}
            className={`px-4 cursor-pointer py-2 rounded-md ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Leads List */}
      <div className="mt-4">
        {filteredLeads?.length > 0 ? (
          filteredLeads?.map((lead) => (
            <div key={lead.id} className="p-4 border-b flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{lead.name}</h3>
                <p className="text-gray-600">{lead.company}</p>
              </div>
              {lead.status === "New" && (
                <button
                  onClick={() => handleClaimLead(lead.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer"
                >
                  Claim Lead
                </button>
              )}
              {lead.status === "Contacted" && (
                <span className="text-green-600 font-semibold">Claimed</span>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No leads available.</p>
        )}
      </div>
    </div>
  );
};

export default LeadGeneration;
