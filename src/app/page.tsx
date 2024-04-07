"use client";
import {
  ActivityName,
  Exercise,
  SetUnion,
  TrainingSession,
  defaultState,
  sets,
} from "@/models/session.model";
import { useState } from "react";

export default function Home() {
  const [trainingSession, setTrainingSession] = useState<TrainingSession>({
    ...defaultState,
  });

  const handleOnChange = (
    blurEvent: any,
    activityId: ActivityName,
    setId: "s1" | "s2" | "s3",
    type: "kg" | "reps"
  ) => {
    const value = blurEvent.target.value;
    console.log("VALUE", value);

    setTrainingSession((prev) => ({
      ...prev,
      [activityId]: {
        ...prev[activityId],
        [setId]: {
          ...prev[activityId][setId],
          [type]: value,
        },
      },
    }));
  };

  const handleOnCommentChange = (event: any, activityId: ActivityName) => {
    setTrainingSession((prev) => ({
      ...prev,
      [activityId]: {
        ...prev[activityId],
        comments: event.target.value,
      },
    }));
  };

  console.log(trainingSession);

  return (
    <main>
      <div>
        {Object.keys(trainingSession).map((key: string, i) => {
          const activity = key as ActivityName;
          return (
            <div key={activity}>
              <label htmlFor={activity}>{activity}</label>
              <div className="flex flex-col align-middle">
                <div className="pr-2">🏋️</div>
                <div className="flex flex-row">
                  {sets.map((set) => {
                    return (
                      <input
                        inputMode="decimal"
                        max={999}
                        maxLength={4}
                        key={`${key}-${set}`}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id={key + set}
                        value={trainingSession[activity][set].kg || ""}
                        onChange={(event) =>
                          handleOnChange(event, activity, set, "kg")
                        }
                        //onBlur={(event) => handleOnBlur(event, activity, setId)}
                        placeholder={"30"}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-row">
                  {sets.map((set) => {
                    return (
                      <input
                        inputMode="numeric"
                        max={20}
                        maxLength={2}
                        key={`${key + 1}-${set}`}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id={key + 1 + set}
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={trainingSession[activity][set].reps || ""}
                        onChange={(event) =>
                          handleOnChange(event, activity, set, "reps")
                        }
                        //onBlur={(event) => handleOnBlur(event, activity, setId)}
                        placeholder={"12"}
                      />
                    );
                  })}
                </div>

                <input
                  placeholder="Comments"
                  type="textarea"
                  value={trainingSession[activity].comments || ""}
                  onChange={(event) => handleOnCommentChange(event, activity)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
