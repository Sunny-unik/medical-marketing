import { exitPreview } from "@prismicio/next";

export default function handler(req, res) {
  return exitPreview({ req, res });
}
