import { useCallback, useEffect, useState } from "react";
import { ColorValue } from "react-native";
import { GET_FTR_EVENTS_MASTER_SIGN_UPS } from "@/constants/environment";

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

export type UseGetSignUpsHookResult = {
  data?: NetworkResourceShape;
  refetch: () => void;
};

export type UseGetSignUpsHook = () => UseGetSignUpsHookResult;

export const useGetSignups: UseGetSignUpsHook = () => {
  const [signUps, setSignUps] = useState<NetworkResourceShape>();
  const fetchSignUps = useCallback(async () => {
    console.log(GET_FTR_EVENTS_MASTER_SIGN_UPS);
    const response = await fetch(GET_FTR_EVENTS_MASTER_SIGN_UPS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Got response:", response);
    const json = await response.json();
    console.log("Got response json:", json);
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
