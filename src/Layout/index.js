import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './NavbarMenu';
import Footer from './FooterMenu';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="mt-4">{ children }</Container>
      <Footer />
    </>
  )
}