import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function AddItem() {
  const { onAdd } = useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    description: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd({ ...formData, id: new Date().getTime() });
    setFormData({
      name: "",
      quantity: 0,
      description: "",
    });
    navigate("/items");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto w-full max-w-[550px]">
        <h1 className="text-2xl">Add Item</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              value={formData.name}
              placeholder="Enter name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              onChange={onChange}
              value={formData.quantity}
              placeholder="Enter quantity"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <textarea
              rows={4}
              name="description"
              id="description"
              onChange={onChange}
              value={formData.description}
              placeholder="Type your description"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-primary focus:shadow-md"
            />
          </div>

          <div className="flex gap-1">
            <button
              type="button"
              className="w-1/2 hover:shadow-form text-primary border-primary rounded-md border py-3 px-8 text-base font-semibold  outline-none"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button className="w-1/2 hover:shadow-form rounded-md bg-primary py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
