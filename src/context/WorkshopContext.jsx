import React, { createContext, useContext, useState, useEffect } from 'react';

const WorkshopContext = createContext(null);

export function WorkshopProvider({ children }) {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('upzy_workshops');
    if (saved) {
      setWorkshops(JSON.parse(saved));
    }
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem('upzy_workshops', JSON.stringify(data));
  };

  const addWorkshop = (workshop) => {
    const newWorkshop = {
      ...workshop,
      id: 'ws_' + Date.now(),
      status: 'pending', // pending → qc_review → approved → published | rejected
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      qcNotes: '',
      approvalNotes: '',
      submittedBy: workshop.submittedBy || 'Admin'
    };
    const updated = [...workshops, newWorkshop];
    setWorkshops(updated);
    saveToStorage(updated);
    return newWorkshop;
  };

  const updateWorkshop = (id, updates) => {
    const updated = workshops.map(ws =>
      ws.id === id ? { ...ws, ...updates, updatedAt: new Date().toISOString() } : ws
    );
    setWorkshops(updated);
    saveToStorage(updated);
  };

  const deleteWorkshop = (id) => {
    const updated = workshops.filter(ws => ws.id !== id);
    setWorkshops(updated);
    saveToStorage(updated);
  };

  // Status transitions
  const submitForQC = (id) => updateWorkshop(id, { status: 'qc_review' });
  const approveQC = (id, notes) => updateWorkshop(id, { status: 'approved', qcNotes: notes });
  const rejectQC = (id, notes) => updateWorkshop(id, { status: 'rejected', qcNotes: notes });
  const publishWorkshop = (id, notes) => updateWorkshop(id, { status: 'published', approvalNotes: notes });
  const rejectByAdmin = (id, notes) => updateWorkshop(id, { status: 'rejected', approvalNotes: notes });

  const getByStatus = (status) => workshops.filter(ws => ws.status === status);
  const getPublished = () => workshops.filter(ws => ws.status === 'published');

  return (
    <WorkshopContext.Provider value={{
      workshops,
      addWorkshop,
      updateWorkshop,
      deleteWorkshop,
      submitForQC,
      approveQC,
      rejectQC,
      publishWorkshop,
      rejectByAdmin,
      getByStatus,
      getPublished
    }}>
      {children}
    </WorkshopContext.Provider>
  );
}

export const useWorkshops = () => useContext(WorkshopContext);
export default WorkshopContext;
