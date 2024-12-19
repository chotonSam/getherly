"use client";

import { addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({
  eventId,
  interestedUserIds,
  goingUserIds,
  fromDetails,
}) => {
  const router = useRouter();

  const { auth } = useAuth();

  const isInterested = interestedUserIds?.find((id) => id === auth?.id);
  const isGoring = goingUserIds?.find((id) => id === auth?.id);

  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isInterested);

  const [isPending, startTransition] = useTransition();

  const toggleInterest = async () => {
    if (auth) {
      addInterestedEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  };

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };

  const disabled = auth && going;
  return (
    <div
      className={`justify-self-end w-full flex gap-4 mt-4 ${
        fromDetails && "flex-1"
      }`}
    >
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>

      <button
        disabled={disabled} // Use the variable here
        onClick={markGoing}
        className={`text-center w-full py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm transition-colors active:translate-y-1 ${
          disabled
            ? "bg-green-600 cursor-default" // Disabled styles
            : "bg-[#464849] hover:bg-[#3C3D3D] cursor-pointer" // Enabled styles
        }`}
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
