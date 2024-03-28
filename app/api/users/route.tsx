import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export const GET = async () => {
  let data = await prisma.user.findMany();
  return NextResponse.json(data);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  let checkUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (checkUser)
    return NextResponse.json({ error: "user already exit" }, { status: 404 });
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(user);
};
