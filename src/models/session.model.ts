type SubExercise = {
  comments?: string;
  s1: {
    reps: number | undefined;
    kg: number | undefined;
  };
  s2: {
    reps: number | undefined;
    kg: number | undefined;
  };
  s3: {
    reps: number | undefined;
    kg: number | undefined;
  };
};

export type SetUnion = "s1" | "s2" | "s3";

const defaultSubstate = {
  comments: "",
  s1: {
    reps: undefined,
    kg: undefined,
  },
  s2: {
    reps: undefined,
    kg: undefined,
  },
  s3: {
    reps: undefined,
    kg: undefined,
  },
};

export type ActivityName =
  | "chestPress"
  | "bicepsCurl"
  | "tricepsPress"
  | "abdominal"
  | "shoulderPress"
  | "legPress";

export type TrainingSession = {
  id?: string;
  date: string;
  activities: {
    [exercise in ActivityName]: SubExercise;
  };
};

export const defaultState: TrainingSession = {
  date: "2024-04-16:15:00:00",
  activities: {
    chestPress: defaultSubstate,
    bicepsCurl: defaultSubstate,
    tricepsPress: defaultSubstate,
    abdominal: defaultSubstate,
    shoulderPress: defaultSubstate,
    legPress: defaultSubstate,
  },
};

export type Exercise = {
  id: string;
  name: string;
  type: "resistance" | "cardio" | "flexibility"; // Assuming there are only these three types
};

export const exercises: Exercise[] = [
  {
    id: "legExtension",
    name: "Leg Extension",
    type: "resistance",
  },
  {
    id: "chestPress",
    name: "Chest press",
    type: "resistance",
  },
  {
    id: "seatedRow",
    name: "Seated row",
    type: "resistance",
  },
  {
    id: "legPress",
    name: "Leg press",
    type: "resistance",
  },
];

export const sets = ["s1", "s2", "s3"] as SetUnion[];
