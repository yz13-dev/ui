import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const { base64Font: normal } = await import("./geist-regular-otf.json").then((mod) => mod.default || mod)

  const { base64Font: semibold } = await import("./geist-semibold-otf.json").then((mod) => mod.default || mod)

  const { base64Font: pixel } = await import("./geist-pixel-square-otf.json").then((mod) => mod.default || mod)

  return [
    {
      name: "Geist",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Geist",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
    {
      name: "Geist Pixel",
      data: Buffer.from(pixel, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
  ]
}

export const revalidate = false;
const isDev = process.env.NODE_ENV === "development";

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;

  const [fonts] = await Promise.all([loadAssets()])

  const logoUrl = isDev
    ? "http://localhost:3000/logo/dark-full.png"
    : "https://cdn.yz13.dev/logo/yz13/dark-full.png";

  const ogBgUrl = isDev
    ? "http://localhost:3000/og-bg.png"
    : "https://ui.yz13.dev/og-bg.png";

  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const title = page.data.title;
  const description = page.data.description;

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-black text-white relative"
        style={{ fontFamily: "Geist Sans" }}
      >
        <img className="absolute w-full h-full top-0 left-0" src={ogBgUrl} width={1200} height={628} alt="bg" />
        <div tw="flex flex-col absolute w-[400px] justify-center top-[50px] left-[50px]">
          <img src={logoUrl} width={328} height={85} alt="logo" />
        </div>
        <div tw="flex flex-col absolute w-[860px] justify-center top-[185px] left-[50px]">
          <div
            tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
            style={{
              textWrap: "balance",
              fontWeight: 500,
              fontSize: title && title.length > 20 ? 36 : 48,
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </div>
          <div
            tw="text-[52px] pt-2 leading-[1.5] flex-grow-1 text-neutral-400"
            style={{
              fontSize: description && description.length > 36 ? 36 : 48,
              fontWeight: 400,
              textWrap: "balance",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
      fonts,
    }
  )
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
