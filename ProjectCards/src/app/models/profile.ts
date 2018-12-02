import IUrls from "../interfaces/iurls";
import IStatus from "../interfaces/istatus";
import IProfile from "../interfaces/iprofile";
import Utility from '../utility';
import Urls from "./urls";
import Constants from "../constants";

export default class Profile {
    id: number;
    username: string
    firstname: string;
    lastname: string;
    tagline: string | undefined;
    school: string | undefined;
    major: string | undefined;
    grad_year: Date | undefined;
    percent: number;
    skills: number;
    avatar: Urls;
    cover: Urls;
    resume: string | undefined;
    privacy: boolean;
    src: boolean;
    connected: boolean;
    status: IStatus | undefined;

    constructor(profile: IProfile) {
        this.id = Utility.toInt(profile.id);
        this.username = profile.username;
        this.firstname = profile.firstname;
        this.lastname = profile.lastname;
        this.tagline = profile.tagline;
        this.school = profile.school;
        this.major = profile.major;
        this.grad_year = Utility.toDate(profile.grad_year);
        this.percent = Utility.toInt(profile.percent);
        this.skills = Utility.toInt(profile.skills);
        this.avatar = new Urls(profile.avatar);
        this.cover = new Urls(profile.cover);
        this.resume = profile.resume;
        this.privacy = Utility.toBool(profile.privacy);
        this.src = Utility.toBool(profile.src);
        this.connected = Utility.toBool(profile.connected);
        this.status = profile.status;
    }

    getDefaultAvatar(width?: number, height?: number): string {
        width = width | Constants.avatarWidth;
        height = height | Constants.avatarHeight;
        return this.avatar.dynamicUrl('crop', `${width}x${height}`);
    }
}