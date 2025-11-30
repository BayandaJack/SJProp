import PromiseCard from "../components/DisplayCards/PromiseCard";

export default function About() {
    return (
        <div className="bg-white min-h-screen py-10 px-4 md:px-20">
            <h1 className="text-5xl font-extrabold text-center text-red-600 mb-8">About SJProp</h1>

            {/* Who Are We */}
            <section className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div className="md:w-2/3 bg-gray-100 rounded-lg shadow-md p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Are We?</h2>
                    <p className="text-lg text-gray-700">
                        At <span className="font-semibold text-red-500">SJProp</span>, we believe that finding the perfect property should be an exciting and seamless experience. Founded by <span className="font-semibold">Samson Jack</span>, our agency is built on a foundation of trust, integrity, and a genuine passion for helping people achieve their real estate dreams. Whether you’re searching for your first home, a new investment, or a place to grow your business, SJProp is dedicated to guiding you every step of the way.<br /><br />
                        Our team combines deep local expertise with a commitment to personalized service, ensuring that every client feels valued and understood. We pride ourselves on transparency, professionalism, and a relentless drive to deliver results that exceed expectations. At SJProp, your goals become our mission.<br /><br />
                        Discover the difference with SJProp—where your property journey begins.
                    </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <img src="/random.png" alt="SJProp Team" className="rounded-lg shadow-lg w-full h-auto object-cover max-h-72" />
                </div>
            </section>

            {/* Our Mission */}
            <section className="mb-12">
                <div className="bg-red-50 rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold text-red-600 mb-3">Our Mission</h2>
                    <p className="text-gray-700 text-lg">
                        To empower our clients with honest advice, expert guidance, and exceptional service, making every property transaction smooth and rewarding.
                    </p>
                </div>
            </section>

            {/* Our Services */}
            <section className="mb-12">
                <div className="bg-gray-100 rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Services</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                        <li>Residential & Commercial Property Sales</li>
                        <li>Property Rentals</li>
                        <li>Investment Consulting</li>
                        <li>Property Management</li>
                        <li>Personalized Property Search</li>
                    </ul>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12">
                <div className="bg-white border-l-4 border-red-500 rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                            <PromiseCard title="Trusted Agents" text="Verified and experienced agents." img="/trust.png" />
                            <PromiseCard title="Easy Communication" text="Chat directly with owners or agents." img="/comms.jpg" />
                            <PromiseCard title="Affordable Deals" text="Find your dream home within budget." img="/affordable.png" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="mb-12">
                <div className="bg-gray-50 rounded-lg shadow p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <img src="/team-member-1.jpg" alt="Team Member" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-red-500" />
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Samson Jack</h3>
                            <p className="text-red-600 font-semibold mb-2">Founder & Lead Agent</p>
                            <p className="text-gray-700 text-sm">Expert in residential and commercial properties with over 15 years of experience. Dedicated to providing exceptional service to every client.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <img src="/team-member-2.jpg" alt="Team Member" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-red-500" />
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Jane Smith</h3>
                            <p className="text-red-600 font-semibold mb-2">Senior Property Manager</p>
                            <p className="text-gray-700 text-sm">Specializes in property management and investment consulting. Ensures every client receives personalized attention and expert guidance.</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <img src="/team-member-3.jpg" alt="Team Member" className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-red-500" />
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Michael Chen</h3>
                            <p className="text-red-600 font-semibold mb-2">Residential Specialist</p>
                            <p className="text-gray-700 text-sm">Passionate about helping families find their perfect home. Known for exceptional communication and attention to detail.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="mb-8">
                <div className="bg-gray-50 rounded-lg shadow p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
                    <p className="text-gray-700 text-lg mb-2">Ready to start your property journey? <a href="/contact" className="text-red-500 underline">Get in touch</a> with SJProp today!</p>
                </div>
            </section>
        </div>
    );
}