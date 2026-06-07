import { CardsDemo } from "./cards";

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
        <h1 className="leading-tighter text-3xl font-semibold tracking-tight text-balance text-primary lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
          Основа проектов YZ13
        </h1>
        <p className='max-w-4xl text-base text-balance text-foreground sm:text-lg'>
          Набор прекрасно разработанных компонентов, которые вы можете настраивать, расширять и дополнять. Начните здесь, а затем сделайте его своим собственным. Открытый исходный код. Открытый код.
        </p>
      </div>
      <section className="hidden md:block">
        <CardsDemo />
      </section>
    </>
  );
}
