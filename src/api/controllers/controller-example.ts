import type { Request, Response } from "express";

export const exampleFunction = async (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Backend is running smoothly",
    });
};
