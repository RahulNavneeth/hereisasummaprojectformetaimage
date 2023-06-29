import { ImageResponse } from '@ethercorps/sveltekit-og';
import type { RequestHandler } from '@sveltejs/kit';

const template = (name: string, data: string) => {
    return `
        <div tw="bg-gray-50 w-full h-full items-center justify-center flex flex-row">
           <div tw="w-1/2 flex h-full flex-col items-center justify-center">
               <div tw="text-4xl font-bold text-gray-900">Hello ${name}</div> 
           </div>
           <div tw="w-1/2 flex bg-[#9482DA] h-full flex-col items-center justify-center">
               <div tw="text-4xl font-black">${data}</div> 
           </div>
        </div>
`};

const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export const GET: RequestHandler = async ({ url }) => {
    const params = url.searchParams;
    const name = params.get('name') || 'Rahul M. Navneeth';
    const data = params.get('data') || 'Bitspace';
    return await ImageResponse(template(name, data), {
        height: 630,
        width: 1200,
        fonts: [
            {
                name: 'Inter Latin',
                data: fontData,
                weight: 400
            }
        ]
    });
};
