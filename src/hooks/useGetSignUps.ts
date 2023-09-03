import { useCallback, useEffect, useState } from "react";

type SignUpsMap = Record<string, number>;

const GET_FTR_EVENTS_SIGN_UPS =
  "https://bzmnmsu2w7.execute-api.us-east-1.amazonaws.com/readFTREventsSignUpCounts";

type UseGetSignUpsHookResult = {
  data?: SignUpsMap;
  refetch: () => void;
};
type UseGetSignUpsHook = () => UseGetSignUpsHookResult;

export const useGetSignups: UseGetSignUpsHook = () => {
  const [signUps, setSignUps] = useState<SignUpsMap>();
  const fetchSignUps = useCallback(async () => {
    const response = await fetch(GET_FTR_EVENTS_SIGN_UPS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { signUpCountByClass } = await response.json();
    setSignUps(signUpCountByClass);
  }, []);

  useEffect(() => {
    fetchSignUps();
  }, [fetchSignUps]);

  return {
    data: signUps,
    refetch: fetchSignUps,
  };
};

export default useGetSignups;
