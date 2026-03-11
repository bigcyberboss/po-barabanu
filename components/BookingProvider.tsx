"use client";

import { createContext, useContext, useState, useCallback } from "react";
import BookingForm from "./BookingForm";

interface BookingContextType {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingForm isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
