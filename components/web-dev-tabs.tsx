"use client";
import { useState } from "react";
import { Card } from "./ui/card";

export default function WebDevTabs() {
    const cards = [
        {
        title: "Web Development",
        description:
            "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        },
        {
        title: "React.js",
        description:
            "Dive into React.js, a popular JavaScript library for building user interfaces.",
        tech: ["React", "JavaScript", "CSS"],
        },
        {
        title: "Node.js",
        description:
            "Explore Node.js for server-side development and building scalable applications.",
        tech: ["Node.js", "Express", "MongoDB"],
        },
    ];
  const [step, setStep] = useState(0); // Default to first card

  return (
    <div className="max-w-xl mx-auto p-4">
      {/* Tab Buttons */}
      <div className="flex space-x-4 justify-center mb-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setStep(index)}
            className={`px-4 py-2 rounded-md ${
              step === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Card Content */}
      <div className="border rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-xl font-semibold mb-2">{cards[step].title}</h3>
        <p className="text-gray-700 mb-4">{cards[step].description}</p>
        <ul className="flex flex-wrap gap-2">
          {cards[step].tech.map((tech, idx) => (
            <li
              key={idx}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
