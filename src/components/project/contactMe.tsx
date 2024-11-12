"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export default function ContactMe() {
  const placeholders = [
    "Got a project that needs a trusted partner?",
    "Need a problem solved, no questions asked?",
    "Have a project that requires finesse and precision?",
    "Need a reliable ally to handle the heavy lifting?",
    "Looking to make your vision an offer it can't refuse?",
    "Ready to discuss a deal that benefits us both?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
