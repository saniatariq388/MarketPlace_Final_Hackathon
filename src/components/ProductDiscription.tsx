"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDescription() {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24">
      {/* Tab Buttons */}
      <div className="w-full sm:w-2/3 lg:w-1/2 flex flex-col sm:flex-row items-center border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={cn(
            "w-full sm:w-1/2 px-4 py-2 sm:py-3 font-helvetica text-sm sm:text-base transition-colors text-center",
            activeTab === "description" ? "bg-[#FF9F0D] text-white" : "text-[#333333] hover:bg-gray-100",
          )}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={cn(
            "w-full sm:w-1/2 px-4 py-2 sm:py-3 font-helvetica text-sm sm:text-base transition-colors text-center",
            activeTab === "reviews" ? "bg-[#FF9F0D] text-white" : "text-[#333333] hover:bg-gray-100",
          )}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6 sm:mt-8 space-y-6 w-full sm:w-2/3 lg:w-1/2">
        {activeTab === "description" ? (
          <>
            {/* Description Text */}
            <p className="text-[#828282] font-inter text-sm sm:text-base leading-6 sm:leading-7">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam
              mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem
              auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam
              pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In
              nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </p>
            <p className="text-[#828282] font-inter text-sm sm:text-base leading-6 sm:leading-7">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est
              dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et
              sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat.
              Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales.
              Suspendisse eu fringilla leo, non aliquet sem.
            </p>

            {/* Key Benefits */}
            <div className="mt-8">
              <h3 className="text-[#4F4F4F] font-helvetica text-lg sm:text-xl mb-4">Key Benefits</h3>
              <ul className="space-y-3 ml-4 text-[#4F4F4F] font-inter list-disc text-sm sm:text-base flex flex-col text-left gap-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                <li>Mauris eget diam magna, in blandit turpis.</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="py-8 text-center text-gray-500">Reviews content would go here</div>
        )}
      </div>
    </div>
  );
}
