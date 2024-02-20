import React, { useState } from "react";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

import usePlayerIndexStore from "@/store/noteStore";

const Note = ({ note, index }: { index: number; note: number }) => {
  const [input, setinput] = useState(note);
  const { setIndex } = usePlayerIndexStore();
  const sessionDocRef = doc(db, "PockerPlanning", "PlanningSession");

  const updateNote = async (index: number, input: number) => {
    await updateDoc(sessionDocRef, {
      [`Player${index + 1}Note`]: input,
    });
    setinput(0);
    setIndex(index + 1);
  };

  return (
    <div className="flex flex-col justify-between rounded-md shadow-lg w-[200px] h-[300px] border p-2">
      <h1>Player{index + 1}</h1>
      {note}

      <div className="flex flex-col gap-y-2 ">
        <input
          type="number"
          value={input}
          className="flex  w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 border-none  dark:placeholder:text-white/70"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setinput(+e.target.value)
          }
        />
        <Button className="px-2-py-1" onClick={() => updateNote(index, input)}>
          update
        </Button>
      </div>
    </div>
  );
};

export default Note;
