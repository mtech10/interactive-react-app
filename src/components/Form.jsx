import React, { useState } from "react";

const categories = ["Frontend", "Backend", "Database", "DevOps"];
const Form = ({ setSkills }) => {
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillHours, setNewSkillHours] = useState("");
  const [newSkillCategory, setNewSkillCategory] = useState("");
  const handleAddSkill = (e) => {
    e.preventDefault();

    if (!newSkillName || !newSkillHours || !newSkillCategory) return;

    const newSkillEntry = {
      id: Date.now(),
      name: newSkillName,
      category: newSkillCategory,
      hours: parseInt(newSkillHours, 10),
    };

    setSkills((prev) => [...prev, newSkillEntry]);
    setNewSkillName("");
    setNewSkillHours("");
    setNewSkillCategory("");
  };
  return (
    <form
      onSubmit={handleAddSkill}
      className="bg-white gap-3 p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row "
    >
      <input
        type="text"
        placeholder="Set New Skills"
        value={newSkillName}
        onChange={(e) => setNewSkillName(e.target.value)}
        className="flex-2 sm:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        placeholder="Number of Hours"
        value={newSkillHours}
        onChange={(e) => setNewSkillHours(e.target.value)}
        className="flex-1 sm:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <select
        value={newSkillCategory}
        onChange={(e) => setNewSkillCategory(e.target.value)}
        className="sm:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled>
          Category
        </option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Add SKill
      </button>
    </form>
  );
};

export default Form;
