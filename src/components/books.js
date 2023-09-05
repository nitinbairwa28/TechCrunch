import React from 'react';

import Card from './card';
 

function Books() {
  return (
    
    <div className="App">
      <h1>Books</h1>
      <div className="card-container">
        <Card
          title="Sherlock Homes "
          description="By  Arthur Conan Doyle"
          image src="pexels-photo-132548.jpg"
        />
        <Card
          title="Atomic Habits"
          description="By James Clear "
          image="C:\Users\Nitin  bairwa\Desktop\Atomic Habits.webp"
        />
         <Card
          title="Hindus in Hindu Rashtra "
          description="by Anand Ranganathan"
          image="C:\Users\Nitin  bairwa\Desktop\Hindus in Hindu Rashtra.webp"
        />
         <Card
          title="The Psychology Of Money"
          description="by Morgan Housel "
          image="C:\Users\Nitin  bairwa\Desktop\The Psychology of money.webp"
        />

        {/* Add more Card components as needed */}
      </div>
    </div>
  );
}

export default Books;
