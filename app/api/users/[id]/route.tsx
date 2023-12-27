import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET (request:NextRequest,{params}:{params:{id:number}}) {
     console.log(params.id)
     if(params.id > 10){
          return NextResponse.json({error:"User not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:'kmkget'})
}

export async function PUT (request:NextRequest,{params}:{params:{id:number}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)
     if(!validation)
          return NextResponse.json(validation.error.errors , {status:404})
     if(params.id > 10){
          return NextResponse.json({error:"User not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:body.name})
}


export async function DELETE (request:NextRequest,{params}:{params:{id:number}}) {
     const body = await request.json();
     const  validation = schema.safeParse(body)
     if(!validation)
          return NextResponse.json(validation.error.errors , {status:404})
     if(params.id > 10){
          return NextResponse.json({error:"User not Found"},{status:404})
       }
     return NextResponse.json({id:1,name:body.name} )
}