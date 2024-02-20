"use client";
import { useState, useEffect } from "react";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "@/firebase";
import Note from "@/components/Note";
import { useToast } from "@/components/ui/use-toast";

function NoteSharing() {
  const [playerNotes, setPlayerNotes] = useState<number[]>([]);

  const { toast } = useToast();

  useEffect(() => {
    const sessionDocRef = doc(db, "PockerPlanning", "PlanningSession");
    onSnapshot(sessionDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setPlayerNotes([
          data.Player1Note,
          data.Player2Note,
          data.Player3Note,
          data.Player4Note,
          data.Player5Note,
        ]);
        toast({
          title: "updated successfully",
          description: `playernotes has been updated successfully`,
        });
      }
    });
  }, []);

  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            welcome to the Sharing Notes
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-evenly gap-y-5 flex-wrap mt-20">
            {playerNotes.map((note, index) => (
              <div key={index}>
                <Note note={note} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:top-0 xl:top-0"
          >
            <ellipse
              cx="604"
              cy="512"
              fill="url(#radial-gradient-pricing)"
              rx="604"
              ry="512"
            ></ellipse>
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor="#7775D6"></stop>
                <stop offset="1" stopColor="#E935C1"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NoteSharing;
