import { YZ13Icon } from '@yz13/ui/src/components/logo/yz13';
import type { Metadata } from 'next';
import { CardsDemo } from "./cards";

const title = "Основа проектов YZ13";
const description = "Набор прекрасно разработанных компонентов, которые вы можете настраивать, расширять и дополнять.";

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title
  },
};

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
        <div className="pb-10">
          <YZ13Icon className="w-40" />
        </div>
        <h1 className="leading-tighter text-3xl font-semibold tracking-tight text-balance text-foreground lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
          {title}
        </h1>
        <p className='max-w-4xl text-base text-balance text-foreground sm:text-lg'>
          {description}
        </p>
      </div>
      <section className="hidden md:block">
        <CardsDemo />
      </section>
    </>
  );
}
