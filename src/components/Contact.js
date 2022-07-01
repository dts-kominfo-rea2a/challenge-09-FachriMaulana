// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = (props) => {
  return (
    <div className="kantak">
      <img className="gambar" src={props.data.photo} alt={props.data.name} />
      <div className="konten">
        <h2 className="nama">{props.data.name}</h2>
        <h5 className="tlp">{props.data.phone}</h5>
        <p className="mail">{props.data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
