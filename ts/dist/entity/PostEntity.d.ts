import { PrankShowEntityBase } from '../PrankShowEntityBase';
import type { PrankShowSDK } from '../PrankShowSDK';
import type { Control } from '../types';
import type { Post, PostListMatch } from '../PrankShowTypes';
declare class PostEntity extends PrankShowEntityBase<Post> {
    constructor(client: PrankShowSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
}
export { PostEntity };
