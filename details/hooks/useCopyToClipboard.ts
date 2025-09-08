"use client";
import { useState } from "react";
import { useCopyToClipboard } from "react-use";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function UseCopyToClipboard() {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [showToast, setShowToast] = useState(false);

  const router = useRouter();
  const path = usePathname();
  const currentUrl = `${path}`;

  const handleCopy = () => {
    copyToClipboard(currentUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  const routeToHome = () => {
    router.push("/");
  };
  return {
    handleCopy,
    state,
    showToast,
    setShowToast,
    routeToHome,
  };
}
