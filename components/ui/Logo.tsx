import { FaCrown } from "react-icons/fa6";

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`text-gold! flex flex-col items-center justify-center leading-none ${className ?? ""}`}
    >
      <Crown />
      Logo
    </div>
  );
}

export function Crown({ className }: { className?: string }) {
  return (
    <FaCrown
      className={`flex justify-self-center text-red text-3xl mb-4 ${className ?? ""}`}
    />
  );
}
