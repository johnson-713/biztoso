import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../utils/api";
import { v4 as uuidv4 } from "uuid"; 

const fetchLeads = async () => {
  const { data } = await api.get("/leads");
  return data;
};

const createLead = async (lead: { name: string; company: string; email: string }) => {
    const newLead = { id: uuidv4(), ...lead }; // Generate a unique ID
    const { data } = await api.post("/leads", newLead);
    return data;
  };

const updateLead = async (id: string, updates: object) => {
  const { data } = await api.put(`/leads/${id}`, updates);
  return data;
};

const deleteLead = async (id: string) => {
  await api.delete(`/leads/${id}`);
};

export const useLeads = () => {
  return useQuery({ queryKey: ["leads"], queryFn: fetchLeads });
};

export const useCreateLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });
};

export const useUpdateLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: object }) => updateLead(id, updates),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteLead,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["leads"] }),
  });
};
