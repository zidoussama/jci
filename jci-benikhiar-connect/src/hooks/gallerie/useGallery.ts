import { useEffect, useState } from "react";
import axios from "axios";

// ---------------- TYPES ----------------

export interface GalleryTitle {
  fr: string;
  ar: string;
  en: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: GalleryTitle;
}

// ---------------- API URL ----------------

const API_URL = `${import.meta.env.VITE_API_URL}/gallery`;

// ---------------- HOOK ----------------

export const useGallery = () => {

  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGallery = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get<GalleryItem[]>(API_URL, {
        withCredentials: true,
      });

      setGallery(response.data);

    } catch (err: any) {

      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to load gallery"
      );

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return {
    gallery,
    loading,
    error,
    refetch: fetchGallery,
  };
};
