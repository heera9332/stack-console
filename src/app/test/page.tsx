import BrandSwatches from "@/components/BrandSwatches";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <h1>Test page</h1>

      <div className="space-y-10 p-6">
        <h2 className="text-h2">Primary Button</h2>

        <BrandSwatches />

        <h2>Button</h2>

        <hr />
        <div className="flex gap-4">
          <button className="cursor-pointer px-4 py-2.5 bg-secondary text-foreground rounded-[6px] w-56 border border-black transition-all delay-100 hover:shadow-[2px_8px_0px_2px_#356EC3] hover:border-r-[2px] hover:border-[#356EC3] hover:border-l-0 hover:border-t-0">
            Install Tailwind
          </button>
          <button className="cursor-pointer px-4 py-2.5 bg-secondary text-foreground rounded-[6px] w-42 border border-black transition-all delay-100 hover:shadow-[0_8px_0_#22c55e] hover:border-r-[2px] hover:border-[#22c55e] hover:border-l-0 hover:border-t-0">
            Install Tailwind
          </button>

          <button className="cursor-pointer px-4 py-2.5 bg-secondary text-foreground rounded-[6px] w-42 border border-black transition-all delay-100 hover:shadow-[0_8px_0_#facc15] hover:border-r-[2px] hover:border-[#facc15] hover:border-l-0 hover:border-t-0">
            Install Tailwind
          </button>

          <button className="cursor-pointer px-4 py-2.5 bg-secondary text-foreground rounded-[6px] w-42 border border-black transition-all delay-100 hover:shadow-[0_8px_0_#ef4444] hover:border-r-[2px] hover:border-[#ef4444] hover:border-l-0 hover:border-t-0">
            Install Tailwind
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
