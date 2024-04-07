import { useState } from "react";

export const Activity = (activityId: string, onBlur: any) => {
  const [activity, setActivity] = useState({
    id: activityId,
  });

  

  return (
    <input
      key={`${key}-${setIndex}`}
      className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      id={key + "1"}
      type="tel"
      value={demo.legPress[numberToSet(setIndex)].kg}
      onBlur={(e) => handleOnBlur(e, key, setIndex + 1)}
      placeholder={"30"}
    />
  );
};
