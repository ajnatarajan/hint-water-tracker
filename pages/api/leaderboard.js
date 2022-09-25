import prisma from "../../lib/prisma.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await fetchLeaderboard(res);
  } else if (req.method === "POST") {
    return await createEntry(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function fetchLeaderboard(res) {
  try {
    const leaderboard = await prisma.leaderboard.findMany();
    return res.status(200).json(leaderboard, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error fetching leaderboard", success: false });
  }
}

async function createEntry(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.leaderboard.upsert({
      where: {
        email: body.email,
      },
      create: {
        email: body.email,
        amount: body.amount,
      },
      update: {
        amount: {
          increment: body.amount,
        },
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating entry", success: false });
  }
}
