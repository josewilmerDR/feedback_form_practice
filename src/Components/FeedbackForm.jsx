import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        rating: '',
        feedback: ''
      });

      // Handle form input changes
      const handleChange = (event) => {
        // Extract name and value from the input that triggered the event
        //Name and value, are the properties of the event.target object is not a part of input element
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Name: ${formData.name}
          Email: ${formData.email}
          Country: ${formData.country}
          Rating: ${formData.rating}
          Feedback: ${formData.feedback}
        `;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
          console.log('Submitting feedback:', formData);
          setFormData({
            name: '',
            email: '',
            country: '',
            rating: '',
            feedback: ''
          });
          alert('Thank you for your valuable feedback!');
        }
      };
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Your Country"
          value={formData.country}
          onChange={handleChange}
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value="">Your Rating</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="1">⭐️</option>
        </select>
        <label htmlFor="feedback">Your Feedback</label>
        <br />
        <br />
        
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;