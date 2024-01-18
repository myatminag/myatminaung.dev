import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="w-full h-screen dark:bg-[#1e1e20]">
      <p className="dark:text-blue-500 font-semibold text-3xl">
        This is content.
      </p>
      <ThemeToggle />
    </div>
  );
}
