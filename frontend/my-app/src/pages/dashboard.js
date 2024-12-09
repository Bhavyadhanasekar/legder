// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export function dashboard() {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [userId] = useState(1); // Replace with actual user ID (from Clerk or other sources)

//   useEffect(() => {
//     // Fetch transactions from the backend
//     axios.get(`http://localhost:3010/api/transactions/getAllByUserID/${userId}`)
//       .then((response) => {
//         setTransactions(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the transactions!", error);
//         setLoading(false);
//       });
//   }, [userId]);

//   return (
//     <div className="dashboard">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h2>Transactions</h2>
//           <ul>
//             {transactions.map((transaction) => (
//               <li key={transaction.id}>
//                 {transaction.description} - {transaction.amount} - {transaction.category}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }




// src/pages/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
    </div>
  );
}

export default Dashboard;
