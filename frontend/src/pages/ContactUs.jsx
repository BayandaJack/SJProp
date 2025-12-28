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

        // send mail info to backend
        try {

            const res = await fetch('https://sjprop.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req),
            });

            alert("Email sent successfully!");

        } catch (error) {
            console.log(error);
        }

        // clear form
        setName("");
        setEmail("");
        setCellno("");
        setMessage("");

    }


    return (
        <div className="bg-white min-h-screen py-10 px-4 md:px-20 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-8">Contact Us</h1>
            <div className="w-full max-w-4xl bg-gray-50 rounded-lg shadow-md p-8 mb-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                    <p className="text-gray-700 text-lg">We’d love to hear from you! Whether you have a question about our services, want to schedule a viewing, or just want to say hello, our team is ready to help.</p>
                </div>
                <div className="flex-col items-center justify-center-safe md:grid-cols-2 gap-8">
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
                            <span className="ml-2 text-gray-700">Mon-Sun: 8am - 5pm</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Follow Us</h2>
                <div className="flex justify-center gap-6 text-lg">
                    <a href="https://www.facebook.com/profile.php?id=61555667144473" className="text-red-500 hover:underline">Facebook</a>
                    <a href="https://www.instagram.com/sj.prop/" className="text-red-500 hover:underline">Instagram</a>
                    <a href="https://www.tiktok.com/@sjprop" className="text-red-500 hover:underline">Tiktok</a>
                    <a href="https://www.linkedin.com/in/sj-prop-414a853a1/" className="text-red-500 hover:underline">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}