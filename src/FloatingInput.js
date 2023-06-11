import korLabel from "./korlabel";

const FloatingInput = ({ label, formData, setFormData }) => {
  return (
    <div className="relative py-2 w-1/5">
      <input
        type="text"
        name={label}
        value={formData[label]}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        placeholder="tailwind"
        className="peer h-10 w-full placeholder-transparent border-b-2 border-solid border-blue-500 focus:outline-none focus:border-red-500"
      />
      <label className="absolute left-1 -top-1 text-xs text-gray-900 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-gray-900">
        {korLabel[label]}
      </label>
    </div>
  );
};

export default FloatingInput;
