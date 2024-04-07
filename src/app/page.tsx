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
import { mockHistoryData } from "./data/mockHistory";

export default function Home() {
  const [trainingSession, setTrainingSession] = useState<TrainingSession>({
    ...defaultState,
  });

  const lastWorkoutSession = mockHistoryData[0];

  const getPlaceHolderValue = (
    activity: ActivityName,
    set: SetUnion,
    type: "kg" | "reps"
  ) => {
    return lastWorkoutSession.activities[activity][set][type]?.toString() || "";
  };

  const onWorkoutSubmit = () => {
    //
    console.log("Fake API call and save data");
  };

  const handleOnChange = (
    blurEvent: any,
    activityId: ActivityName,
    setId: "s1" | "s2" | "s3",
    type: "kg" | "reps"
  ) => {
    const value = Number(blurEvent.target.value);

    setTrainingSession((prev) => {
      const ret = {
        ...prev,
        activities: {
          ...prev.activities,
          [activityId]: {
            ...prev.activities[activityId],
            [setId]: {
              ...prev.activities[activityId][setId],
              [type]: Number(value),
            },
          },
        },
      };

      console.log(ret);

      return ret;
    });
  };

  const handleOnCommentChange = (event: any, activityId: ActivityName) => {
    setTrainingSession((prev) => ({
      ...prev,
      [activityId]: {
        ...prev.activities[activityId],
        comments: event.target.value,
      },
    }));
  };

  return (
    <main>
      <div>
        {Object.keys(trainingSession.activities).map((key: string, i) => {
          const activity = key as ActivityName;
          return (
            <div key={activity}>
              <label htmlFor={activity}>{activity}</label>
              <div className="flex flex-col align-middle">
                <div className="pr-2">🏋️</div>
                <div className="flex flex-row">
                  {sets.map((set) => {
                    const currentActivity =
                      trainingSession.activities[activity];

                    const currentSet = currentActivity[set];

                    return (
                      <input
                        inputMode="decimal"
                        max={999}
                        maxLength={4}
                        key={`${key}-${set}`}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id={key + set}
                        value={currentSet.kg || ""}
                        onChange={(event) => {
                          console.log({ eventTarg: event.target.value });
                          handleOnChange(event, activity, set, "kg");
                        }}
                        //onBlur={(event) => handleOnBlur(event, activity, setId)}
                        placeholder={getPlaceHolderValue(activity, set, "kg")}
                      />
                    );
                  })}
                </div>
                <div className="flex flex-row">
                  {sets.map((set) => {
                    const currentActivity =
                      trainingSession.activities[activity];
                    const currentSet = currentActivity[set];
                    return (
                      <input
                        inputMode="numeric"
                        max={20}
                        maxLength={2}
                        key={`${key + 1}-${set}`}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id={key + 1 + set}
                        pattern="[0-9]+([,\.][0-9]+)?"
                        value={currentSet.reps || ""}
                        onChange={(event) =>
                          handleOnChange(event, activity, set, "reps")
                        }
                        //onBlur={(event) => handleOnBlur(event, activity, setId)}
                        placeholder={getPlaceHolderValue(activity, set, "reps")}
                      />
                    );
                  })}
                </div>

                <input
                  placeholder="Comments"
                  type="textarea"
                  value={trainingSession.activities[activity].comments || ""}
                  onChange={(event) => handleOnCommentChange(event, activity)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          );
        })}
        <div className="h-10"></div>
        <div className="flex justify-center">
          <button
            onClick={onWorkoutSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Spara
          </button>
        </div>
        <div className="h-10"></div>
      </div>
    </main>
  );
}
