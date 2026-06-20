export default function SkillRow({ name, category, hours, onAddHour }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <div className="mb-3 sm:mb-0">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
          {category}
        </span>
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <div className="text-right">
          <p className="text-sm text-gray-500">Studied</p>
          <p className="font-bold text-gray-800">{hours} hrs</p>
        </div>
      </div>
    </div>
  );
}
