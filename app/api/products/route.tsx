import { NextRequest, NextResponse } from "next/server"
import schema from "./schema";

export const GET = () => {
     return NextResponse.json([
          {
               id:"1",
               name:"phone",
               price : 4.5
          },
          {
               id:"2",
               name:"apple",
               price : 500
          }
     ])
}

export const POST = async (request:NextRequest) => {
     const body = await request.json();
     const validation = schema.safeParse(body)
     if(!validation.success)
          return NextResponse.json(validation.error.errors , {status : 404})
     return NextResponse.json({id:1,name:body.name,price:body.price})
}