'use client';
import React, { useState } from 'react';

export default function QuickSearch() {
  const [DateValue, DateOnChange] = useState<string>();
  const [AssignmentType, setAssignmentType] = useState<string>();
  const [AcademicLevel, setAcademicLevel] = useState<string>();
  const [NoPage, setNoPageChange] = useState<string>();

  const DateHandler = (event: { target: { value: string } }) => {
    DateOnChange(event.target.value);
  };
  return (
    <div className="quick-search w-full flex-wrap  space-x-7 space-y-8 my-2">
      <select
        name="Assignment Type"
        id=""
        value={AssignmentType}
        onChange={(e) => setAssignmentType(e.target.value)}
        className="w-72 h-auto p-4   border-1 border-(--them-color) selection:border-1 selection:border-(--them-color) focus:border in-focus:border in-focus:border-(--them-color) focus:border-(--them-color)  rounded-3xl text-base tracking-wide ">
        <option value="-1" className="w-full h-auto p-1">
          Assignment Type
        </option>
        <option value="Admission Essay" className="w-full h-auto p-1">
          Admission Essay
        </option>
        <option value="Analytical Essay" className="w-full h-auto p-1">
          Analytical Essay
        </option>
        <option value="Annotated Bibliography" className="w-full h-auto p-1">
          {' '}
          Annotated Bibliography{' '}
        </option>
        <option value="Application Letter" className="w-full h-auto p-1">
          Application Letter
        </option>
        <option value="Assignment" className="w-full h-auto p-1">
          Assignment
        </option>
        <option value="Biography" className="w-full h-auto p-1">
          Biography
        </option>
      </select>
      <select
        name="Academic Level"
        id=""
        value={AcademicLevel}
        onChange={(e) => setAcademicLevel(e.target.value)}
        className="w-72 h-auto p-4   border-1 border-(--them-color) selection:border-1 selection:border-(--them-color) focus:border in-focus:border in-focus:border-(--them-color) focus:border-(--them-color)  rounded-3xl text-base tracking-wide ">
        <option value="-1" className="w-full h-auto p-1">
          Academic Level
        </option>
        <option value="High School" className="w-full h-auto p-1">
          High School
        </option>
        <option value="College-underGraduate" className="w-full h-auto p-1">
          College-underGraduate
        </option>
        <option value="Master" className="w-full h-auto p-1">
          {' '}
          Master{' '}
        </option>
        <option value="Doctoral" className="w-full h-auto p-1">
          Doctoral
        </option>
      </select>
      <select
        name="NO. of Page"
        id=""
        value={NoPage}
        onChange={(e) => setNoPageChange(e.target.value)}
        className="w-72 h-auto p-4   border-1 border-(--them-color) selection:border-1 selection:border-(--them-color) focus:border  focus:border-(--them-color)  rounded-3xl text-base tracking-wide ">
        <option value="-1" className="w-full h-auto p-1">
          NO. of Page
        </option>
        <option value="Admission Essay" className="w-full h-auto p-1">
          1 Page ~ 300 Words
        </option>
        <option value="2 Page ~ 600 Words" className="w-full h-auto p-1">
          2 Page ~ 600 Words
        </option>
        <option value="3 Page ~ 900 Words" className="w-full h-auto p-1">
          {' '}
          3 Page ~ 900 Words{' '}
        </option>
        <option value="4 Page ~ 1200 Words" className="w-full h-auto p-1">
          4 Page ~ 1200 Words
        </option>
        <option value="5 Page ~ 1500 Words" className="w-full h-auto p-1">
          5 Page ~ 1500 Words
        </option>
        <option value="6 Page ~ 1800 Words" className="w-full h-auto p-1">
          6 Page ~ 1800 Words
        </option>
      </select>

      <input
        type="date"
        name="Date"
        id=""
        placeholder="Select Date"
        className="w-72 h-auto p-4  border-1 border-(--them-color) rounded-3xl text-base tracking-wide selection:border-1 selection:border-(--them-color) focus:border  focus:border-(--them-color)"
        value={DateValue}
        onChange={(event) => DateHandler(event)}
      />

      <button className="w-60 h-auto p-4 text-white border border-(--them-color) rounded-3xl text-base font-medium tracking-wide bg-gradient-to-r from-(--them-color) to-80% to-(--primary-color)/80 hover:from-(--primary-color)/80 hover:to-80% hover:to-(--them-color)">
        Get Writing Help Now
      </button>
    </div>
  );
}
