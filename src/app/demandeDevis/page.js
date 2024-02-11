'use client'
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";


const DemandeDevis = () => {
    // State for form fields
    const [organisme, setOrganisme] = useState('');
    const [numTel, setNumTel] = useState('');
    const [email, setEmail] = useState('');
    const [siege, setSiege] = useState('');
    const [nbParticipants, setNbParticipants] = useState('');
    const [date, setDate] = useState('');
    const [theme, setTheme] = useState('WEB');


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
                        Demande de devis
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="theme" className="block text-sm font-medium text-gray-600">
                                Theme
                            </label>
                            <p className="text-lg font-black text-blue">{theme}</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="organisme" className="block text-sm font-medium text-gray-600">
                                Organisme
                            </label>
                            <input
                                type="text"
                                id="organisme"
                                className="mt-1 p-2 border rounded w-full"
                                onChange={(e) => setOrganisme(e.target.value)}
                                value={organisme}
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

                        <div className="mb-4">
                            <label htmlFor="siege" className="block text-sm font-medium text-gray-600">
                                Siege
                            </label>
                            <input
                                type="text"
                                id="siege"
                                className="mt-1 p-2 border rounded w-full"
                                onChange={(e) => setSiege(e.target.value)}
                                value={siege}
                                required
                            />
                        </div>

                        <div className="flex mb-4">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="nbParticipants" className="block text-sm font-medium text-gray-600">
                                    Nb Participants
                                </label>
                                <input
                                    type="number"
                                    id="nbParticipants"
                                    className="mt-1 p-2 border rounded w-full"
                                    onChange={(e) => setNbParticipants(e.target.value)}
                                    value={nbParticipants}
                                    required
                                />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="mt-1 p-2 border rounded w-full"
                                    onChange={(e) => setDate(e.target.value)}
                                    value={date}
                                />
                            </div>
                        </div>
< div className='flex justify-end'>
                        <button
                            type="submit"
                            className="bg-blue text-white text-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        >
                            Soumettre la demande
                        </button>
                        </div>
                    </form>
                </div>

                {/* Right side with image */}
                <div className="w-1/2 flex justify-end">
                    <img src="/images/devis.png" alt="Devis" className="w-99 h-auto ml-auto" />
                </div>
            </div>
        </div>
    );
};

export default DemandeDevis;
