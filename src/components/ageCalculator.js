import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    if (birthYear && !isNaN(birthYear)) {
      const calculatedAge = currentYear - parseInt(birthYear);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  let message = '';

  if (age === null) {
    message = 'Please enter a valid birth year.';
  } else if (age < 0) {
    message = 'You entered a future birth year. Please enter a valid birth year.';
  } else if (age < 18) {
    message = `You are ${age} years old. You are underage.`;
  } else if (age >= 18 && age < 65) {
    message = `You are ${age} years old. You are of working age.`;
  } else {
    message = `You are ${age} years old. You are a senior citizen.`;
  }

  return (
    <div>
      <h2>Age Calculator</h2>
      <div>
        <label htmlFor="birthYear">Enter your birth year:</label>
        <input
          type="text"
          id="birthYear"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          placeholder="e.g., 1990"
        />
        <button onClick={calculateAge}>Calculate</button>
      </div>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default AgeCalculator;
