import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200   ">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                {/* Brand */}
                
                <div className="mt-5">
                    <h2 className="text-2xl font-bold mb-3">
                        <span className="text-white">Stay</span>
                        <span className="text-orange-400"> Here</span>
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Your comfort is our priority. Book the best hotels at the best prices.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Rooms</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Offers</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold mb-3 text-white">Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-orange-400 transition">Room Service</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Car Rental</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition">Event Booking</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="mt-5">
                    <h3 className="text-xl font-semibold mb-3 text-white">Contact</h3>
                    <p className="flex items-center gap-2 mb-2">
                        {/* Email SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h2a2 2 0 012 2v6H4v-6a2 2 0 012-2h2m4 0V6m0 6L4 6m16 6l-8-6-8 6" />
                        </svg>
                        support@satyHere.com
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        {/* Phone SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.6a1 1 0 01.894.553l1.486 2.973a1 1 0 01-.152 1.187L8.414 9.414a16.014 16.014 0 006.172 6.172l1.7-1.7a1 1 0 011.187-.152l2.973 1.486A1 1 0 0121 15.4V19a2 2 0 01-2 2h-1C7.373 21 3 16.627 3 12V5z" />
                        </svg>
                        +1 (800) 555-1234
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        {/* Location SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                        123 Purnia Road, Bihar, India
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-3">
                        {/* Facebook */}
                        <a href="#" className="hover:text-orange-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="hover:text-orange-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.264 2.242 1.325 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.264-3.608 1.325-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.264-2.242-1.325-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608C4.533 2.513 5.8 2.225 7.166 2.163 8.432 2.105 8.811 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.609.34 3.678 1.271 2.747 2.203 2.534 3.365 2.477 4.646.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.057 1.281.27 2.443 1.201 3.374.932.932 2.094 1.145 3.374 1.201C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.443-.27 3.374-1.201.932-.932 1.145-2.094 1.201-3.374C23.988 15.668 24 15.259 24 12s-.012-3.668-.07-4.948c-.057-1.281-.27-2.443-1.201-3.374-.932-.932-2.094-1.145-3.374-1.201C15.668.012 15.259 0 12 0z" />
                                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                                <circle cx="18.406" cy="5.594" r="1.44" />
                            </svg>
                        </a>

                        {/* Gmail */}
                        <a href="mailto:support@hotelbooking.com" className="hover:text-orange-400 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12.713l-11.713-7.713h23.426l-11.713 7.713zm0 2.574l-12-7.713v12.426h24v-12.426l-12 7.713z" />
                            </svg>
                        </a>
                    </div>
                </div>


            </div>

            <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Stay here — All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
