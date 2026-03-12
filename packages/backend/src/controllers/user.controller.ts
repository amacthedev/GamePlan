import { Request, Response } from "express";
import { z } from "zod";

const RoleSchema = z.object({
    role: z.enum(["ATHLETE", "PARENT", "COACH"]),
  });

export async function selectRole(req: Request, res: Response){
    const parsed = RoleSchema.safeParse(req.body);

    if (!parsed.success){
        return res.status(400).json({ error: "Invalid role."});
    }

    // once prisma is merged save to database
    // const updated = await prisma.user.udpate()

    return res.json({ message: "Role received", role: parsed.data.role});
}