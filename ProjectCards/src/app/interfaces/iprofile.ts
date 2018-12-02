import IUrls from "./iurls";
import IStatus from "./istatus";

export default interface IProfile {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    tagline?: string;
    school?: string;
    major?: string;
    grad_year?: string;
    percent: string;
    skills: string;
    avatar: IUrls;
    cover: IUrls;
    resume?: string;
    privacy: string;
    src: string;
    connected: string;
    status?: IStatus;
}