
import { draftMode, cookies, headers } from "next/headers";
 
// Server-side language detection

function getLanguageFromRequest(): string {

  const headersList = headers();

  // Try to get from custom header (set by middleware)

  const langHeader = headersList.get('x-language');

  if (langHeader) return langHeader;

  // Try to extract from pathname header

  const pathname = headersList.get('x-pathname') || 

                   headersList.get('x-url') || 

                   headersList.get('referer') || '';

  const match = pathname.match(/\/([a-z]{2})\//);

  return match ? match[1] : 'en';

}
 
export async function fetchGraphQL<T = any>(

  query: string,

  variables?: { [key: string]: any },

  headers?: { [key: string]: string },

  language?: string,

): Promise<T> {

  const { isEnabled: preview } = await draftMode();

  // Get language from parameter, request, or default

  const currentLanguage = language || getLanguageFromRequest();
 
  try {

    let authHeader = "";

    if (preview) {

      const auth = cookies().get("wp_jwt")?.value;

      if (auth) {

        authHeader = `Bearer ${auth}`;

      }

    }
 
    const body = JSON.stringify({

      query,

      variables: {

        preview,

        language: currentLanguage.toUpperCase(),

        ...variables,

      },

    });
 
    const response = await fetch(

      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

          ...(authHeader && { Authorization: authHeader }),

          ...headers,

        },

        body,

        cache: preview ? "no-cache" : "default",

        next: {

          tags: ["wordpress"],

        },

      }

    );
 
    if (!response.ok) {

      console.error("Response Status:", response);

      throw new Error(response.statusText);

    }
 
    const data = await response.json();

    if (data.errors) {

      console.error("GraphQL Errors:", JSON.stringify(data.errors, null, 2));

      throw new Error("Error executing GraphQL query");

    }
 
    return data.data;

  } catch (error) {

    console.error(error);

    throw error;

  }

}
 
