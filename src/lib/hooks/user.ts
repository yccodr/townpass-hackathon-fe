import { useEffect } from "react";
import { useState } from "react";

type User = {
  id: number;
  account: string;
  username: string;
  realName: string;
  idNo: string;
  email: string;
  phoneNo: string;
  birthday: string;
  memberType: string;
  verifyLevel: string;
  addresses: {
    zip3: number;
    city: string;
    town: string;
    village: string;
    street: string;
  }[];
  residentAddress: string;
  citizen: boolean;
  nativePeople: boolean;
  cityInternetUid: string;
};

export const useUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const onMessage = (ev: any) => {
    const result: { data: User } = JSON.parse(ev.data).data;

    setUser(result.data);
  };

  useEffect(() => {
    setIsLoading(true);
    flutterObject.addEventListener("message", onMessage);

    flutterObject.postMessage("userinfo");
    flutterObject.removeEventListener("message", onMessage);
    setIsLoading(false);
  }, []);

  return { user, isLoading };
};
