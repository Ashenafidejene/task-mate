import { NextResponse, NextRequest } from "next/server";
import { db } from '@/app/lib/prisma'
import { connect } from "http2";

export async function GET(request: NextRequest) {
    try {

        const pid = request.nextUrl.searchParams.get('pid')
        console.log(pid)

        const uid = request.nextUrl.searchParams.get('uid')
        if (uid) {
            const project = await db.project.update({
                where: {
                    id: pid as string
                },
                data: {
                    users: {
                        disconnect: { id: uid }
                    }
                },
                include: {
                    users: true,
                },
            })

            return NextResponse.json(project?.users, { status: 200 })

        }
        else {
            const project = await db.project.findFirst({
                where: {
                    id: pid as string
                },
                include: {
                    users: true
                }
            })

            return NextResponse.json(project?.users, { status: 200 })
        }


    } catch (error) {
        console.log(error)
        return NextResponse.json("Error Joining Project", { status: 500 })
    }

}