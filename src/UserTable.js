import React from 'react';

function UserTable({ users, onDelete, onExport, onSignUp }) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <button onClick={onSignUp} className="bg-blue-500 text-white px-4 py-2 rounded">SIGN UP</button>
        <button onClick={onExport} className="bg-green-500 text-white px-4 py-2 rounded">EXPORT</button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => onDelete(user._id)} className="bg-red-500 text-white px-2 py-1 rounded">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;