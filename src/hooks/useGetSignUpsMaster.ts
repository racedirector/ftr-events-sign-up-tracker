import { useCallback, useEffect, useState } from "react";
import { ColorValue } from "react-native";

export type NetworkDriver = {
  name: string;
  driverId: string | number;
  iRating: string | number;
  license: string;
};

export type NetworkTeam = {
  name: string;
  teamId: string | number;
  car: string;
  isPro: boolean;
  carNumber: string | number;
  drivers: NetworkDriver[];
};

export type NetworkCarCountMap = {
  [carName: string]: number;
};

export type NetworkCarClassDetails = {
  count: number;
  color: ColorValue;
  cars: NetworkCarCountMap;
  teams: NetworkTeam[];
};

export type NetworkCarClassMap = {
  [carClassName: string]: NetworkCarClassDetails;
};

export type NetworkResourceShape = {
  signUpCounts: NetworkCarClassMap;
};

const GET_FTR_EVENTS_MASTER_SIGN_UPS =
  "https://bzmnmsu2w7.execute-api.us-east-1.amazonaws.com/readFTREventsMasterCounts";

export type UseGetSignUpsHookResult = {
  data?: NetworkResourceShape;
  refetch: () => void;
};

export type UseGetSignUpsHook = () => UseGetSignUpsHookResult;

export const useGetSignups: UseGetSignUpsHook = () => {
  const [signUps, setSignUps] = useState<NetworkResourceShape>();
  const fetchSignUps = useCallback(async () => {
    const response = await fetch(GET_FTR_EVENTS_MASTER_SIGN_UPS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setSignUps(json);
  }, []);

  useEffect(() => {
    try {
      fetchSignUps();
    } catch (e) {
      console.log("Error fetching signups:", e);
    }
  }, [fetchSignUps]);

  return { data: signUps, refetch: fetchSignUps };
};

export default useGetSignups;
