import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
export function GET (request:NextRequest,{params}:{params:{id:number}}) {
     if(params.id > 10){
          return NextResponse.json({error:"Product not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:'phone',price:5.3})
}

export async function PUT (request:NextRequest,{params}:{params:{id:number}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)
     if(!validation.success)
          return NextResponse.json(validation.error.errors , {status:404})
     if(params.id > 10){
          return NextResponse.json({error:"Product not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:body.name})
}

export async function DELETE (request:NextRequest,{params}:{params:{id:number}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)
     if(!validation.success)
          return NextResponse.json(validation.error.errors , {status:404})
     if(params.id > 10){
          return NextResponse.json({error:"Product not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:body.name} )
}