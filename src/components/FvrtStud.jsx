import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StudContext } from "../ContextProvider";
import { useState } from "react";

const FvrtStud = () => {
  const { StudList, setStudList } = useContext(StudContext);
  //   const [fvrtStudList, setFvrtStudList] = useState();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  let fvrtStudList = StudList.filter((student) => {
    if (student.fvrtd) return student;
  });

  const handleRemove = (roll_no) => {
    let tmpstudList = StudList.map((student) => {
      return student.roll_no === roll_no
        ? { ...student, fvrtd: false }
        : student;
    });
    setStudList(tmpstudList);
  };

  return (
    <div className="bg-pink-100 h-120 flex flex-col items-center h-120 justify-around">
      <h1 className="text-3xl font-medium">Favourite Students List</h1>
      {fvrtStudList.length === 0 ? (
        <h2 className="text-red-500 font-medium text-1xl">
          No Student were favourited yet!!!
        </h2>
      ) : (
        <table className="bordertable-auto border border-gray-300 m-4 w-2/3">
          <tr>
            <th class="border px-4 py-2 text-center">Roll Number</th>
            <th class="border px-4 py-2 text-center">Student Name</th>
            <th class="border px-4 py-2 text-center">Favourite</th>
          </tr>
          {fvrtStudList.map((student) => {
            return (
              <tr>
                <td class="border px-4 py-2 text-center">
                  {" "}
                  {student.roll_no}{" "}
                </td>
                <td class="border px-4 py-2 text-center"> {student.name} </td>
                <td class="border px-4 py-2 text-center">
                  <button
                    className="bg-red-500 text-white p-2 border rounded-xl"
                    onClick={() => {
                      handleRemove(student.roll_no);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      )}
      <button
        className="bg-blue-500 p-2 border rounded-xl text-white cursor-pointer"
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
};

export default FvrtStud;
