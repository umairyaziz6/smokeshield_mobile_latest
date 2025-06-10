import { createContext, useContext, useState, Dispatch, SetStateAction } from "react"
import { RecordType } from "~/type"

// Define the context type to include both record and setRecord
interface RecordContextType {
  record: RecordType;
  setRecord: Dispatch<SetStateAction<RecordType>>;
}

// Provide a default empty record and no-op setter
const defaultRecord: RecordType = {
    id: "",
    manufacturedDate: null,
    product: "",
    customerAge: 0,
    retailer: "",
    ic: null,
    factory: null,
    datePurchase: null,
    customerName: null,
    cigaretteId: null
}

export const RecordContext = createContext<RecordContextType>({
  record: defaultRecord,
  setRecord: () => {}
})

// Optional: Create a custom hook for easier context consumption
export const useRecordContext = () => {
  const context = useContext(RecordContext)
  if (!context) {
    throw new Error('useRecordContext must be used within a RecordProvider')
  }
  return context
}

export default function RecordProvider({ children }: { children: React.ReactNode }) {
  const [record, setRecord] = useState<RecordType>(defaultRecord)

  return (
    <RecordContext.Provider value={{ record, setRecord }}>
      {children}
    </RecordContext.Provider>
  )
}