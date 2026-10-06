/*
 * Server metadata and instructions returned in the MCP initialize response.
 */

import type { Implementation } from "@modelcontextprotocol/sdk/types.js";

const ICON_BASE =
  "https://cloudinary-res.cloudinary.com/image/upload/docsite/brand-assets";

export const serverInfo: Omit<Implementation, "name" | "version"> = {
  title: "Cloudinary Environment Config",
  description:
    "Manage Cloudinary upload presets, named transformations, upload mappings, triggers, and streaming profiles.",
  websiteUrl: "https://cloudinary.com/documentation/cloudinary_llm_mcp",
  icons: [32, 96, 192].map((size) => ({
    src: `${ICON_BASE}/cloudinary_favicon_${size}x${size}.png`,
    mimeType: "image/png",
    sizes: [`${size}x${size}`],
  })),
};

export const instructions =
  `Cloudinary Environment Config: manage the settings that shape how assets are uploaded, transformed and delivered in a Cloudinary product environment.

- Upload presets bundle upload options (folder, tags, eager and incoming transformations, notification_url) under a name that uploads and the Upload Widget refer to. Check list-upload-presets first: creating a preset with an existing name overwrites it.
- Named transformations are reusable transformation strings applied in delivery URLs as t_<name>. Changing one requires unsafe_update and affects only newly generated derived assets. Chain f_auto outside it, e.g. t_square/f_auto.
- Upload mappings link a folder to a remote URL prefix for auto-upload. To apply a preset to a mapping, give the preset the same name as the mapped folder.
- Triggers send webhook notifications for one event type to one URL. update-trigger, delete-trigger and test-trigger need the id from list-triggers or create-trigger. A preset's notification_url overrides global triggers for uploads that use it.
- Streaming profiles define adaptive bitrate renditions. Updating one replaces its whole representations list; deleting a modified built-in profile reverts it.
- Works with the Asset Management server: its upload-asset takes upload_preset.
- Docs: https://cloudinary.com/documentation/llms.txt indexes all Cloudinary docs; append .md to a documentation URL for Markdown.`;
