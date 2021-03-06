import IMedia from "./imedia";
import IProfile from "./iprofile";

export default interface IEntry {
    id: string,
    fk_user_id: string,
    title: string,
    slug: string,
    token: string,
    description?: string,
    type?: string,
    fk_category_id: string,
    fk_key_id: string,
    fk_cover_image_id: string,
    source_url?: string,
    views: string,
    likes: string,
    comments: string,
    visibility: string,
    order: string,
    strength: string,
    featured: string,
    spotlighted: string,
    expert: string,
    allow_comments: string,
    verified: string,
    submitted_at?: string,
    created_at: string,
    updated_at: string,
    category: string,
    category_slug: string,
    liked: string

    profile: IProfile;
    media: IMedia[];
}