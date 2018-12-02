import IUrls from "../interfaces/iurls";
import Constants from "../constants";

export default class Urls {

    private readonly _url: string;
    private readonly _dynamicUrl: string;
    private readonly _dynamicParams: string;
    private readonly _source: string;

    get url(): string {
        return this._url;
    }

    get source(): string {
        return this._source;
    }

    constructor(urls: IUrls, private secure: boolean = Constants.useHttps) {
        if (!urls) {
            return;
        }
        this._url = secure ? urls.url_https : urls.url;
        this._dynamicUrl = secure ? urls.dynamic_https : urls.dynamic;
        this._dynamicParams = secure ? urls.dynamic_params : undefined;
        this._source = urls.source;
    }

    dynamicUrl(func: string, args: string, params?: string): string {
        if (typeof params !== 'undefined') {
            if (this._dynamicParams) {
                return this._dynamicParams.replace('{function}', func).replace('{size}', args).replace('{optional_parameters}', params);
            }
        } else if (this._dynamicUrl) {
            return this._dynamicUrl.replace('{function}', func).replace('{size}', args);
        }
    }

    cropImageUrl(width?: number, height?: number): string {
        if (this._dynamicParams) {
            width = width | Constants.coverSizeWidth;
            height = height | Constants.coverSizeHeight;
            return this.dynamicUrl('crop', `${width}x${height}`);
        }
    }
}