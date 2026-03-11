"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionAudience from "@/components/SectionAudience";
import SectionHow from "@/components/SectionHow";
import SectionEquipment from "@/components/SectionEquipment";
import SectionPrices from "@/components/SectionPrices";
import SectionCTA from "@/components/SectionCTA";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Header onBookingClick={openBooking} />
      <main>
        <Hero onBookingClick={openBooking} />
        <SectionAudience />
        <SectionHow />
        <SectionEquipment />
        <SectionPrices onBookingClick={openBooking} />
        <SectionCTA onBookingClick={openBooking} />
      </main>
      <Footer />
      <BookingForm isOpen={bookingOpen} onClose={closeBooking} />
    </>
  );
}
