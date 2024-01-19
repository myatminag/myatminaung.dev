import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-[#2C2C2C] dark:text-white text-[#2C2C2C]">
      This is Content
      <ThemeToggle />
    </div>
  );
}
