import Crown from "@/components/ui/navbar/crown";

export default function Loading() {
  return (
    <div className="flex-center w-full h-dvh bg-red">
      <Crown className="text-gold! animate-pulse" />
    </div>
  );
}
