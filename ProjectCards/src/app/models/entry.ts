import IEntry from '../interfaces/ientry';
import Utility from '../utility';

export default class Entry {
    id: number;
    fk_user_id: number;
    title: string;
    slug: string;
    token: string;
    description: string;
    type: number;
    fk_category_id: number;
    fk_key_id: number;
    fk_cover_image_id: number;
    source_url: string;
    views: number;
    likes: number;
    comments: number;
    visibility: boolean;
    order: number;
    strength: number;
    featured: boolean;
    spotlighted: boolean;
    expert: boolean;
    allow_comments: boolean;
    verified: boolean;
    submitted_at: Date | undefined;
    created_at: Date;
    updated_at: Date;
    category: string;
    category_slug: string;
    liked: boolean;

    constructor(entry: IEntry) {
        this.id = Utility.toInt(entry.id);
        this.fk_user_id = Utility.toInt(entry.fk_user_id);
        this.title = entry.title;
        this.slug = entry.slug;
        this.token = entry.token;
        this.description = entry.description;
        this.type = Utility.toInt(entry.type);
        this.fk_category_id = Utility.toInt(entry.fk_category_id);
        this.fk_key_id = Utility.toInt(entry.fk_key_id);
        this.fk_cover_image_id = Utility.toInt(entry.fk_cover_image_id);
        this.source_url = entry.source_url;
        this.views = Utility.toInt(entry.views);
        this.likes = Utility.toInt(entry.likes);
        this.comments = Utility.toInt(entry.comments);
        this.visibility = Utility.toBool(entry.visibility);
        this.order = parseInt(entry.order);
        this.strength = parseInt(entry.strength);
        this.featured = Utility.toBool(entry.featured);
        this.spotlighted = Utility.toBool(entry.spotlighted);
        this.expert = Utility.toBool(entry.expert);
        this.allow_comments = Utility.toBool(entry.allow_comments);
        this.verified = Utility.toBool(entry.verified);
        this.submitted_at = Utility.toDate(entry.submitted_at);
        this.created_at = Utility.toDate(entry.created_at);
        this.updated_at = Utility.toDate(entry.updated_at);
        this.category = entry.category;
        this.category_slug = entry.category_slug;
        this.liked = Utility.toBool(entry.liked);
    }

}