interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
}

interface InstagramProfile {
  id: string
  username: string
  account_type: string
  media_count: number
}

export async function getInstagramPosts(accessToken: string, limit = 9): Promise<InstagramPost[]> {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&limit=${limit}&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram posts")
    }

    const data = await response.json()
    return data.data || []
  } catch (error) {
    console.error("Error fetching Instagram posts:", error)
    return []
  }
}

export async function getInstagramProfile(accessToken: string): Promise<InstagramProfile | null> {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`,
      {
        next: { revalidate: 3600 },
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch Instagram profile")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching Instagram profile:", error)
    return null
  }
}
