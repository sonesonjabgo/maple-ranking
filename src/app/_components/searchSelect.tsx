"use client";
import { Card } from "@nextui-org/react";
import React, { useState } from "react";
import { jobs, world_names } from "../../constants/rankConst";
import UseCustomSearchParams, {
  NewParamsType,
} from "../../hooks/useCustomSearchParams";

export default function SearchSelect() {
  const { setSearchParams } = UseCustomSearchParams();

  const [formData, setFormData] = useState<NewParamsType>({
    worldName: "",
    job: "",
  });

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSearchParams(formData);
  };

  const handleWorldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      worldName: selectedValue === "전체" ? "" : selectedValue,
    });
  };

  const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setFormData({
      ...formData,
      job: selectedValue === "전체" ? "" : selectedValue,
    });
  };

  return (
    <Card className="p-5 mx-3 mb-2">
      <form
        className="flex justify-center items-center gap-5"
        onSubmit={submitHandler}
      >
        <div>
          <p>월드 명</p>
          <div className="grid grid-cols-5 gap-1">
            {world_names.map((world, index) => (
              <button
                key={world}
                className="border border-neutral-800 rounded-md p-1 text-sm"
              >
                {world}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>직업 및 전직</p>
          <select name="job" onChange={handleJobChange}>
            {jobs.map((job, index) => (
              <option key={index} value={job}>
                {job}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-orange-400 rounded-lg w-20 h-14" type="submit">
          랭킹 검색
        </button>
      </form>
    </Card>
  );
}
