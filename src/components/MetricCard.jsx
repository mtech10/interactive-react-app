export default function MetricCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center sm:items-start justify-center transition-all hover:shadow-md">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">
        {title}
      </h3>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
