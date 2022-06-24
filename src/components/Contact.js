// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = () => {
  return (
    <div className="kantak">
      <img className="gambar" src={data.photo} alt={data.name} />
      <div className="konten">
        <h2 className="kontak2">{data.name}</h2>
        <h5 className="kontak1">{data.phone}</h5>
        <p className="kontak3">{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
