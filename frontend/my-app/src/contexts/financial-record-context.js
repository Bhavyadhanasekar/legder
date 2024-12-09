// src/contexts/financial-record-context.js
import React, { createContext, useState, useContext } from "react";

// Create context
const FinancialRecordContext = createContext();

// Provider component
export const FinancialRecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  return (
    <FinancialRecordContext.Provider value={{ records, setRecords }}>
      {children}
    </FinancialRecordContext.Provider>
  );
};

// Custom hook to use the context
export const useFinancialRecords = () => {
  return useContext(FinancialRecordContext);
};
