'use client';

import { useState } from 'react';

export default function MailingListCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — form submission logic can be added later
  };

  return (
    <div className="mx-auto w-[85%] rounded-[10px] bg-cream px-6 py-12 text-center md:w-[60%]">
      <h2
        className="font-semibold text-brown"
        style={{ fontSize: '33px' }}
      >
        Join our mailing list
      </h2>
      <p className="mx-auto mt-2 max-w-md text-base text-amber-dark">
        Never miss an update from Transformational Sports.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-md border border-brown/20 bg-white px-4 py-3 text-sm text-near-black placeholder:text-[#bfbfbf] focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-amber px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-white transition-colors duration-200 hover:bg-amber-dark sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
