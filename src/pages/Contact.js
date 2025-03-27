import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, surname, phone, email, message } = formData;

    if (!name || !surname || !phone || !email || !message) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    emailjs.send(
      'service_ie5obdc', 
      'template_g8d8bc8', 
      { name, surname, phone, email, message },
      '0ji4y8VBCCCUH1FUW'
    )
    .then(() => {
      setIsSent(true);
      setError('');
      setFormData({ name: '', surname: '', email: '', message: '' });
    })
    .catch(() => setError('Une erreur est survenue. Réessayez plus tard.'));

  };
  const { t } = useTranslation();
  return (
    <div className='Contact-page'>
      <div data-aos="fade-up" className='contact-page-block1'>
        <div className='contact-page-block1-text'>
          <h1>{t("text36")}</h1>
          <p>{t("text377")}</p>
        </div>
      </div>
      <div className='contact-page-block3'></div>
      <div data-aos="fade-up" className='contact-page-block2'>
        <div className='contact-class'>
          <h1>{t("text72")}</h1>
          {isSent && <p style={{ color: 'green' }}>Message envoyé avec succès !</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form className='form-class' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} />
            <input type="text" name="surname" placeholder="Prénom" value={formData.surname} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} />
            <button type="submit">{t("text38")}</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;