import { Request, Response } from "express";
import { episodeService } from "../services/episodeService";

export const episodesController = {
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query;
    try {
      if (typeof videoUrl !== "string")
        throw new Error("videoUrl must be a string");
      const range = req.headers.range;
      episodeService.streamEpisodeToResponde(res, videoUrl, range);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
