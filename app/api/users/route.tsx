import { NextRequest, NextResponse } from "next/server"

export const GET = () => {
     return NextResponse.json([
          {
               id:1,
               name : 'kmk',
          }
     ])
}

export const POST = async (request:NextRequest) => {
     const body = await request.json(); 
     if(!body.name)
          return NextResponse.json({error:"Cannt find Name"})
     return NextResponse.json({id:1,name:body.name})
}