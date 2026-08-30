import { getStructuredData } from "@/lib/structuredData";

export function StructuredData() {
  const jsonLd = JSON.stringify(getStructuredData());

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
