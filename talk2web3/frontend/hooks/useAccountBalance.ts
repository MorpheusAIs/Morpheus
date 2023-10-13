import { useCallback, useEffect, useState } from "react";
import { useBalance } from "wagmi";

export function useAccountBalance(address?: string) {
  
  const [isEthBalance, setIsEthBalance] = useState(true);
  const [balance, setBalance] = useState<number | null>(null);
  const price = 1500

  const {
    data: fetchedBalanceData,
    isError,
    isLoading,
  } = useBalance({
    address : `0x${address}`,
    watch: true,
    chainId: 420,
  });

  useEffect(() => {
    if (fetchedBalanceData?.formatted) {
      setBalance(Number(fetchedBalanceData.formatted));
    }
  }, [fetchedBalanceData]);

  return { balance, price, isError, isLoading, isEthBalance };
}
