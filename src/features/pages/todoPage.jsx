import { useSelector, useDispatch } from "react-redux";
import {
  deleteFunction,
  addFunction,
  eddFunc,
  searchFunc,
} from "../todo/todoSlice";
import { useState } from "react";
export default function TodoPage() {
  const { todoDate, searchValue } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const [addModal, setaddModal] = useState("");
  const [addName, setAddName] = useState("");
  const [addSurName, setAddSurName] = useState("");
  const [addAge, setaddAge] = useState("");
  const [idxx, setIdxx] = useState(null);

  const [eddModal, setEddmodal] = useState(false);
  const [eddName, setEddname] = useState("");
  const [eddSurname, setEddsurname] = useState("");
  const [eddAge, setEddage] = useState("");

  const dobavitFunction = () => {
    const user = {
      id: todoDate.length + 1,
      name: addName,
      surName: addSurName,
      age: addAge,
    };
    dispatch(addFunction(user));
    setaddModal(false);
    setAddName("");
    setAddSurName("");
    setaddAge("");
  };

  const outputEditFunction = (element) => {
    setEddmodal(true);
    setEddage(element.age);
    setEddname(element.name);
    setEddsurname(element.surName);
    setIdxx(element.id);
  };

  const editMainFunction = () => {
    const user = {
      id: idxx,
      name: eddName,
      surName: eddSurname,
      age: eddAge,
    };
    dispatch(eddFunc(user));
  };

  console.log(todoDate);

  return (
    <>
      reduxJS toolkit
      <div
        className="bg-violet-400 flex w-[80%] rounded shadow-black/70 shadow-sm
         m-auto
      items-center mt-2 mb-2 p-1 justify-between"
      >
        <button
          className="bg-violet-400 border-2 rounded  border-violet-800/30 p-2"
          onClick={() => setaddModal(true)}
        >
          Add
        </button>
        <input
          type="text"
          name=""
          placeholder="Search"
          id=""
          value={searchValue}
          onChange={(e) => dispatch(searchFunc(e.target.value))}
          className="h-8 bg-violet-300 rounded placeholder:text-black placeholder:p-2 border-1 border-black/30 "
        />
      </div>
      {addModal && (
        <div className="bg-gray-200 mb-4 mt-4 rounded flex flex-col text-center w-[40%]  m-auto space-y-3 p-1">
          <h1>Dobavit User</h1>
          <div className="flex flex-col w-[80%] m-auto space-y-2 ">
            <input
              className="bg-gray-50 rounded p-1"
              type="text"
              placeholder="name"
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            />
            <input
              className="bg-gray-50 rounded p-1"
              type="text"
              placeholder="Surname"
              value={addSurName}
              onChange={(e) => setAddSurName(e.target.value)}
            />
            <input
              className="bg-gray-50 rounded p-1"
              type="number"
              placeholder="age"
              value={addAge}
              onChange={(e) => setaddAge(e.target.value)}
            />
          </div>
          <div className="w-[70%] m-auto flex items-center justify-around mt-2 mb-2 p-1">
            <button
              className="bg-green-500 rounded p-0.5"
              onClick={() => dobavitFunction()}
            >
              soxranit
            </button>
            <button
              className="bg-gray-100 p-0.5 rounded"
              onClick={() => setaddModal(false)}
            >
              otmena
            </button>
          </div>
        </div>
      )}
      {eddModal && (
        <div className="bg-gray-200 mb-4 mt-4 rounded flex flex-col text-center w-[40%]  m-auto space-y-3 p-1">
          <h1>izmenit User</h1>
          <div className="flex flex-col w-[80%] m-auto space-y-2 ">
            <input
              className="bg-gray-50 rounded p-1"
              type="text"
              placeholder="name"
              value={eddName}
              onChange={(e) => setEddname(e.target.value)}
            />
            <input
              className="bg-gray-50 rounded p-1"
              type="text"
              placeholder="Surname"
              value={eddSurname}
              onChange={(e) => setEddsurname(e.target.value)}
            />
            <input
              className="bg-gray-50 rounded p-1"
              type="number"
              placeholder="age"
              value={eddAge}
              onChange={(e) => setEddage(e.target.value)}
            />
          </div>
          <div className="w-[70%] m-auto flex items-center justify-around mt-2 mb-2 p-1">
            <button
              className="bg-green-500 rounded p-0.5"
              onClick={() => {
                editMainFunction(), setEddmodal(false);
              }}
            >
              soxranit
            </button>
            <button
              className="bg-gray-100 p-0.5 rounded"
              onClick={() => setEddmodal(false)}
            >
              otmena
            </button>
          </div>
        </div>
      )}
      <table className="w-[85%] m-auto bg-violet-400/60 text-center">
        <thead className="h-10 bg-violet-500/10 border-b-2 border-violet-600/10">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody className="">
          {todoDate
            .filter((value) => {
              return value.name.toLowerCase().includes(searchValue);
            })
            .map((el) => {
              return (
                <tr
                  key={el.id}
                  className=" h-9 border-b-1 border-violet-600/20"
                >
                  <td className="p-1">{el.id}</td>
                  <td className="p-1">{el.name}</td>
                  <td className="p-1">{el.surName}</td>
                  <td className="p-1">{el.age}</td>
                  <td className="p-1">
                    <button
                      className="bg-violet-700/20 rounded shadow shadow-black p-1"
                      onClick={() => {
                        dispatch(deleteFunction(el.id)), console.log(el.id);
                      }}
                    >
                      Del
                    </button>

                    <button
                      onClick={() => {
                        outputEditFunction(el);
                      }}
                      className="bg-violet-700/20 rounded shadow shadow-black p-1"
                    >
                      Edd
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h1>Page Todo</h1>
    </>
  );
}
