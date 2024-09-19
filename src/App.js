import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import SignUpForm from './SignUpForm';

function App() {
  const [users, setUsers] = useState([]);
  const [showSignUp, setShowSignUp] = useState(false);
   const uri="http://localhost:8000"
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${uri}/api/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (user) => {
    try {
      const response = await fetch(`${uri}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        fetchUsers();
        setShowSignUp(false);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${uri}/api/users/${userId}`, { method: 'DELETE' });
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const exportUsers = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "First Name,Last Name,Email\n"
      + users.map(user => `${user.firstName},${user.lastName},${user.email}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <UserTable 
        users={users} 
        onDelete={deleteUser} 
        onExport={exportUsers}
        onSignUp={() => setShowSignUp(true)}
      />
      {showSignUp && (
        <SignUpForm 
          onSubmit={addUser} 
          onCancel={() => setShowSignUp(false)} 
        />
      )}
    </div>
  );
}

export default App;