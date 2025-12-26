import { useState } from "react";

export default function ContactUs() {
    // business logic 
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [cellno, setCellno ] = useState("");
    const [message, setMessage ] = useState("");

    async function handleSubmit(event) {
        console.log("Submitting contact form...");
        event.preventDefault();
        // prep data in object
        const req = {
            name,
            email,
            cellno,
            message
        }

        //clear the form
        setName("");
        setEmail("");
        setCellno("");
        setMessage("");

        // send mail info to backend
        const res = await fetch('http://localhost:4000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req),
        });
        
        console.log(res);
        alert("Email sent successfully!");

    }


    return (
        <div className="bg-white min-h-screen py-10 px-4 md:px-20 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-8">Contact Us</h1>
            <div className="w-full max-w-4xl bg-gray-50 rounded-lg shadow-md p-8 mb-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                    <p className="text-gray-700 text-lg">We’d love to hear from you! Whether you have a question about our services, want to schedule a viewing, or just want to say hello, our team is ready to help.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4">
                            <span className="font-semibold text-gray-800">Phone:</span>
                            <span className="ml-2 text-gray-700">+27 12 667 5183</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold text-gray-800">Email:</span>
                            <span className="ml-2 text-gray-700">centurion@sjprop.co.za</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold text-gray-800">Office:</span>
                            <span className="ml-2 text-gray-700">122 South Street, Centurion, South Africa</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-semibold text-gray-800">Hours:</span>
                            <span className="ml-2 text-gray-700">Mon-Fri: 8am - 5pm</span>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-red-500 mb-2">Send Us a Message</h3>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            required 
                        />

                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            required 
                        />

                        <input 
                            type="cellno" 
                            placeholder="Your CellNo" 
                            value={cellno}
                            onChange={(e) => setCellno(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            required 
                        />

                        <textarea 
                            placeholder="Your Message" 
                            rows={4} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" 
                            required
                        >
                        </textarea>

                        <button 
                            type="button" 
                            className="bg-red-500 text-white font-bold py-2 rounded hover:bg-red-600 transition hover:cursor-pointer"
                            onClick={handleSubmit}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Follow Us</h2>
                <div className="flex justify-center gap-6 text-lg">
                    <a href="https://www.facebook.com/profile.php?id=61555667144473" className="text-red-500 hover:underline">Facebook</a>
                    <a href="https://www.instagram.com/sj.prop/" className="text-red-500 hover:underline">Instagram</a>
                    <a href="https://www.tiktok.com/@sjprop" className="text-red-500 hover:underline">Tiktok</a>
                </div>
            </div>
        </div>
    );
}