import Link from "next/link";
import Slide from "@/components/slide";

function CTA({ 
  title = "Ready to Get Started?", 
  description = "Contact us today to discuss how we can help your organization achieve its goals.",
  primaryButton = { text: "Contact Us", href: "/contact" },
  secondaryButton = null
}) {
  return (
    <div className="flex flex-col flex-1 justify-center items-center space-y-4 mb-[10px] md:mb-[10px] px-4 md:px-16">
      <div className="space-y-2 md:space-y-6 w-full">
        <div className="w-full py-4 flex flex-col items-center">
          <Slide>
            <div className="text-center max-w-2xl mx-auto space-y-6">
              <h3 className="text-sec font-bold text-xl md:text-2xl">
                {title}
              </h3>
              <p className="text-white text-sm md:text-base">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link href={primaryButton.href}>
                  <button className="bg-sec hover:bg-transparent hover:border-2 hover:border-sec hover:text-white rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold transition-all duration-150 transform hover:scale-105">
                    {primaryButton.text}
                  </button>
                </Link>
                {secondaryButton && (
                  <Link href={secondaryButton.href}>
                    <button className="bg-transparent border-2 border-sec hover:bg-sec hover:text-black rounded-[40px] w-full sm:w-auto flex justify-center items-center text-center px-8 py-3 text-sm font-bold md:font-extrabold text-white transition-all duration-150 transform hover:scale-105">
                      {secondaryButton.text}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </Slide>
        </div>
        <hr
          className="border-0"
          style={{
            color: "",
            backgroundColor: "#414141",
            height: 1,
          }}
        />
      </div>
    </div>
  );
}

export default CTA;
