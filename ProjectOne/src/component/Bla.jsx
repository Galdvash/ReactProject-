import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bla = () => {
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
        setCardData(response.data[3]); // אני מניח שאתה צריך רק את הכרטיס הראשון במערך, לכן אני מציב את response.data[0]
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // מציג הודעת טעינה כל עוד הנתונים נטענים
  }

  if (error) {
    return <p>Error: {error}</p>; // מציג הודעת שגיאה במקרה של כישלון בבקשה
  }

  if (!cardData) {
    return <p>No card data available.</p>; // מציג הודעה אם אין נתונים להצגה
  }

  return (
    <div className="card">
      <h2>{cardData.title}</h2>
      <p>{cardData.subtitle}</p>
      {cardData.image && <img src={cardData.image.url} alt={cardData.image.alt} />}
      <p>Phone: {cardData.phone}</p>
      <p>Email: {cardData.email}</p>
      <p>Website: {cardData.web}</p>
      <p>Address: {cardData.address.street}, {cardData.address.city}, {cardData.address.country}</p>
      {/* נוסיף כמה פרטים נוספים לכרטיס אם רצית */}
    </div>
  );
};

export default Bla;
