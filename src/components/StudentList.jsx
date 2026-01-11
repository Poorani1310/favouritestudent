import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudContext } from "../ContextProvider";

const StudentList = () => {
  const { StudList, setStudList } = useContext(StudContext);
  const navigate = useNavigate();
  console.log(StudList);
  const handleClick = () => {
    navigate("/fvrtstudlist");
  };

  const handleFvrt = (idx) => {
    console.log("fvrt clicked", idx);
    let tmpstudList = [...StudList];
    tmpstudList[idx] = { ...tmpstudList[idx], fvrtd: true };
    setStudList(tmpstudList);
  };

  return (
    <div className="bg-cyan-100 text-center flex flex-col items-center h-120 justify-around">
      <h1 className="text-3xl font-medium">Students List</h1>
      <table className="bordertable-auto border border-gray-300 m-4 w-2/3">
        <tr>
          <th class="border px-4 py-2 text-center">Roll Number</th>
          <th class="border px-4 py-2 text-center">Student Name</th>
          <th class="border px-4 py-2 text-center">Favourite</th>
        </tr>
        {StudList.map((student, idx) => {
          return (
            <tr>
              <td class="border px-4 py-2 text-center"> {student.roll_no} </td>
              <td class="border px-4 py-2 text-center"> {student.name} </td>
              <td class="border px-4 py-2 text-center">
                {!student.fvrtd ? (
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      handleFvrt(idx);
                    }}
                  >
                    ⭐
                  </button>
                ) : (
                  <button className="cursor-not-allowed opacity-40"> ⭐ </button>
                )}
              </td>
            </tr>
          );
        })}
      </table>
      <button
        className="bg-pink-500 p-2 border rounded-xl text-white cursor-pointer"
        onClick={handleClick}
      >
        View Favourites
      </button>
    </div>
  );
};

export default StudentList;
