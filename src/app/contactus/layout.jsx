import AboutNavbar from '@/components/Navbar';
import React from 'react'

export default function layout({ children }) {
  return (
    <>
      <AboutNavbar />
      {children}
    </>
  );
}
