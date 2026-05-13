import React, { createContext, useContext, useState, useEffect } from 'react';

const WorkshopContext = createContext();

export const WorkshopProvider = ({ children }) => {
  const [workshops, setWorkshops] = useState(() => {
    try {
      const saved = localStorage.getItem('workshops');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error parsing workshops from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('workshops', JSON.stringify(workshops));
  }, [workshops]);

  const addWorkshop = (workshop) => {
    const newWorkshop = {
      ...workshop,
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setWorkshops([...workshops, newWorkshop]);
  };

  const updateWorkshop = (id, updatedData) => {
    setWorkshops(workshops.map(w => w.id === id ? { ...w, ...updatedData } : w));
  };

  const deleteWorkshop = (id) => {
    setWorkshops(workshops.filter(w => w.id !== id));
  };

  const submitForQC = (id) => {
    updateWorkshop(id, { status: 'qc_review' });
  };

  const approveQC = (id) => {
    updateWorkshop(id, { status: 'approved' });
  };

  const rejectQC = (id) => {
    updateWorkshop(id, { status: 'rejected' });
  };

  const publishWorkshop = (id) => {
    updateWorkshop(id, { status: 'published' });
  };

  const rejectByAdmin = (id) => {
    updateWorkshop(id, { status: 'rejected' });
  };

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
      rejectByAdmin
    }}>
      {children}
    </WorkshopContext.Provider>
  );
};

export const useWorkshops = () => {
  const context = useContext(WorkshopContext);
  if (!context) {
    throw new Error('useWorkshops must be used within a WorkshopProvider');
  }
  return context;
};
