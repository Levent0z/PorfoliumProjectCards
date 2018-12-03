export default class Constants {
    static readonly useHttps = true;
    static readonly maxPageSize = 30;
    static readonly coverSizeWidth = 400; // Ensure that this value is the same as $card-width-px in _constants.scss
    static readonly coverSizeHeight = 200;
    static readonly avatarWidth = 40;    
    static readonly avatarHeight = 40;
    static readonly cardHeight = 385 + 20; // Include margin
    static readonly loadThreshold = 10; 
}