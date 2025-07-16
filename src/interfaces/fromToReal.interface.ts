import { StaticImageData } from "next/image";

export interface IVirtualToRealDataType {
    image: StaticImageData
    title: string;
    description: string;
    buttonText: string;
    link: string;
}