import { ImageResponse } from "@vercel/og";
import { darkTheme } from "kitchn";
import { KitchnWordmark, TonightPassMark } from "kitchn/logos";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-400-normal.ttf",
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  "https://cdn.jsdelivr.net/fontsource/fonts/figtree@latest/latin-700-normal.ttf",
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  const fontBoldData = await fontBold;

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: darkTheme.colors.text.lightest,
          background: darkTheme.colors.layout.darkest,
          width: "100%",
          height: "100%",
          padding: 64,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
          fontFamily: "Figtree",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {title && (
            <span
              style={{
                fontWeight: 700,
              }}
            >
              {title}
            </span>
          )}
          {description && (
            <span
              style={{
                fontSize: 32,
                color: darkTheme.colors.text.light,
              }}
            >
              {description}
            </span>
          )}
        </div>
        <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 32,
          }}
        >
          <TonightPassMark height={64} fill={darkTheme.colors.text.lightest} />
          <span>{"+"}</span>
          <KitchnWordmark height={64} fill={darkTheme.colors.text.lightest} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Figtree",
          data: fontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Figtree",
          data: fontBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
