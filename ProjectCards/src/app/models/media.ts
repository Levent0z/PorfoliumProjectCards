import IMedia from '../interfaces/imedia';
import Utility from '../utility';
import Urls from './urls';
import Constants from '../constants';

export default class Media {
    id: number;
    fk_entry_id: number;
    filename: Urls;
    caption: string | undefined;
    video: boolean;
    default: boolean;
    width: number | undefined;
    height: number | undefined;
    created_at: Date;
    updated_at: Date;

    constructor(media: IMedia) {
        if (media) {
            this.id = Utility.toInt(media.id);
            this.fk_entry_id = Utility.toInt(media.fk_entry_id);
            this.filename = new Urls(media.filename);
            this.caption = media.caption;
            this.video = Utility.toBool(media.video);
            this.default = Utility.toBool(media.default);
            this.width = Utility.toInt(media.width);
            this.height = Utility.toInt(media.height);
            this.created_at = Utility.toDate(media.created_at);
            this.updated_at = Utility.toDate(media.updated_at);
        }
    }

    getDefaultCoverImage(width?: number, height?: number): string {
        width = width | Constants.coverSizeWidth;
        height = height | Constants.coverSizeHeight;
        return this.filename.dynamicUrl('crop', `${width}x${height}`);
    }
}