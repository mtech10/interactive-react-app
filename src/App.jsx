import { useState } from "react";
import MetricCard from "./components/MetricCard";
import SkillRow from "./components/SkillRow";
import Form from "./components/Form";

function App() {
  const [skills, setSkills] = useState([]);
  const totalHours = skills.reduce((sum, skill) => sum + skill.hours, 0);
  const activeSkillsCount = skills.length;

  const topCategory =
    skills.length === 0
      ? "N/A"
      : Object.entries(
          skills.reduce((acc, skill) => {
            acc[skill.category] = (acc[skill.category] || 0) + 1;
            return acc;
          }, {}),
        ).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Developer Analytics
          </h1>
          <p className="text-gray-500 mt-2">
            Track your continuous learning and skill mastery.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <MetricCard title="Total Hours" value={totalHours} />
          <MetricCard title="Active Skills" value={activeSkillsCount} />
          <MetricCard title="Top Category" value={topCategory} />
        </section>

        <section>
          <Form setSkills={setSkills} />
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700">
              Skill Breakdown
            </h2>
          </div>

          <div className="flex flex-col">
            {skills.length === 0 ? (
              <p className="text-center text-gray-400 p-6">
                No skills added yet.
              </p>
            ) : (
              skills.map((skill) => (
                <SkillRow
                  key={skill.id}
                  name={skill.name}
                  category={skill.category}
                  hours={skill.hours}
                />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
