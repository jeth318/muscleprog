import { TrainingSession } from "@/models/session.model";

export const mockHistoryData: TrainingSession[] = [
  {
    id: "session1",
    date: "Yesterday",
    activities: {
      chestPress: {
        comments: "Kämpigt sista 4 repsen",
        s1: {
          reps: 10,
          kg: 90,
        },
        s2: {
          reps: 10,
          kg: 90,
        },
        s3: {
          reps: 10,
          kg: 92,
        },
      },
      bicepsCurl: {
        comments: "",
        s1: {
          reps: 8,
          kg: 88,
        },
        s2: {
          reps: 8,
          kg: 88,
        },
        s3: {
          reps: 10,
          kg: 88,
        },
      },
      tricepsPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 15,
        },
        s2: {
          reps: 12,
          kg: 15,
        },
        s3: {
          reps: 12,
          kg: 15,
        },
      },
      abdominal: {
        comments: "",
        s1: {
          reps: 12,
          kg: 36,
        },
        s2: {
          reps: 12,
          kg: 36,
        },
        s3: {
          reps: 12,
          kg: 69,
        },
      },
      shoulderPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 33,
        },
        s2: {
          reps: 12,
          kg: 33,
        },
        s3: {
          reps: 12,
          kg: 33,
        },
      },
      legPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 68,
        },
        s2: {
          reps: 12,
          kg: 68,
        },
        s3: {
          reps: 12,
          kg: 68,
        },
      },
    },
  },
  {
    id: "session2",
    date: "DayBeforeYesterday",
    activities: {
      chestPress: {
        comments: "Kämpigt sista 4 repsen",
        s1: {
          reps: 12,
          kg: 40,
        },
        s2: {
          reps: 12,
          kg: 40,
        },
        s3: {
          reps: 12,
          kg: 45,
        },
      },
      bicepsCurl: {
        comments: "",
        s1: {
          reps: 12,
          kg: 10,
        },
        s2: {
          reps: 12,
          kg: 10,
        },
        s3: {
          reps: 12,
          kg: 10,
        },
      },
      tricepsPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 15,
        },
        s2: {
          reps: 12,
          kg: 15,
        },
        s3: {
          reps: 12,
          kg: 15,
        },
      },
      abdominal: {
        comments: "",
        s1: {
          reps: 12,
          kg: 36,
        },
        s2: {
          reps: 12,
          kg: 36,
        },
        s3: {
          reps: 12,
          kg: 69,
        },
      },
      shoulderPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 33,
        },
        s2: {
          reps: 12,
          kg: 33,
        },
        s3: {
          reps: 12,
          kg: 33,
        },
      },
      legPress: {
        comments: "",
        s1: {
          reps: 12,
          kg: 68,
        },
        s2: {
          reps: 12,
          kg: 68,
        },
        s3: {
          reps: 12,
          kg: 68,
        },
      },
    },
  },
];
