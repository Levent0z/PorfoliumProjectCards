import IUrls from "./iurls";

export default interface IMedia {
    id: string;
    fk_entry_id : string;
    filename: IUrls;
    caption?: string;
    video: string;
    default: string;
    width?: string;
    height?: string;
    created_at: string;
    updated_at: string;
}