import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContext";

export default function Items() {
  const { data, onRemove } = useContext(DataContext);
  const [sort, setSort] = useState("name");
  const handleSort = (name: string) => () => setSort(name);

  return (
    <div className="px-10">
      <div className="flex justify-between my-4 align-middle">
        <h1 className="text-2xl">List Item</h1>
        <Link to="/add-item">
          <button className="hover:shadow-form rounded-md bg-primary py-3 px-8 text-base font-semibold text-white outline-none">
            Add item
          </button>
        </Link>
      </div>
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr className="border-b border-slate-300 bg-slate-50">
            {["name", "description", "quantity"].map((c) => (
              <th
                onClick={handleSort(c)}
                className={`${
                  sort === c ? "font-semibold	" : ""
                } capitalize p-4 text-sm font-normal leading-none text-slate-500`}
              >
                {c}
              </th>
            ))}
            <th className="p-4 text-sm font-normal leading-none text-slate-500" />
          </tr>
        </thead>
        <tbody>
          {data
            ?.sort(
              (
                a: { [k: string]: string | number },
                b: { [k: string]: string | number }
              ) => {
                if (a[sort] < b[sort]) {
                  return -1;
                } else if (a > b) {
                  return 1;
                }
                return 0;
              }
            )
            .map((d) => (
              <tr key={d.id} className="hover:bg-slate-50">
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="block font-semibold text-sm text-slate-800">
                    {d.name}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5 max-w-80">
                  <p className="text-sm text-slate-500 truncate ">{d.description}</p>
                </td>
                <td className="p-4 border-b border-slate-200 py-5">
                  <p className="text-sm text-slate-500">{d.quantity}</p>
                </td>

                <td className="p-4 border-b border-slate-200 py-5">
                  <button
                    onClick={() => onRemove(d.id)}
                    type="button"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
