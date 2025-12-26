"use client";

import dynamic from "next/dynamic";

export const CanvasCursor = dynamic(() => import("@/components/CanvasCursor"), { ssr: false });
export const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
export const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });