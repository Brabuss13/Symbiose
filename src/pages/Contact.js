import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
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

    const { name, surname, email, message } = formData;

    if (!name || !surname || !email || !message) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    emailjs.send(
      'service_ie5obdc', 
      'template_g8d8bc8', 
      { name, surname, email, message },
      '0ji4y8VBCCCUH1FUW'
    )
    .then(() => {
      setIsSent(true);
      setError('');
      setFormData({ name: '', surname: '', email: '', message: '' });
    })
    .catch(() => setError('Une erreur est survenue. Réessayez plus tard.'));
  };

  return (
    <div className='contact-class'>
      <h1>Contactez-nous</h1>
      {isSent && <p style={{ color: 'green' }}>Message envoyé avec succès !</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='form-class' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} />
        <input type="text" name="surname" placeholder="Prénom" value={formData.surname} onChange={handleChange} />
        <input type="email" name="email" placeholder="Adresse email" value={formData.email} onChange={handleChange} />
        <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;