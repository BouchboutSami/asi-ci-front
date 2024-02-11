import React from 'react';

const ContactAdministratorPage = () => {
  const backgroundColor = '#005FB3';

  return (
    <div className="bg-blue-600 text-black min-h-screen">
      {/* Top Rectangle */}
      <div style={{ backgroundColor }} className="h-8"></div>

      {/* Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Administrator</h1>
        <p className="mb-8">
          Please contact the administrator for further information concerning the process of retrieval of your password.
        </p>
      </div>

      {/* Bottom Rectangle */}
      <div style={{ backgroundColor }} className="h-8"></div>
    </div>
  );
};

export default ContactAdministratorPage;
