import React from 'react';

export default function FooterMenu() {
  return (
    <div className="main-footer mt-5">
      <div className="container">
        <div className="footer-bottom">
          <p className="text-center flex">
            &copy; {new Date().getFullYear()} - webinar
          </p>
        </div>
      </div>
    </div>
  );
}