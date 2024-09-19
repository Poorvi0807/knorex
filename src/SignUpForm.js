// import React, { useState } from 'react';
// import './SignUpForm.css';

// function SignUpForm({ onSubmit, onCancel }) {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//       <div>
//         <label htmlFor="firstName" className="block mb-1">First Name</label>
//         <input
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName" className="block mb-1">Last Name</label>
//         <input
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block mb-1">Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded"
//         />
//       </div>
//       <div className="flex justify-end space-x-2">
//         <button type="button" onClick={onCancel} className="px-4 py-2 border border-gray-300 rounded">Cancel</button>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
//       </div>
//     </form>
//   );
// }

// export default SignUpForm;
import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
}

export default SignUpForm;
