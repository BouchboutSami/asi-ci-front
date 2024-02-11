'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";


const devenirFormateur = () => {
    // State for form fields
    const [fullName, setFullName] = useState('');
    const [numTel, setNumTel] = useState('');
    const [email, setEmail] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [file, setFile] = useState(null);
    // Sample dynamic table data
    const tableData = [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
        // Add more data as needed
    ];

    // State to store selected options
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Event handler for changing selected options
    const handleCheckboxChange = (value) => {
        const updatedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter((item) => item !== value)
            : [...selectedOptions, value];

        setSelectedOptions(updatedOptions);
    };
    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Using FileReader to read the file and convert it to a data URL
        const reader = new FileReader();
        reader.onload = () => {
            setImageLink(reader.result);
        };

        reader.readAsDataURL(selectedFile);
    };


    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted!');
    };

    return (
        <div> <Navbar />
            <div className="flex">

                {/* Left side with form */}
                <div className="w-1/2 p-8">
                    <h1 className="text-blue font-bold border-b-2 border-blue-700 pb-1 mb-4">
                        Devenir un de nos formateurs
                    </h1>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                                Fullname
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                className="mt-1 p-2 border rounded w-full"
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numTel" className="block text-sm font-medium text-gray-600">
                                Num Tel
                            </label>
                            <input
                                type="tel"
                                id="numTel"
                                className="mt-1 p-2 border rounded w-full"
                                onChange={(e) => setNumTel(e.target.value)}
                                value={numTel}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 border rounded w-full"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                        </div>
                        {/* Image input field */}
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                                Photo
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="mt-1 p-2 border rounded w-full bg-darkblue text-white"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6 absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </div>
                            {imageLink && (
                                <img src={imageLink} alt="Selected" className="mt-2 max-h-[150px] w-full object-cover" />
                            )}
                        </div>
                        {/* Checkbox input field */}
                        <div className="mb-4">
  <label className="block text-sm font-medium text-gray-600 mb-2">Competences</label>
  {tableData.map((item) => (
    <div key={item.id} className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`option-${item.id}`}
        className="mr-2 focus:ring-blue h-4 w-4 text-blue border-gray-300 rounded"
        value={item.label}
        checked={selectedOptions.includes(item.label)}
        onChange={() => handleCheckboxChange(item.label)}
      />
      <label htmlFor={`option-${item.id}`} className="text-gray-700">{item.label}</label>
    </div>
  ))}
</div>

                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="bg-blue text-white text-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                        Soumettre
                    </button>
                </div>
            </form>
        </div>

                {/* Right side with image */ }
    <div className="w-1/2 flex justify-end">
        <img src="/images/formateur.png" alt="Devis" className="w-99 h-auto ml-auto " />
    </div>
            </div >
        </div >
    );
};

export default devenirFormateur;
