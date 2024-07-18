"use client";
import React, { useState } from "react";
import { jobs, world_names } from "../../constants/rankConst";
import UseCustomSearchParams, {
  NewParamsType,
} from "../../hooks/useCustomSearchParams";

export default function SearchSelect() {
  const { searchParams, setSearchParams } = UseCustomSearchParams();

  const isActive = (param: string) => {
    return Object.values(searchParams).includes(param);
  };

  return (
    <div className="w-full p-5 flex flex-col items-center">
      <div className="w-1/2 flex flex-col gap-5">
        <div>
          <p>월드 명</p>
          <div className="flex flex-wrap gap-1">
            {world_names.map((world) => (
              <button
                key={world}
                onClick={() => {
                  if (world !== "전체") setSearchParams({ worldName: world });
                  else setSearchParams({ worldName: "" });
                }}
                className={`border border-neutral-500 dark:border-neutral-500 rounded-md p-1 text-sm ${
                  isActive(world) ? "bg-blue-400" : ""
                }`}
              >
                {world}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>직업 및 전직</p>
          <div className="flex flex-wrap  gap-1">
            <button
              onClick={() => {
                setSearchParams({ job: "" });
              }}
              className="border border-neutral-500 dark:border-neutral-500 rounded-md p-1 text-sm"
            >
              전체
            </button>
            {jobs.map((job, index) => {
              const jobSplit = job.split("-");
              if (jobSplit[1] !== "전체 전직")
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchParams({ job: job });
                    }}
                    className={`border border-neutral-500 dark:border-neutral-500 rounded-md p-1 text-sm ${
                      isActive(job) ? "bg-blue-400" : ""
                    }`}
                  >
                    {jobSplit[1]}
                  </button>
                );
              else
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchParams({ job: job });
                    }}
                    className={`border border-neutral-500 dark:border-neutral-500 rounded-md p-1 text-sm ${
                      isActive(job) ? "bg-blue-400" : ""
                    }`}
                  >
                    {jobSplit[0]}
                  </button>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
