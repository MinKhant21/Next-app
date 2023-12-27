import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET (request:NextRequest,{params}:{params:{id:string}}) {

     if(parseInt(params.id) > 10)
          return NextResponse.json({error:"User not Found"},{status:404})

     let user = await prisma.user.findUnique({
          where:{
               id : parseInt(params.id)
          }
     })
    
     return NextResponse.json(user)
}

export async function PUT (request:NextRequest,{params}:{params:{id:string}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)

     if(parseInt(params.id) > 10)
          return NextResponse.json({error:"User not Found"},{status:404})

     if(!validation.success)
          return NextResponse.json(validation.error.errors , {status:404})

     const checkUser = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
     if(!checkUser)
          return NextResponse.json({error:"user does not exit"} , {status:404})

     let user = await prisma.user.update({
          where:{
               id:parseInt(params.id)
          },
          data:{email:body.email}
     })
     return NextResponse.json(user)

}


export async function DELETE (request:NextRequest,{params}:{params:{id:string}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)
     if(parseInt(params.id) > 10)
          return NextResponse.json({error:"User not Found"},{status:404})

     if(!validation.success)
          return NextResponse.json(validation.error.errors , {status:404})
     
     const checkUser = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
     if(!checkUser)
          return NextResponse.json({error:"user does not exit"} , {status:404})
     
     const user = await prisma.user.delete({where:{id:parseInt(params.id)}})

     return NextResponse.json({message : 'user deleted'})
}