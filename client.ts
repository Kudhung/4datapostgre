// import { PrismaClient } from "@prisma/client";
// declare module NodeJS {
//     interface Global {
//         spotConfig: any
//     }
// }
// interface CustomNodeJSGlobal extends NodeJS.Global {
//     prisma: PrismaClient;
// }
// declare const global: CustomNodeJSGlobal;
// const prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV === "development") global.prisma = prisma;

// export default prisma;

import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined
}
const prisma = global.prisma || new PrismaClient();
if (process.env.NODE_ENV === "development") global.prisma = prisma;
export default prisma;