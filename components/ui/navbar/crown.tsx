import { FaCrown } from "react-icons/fa6";

export default function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
