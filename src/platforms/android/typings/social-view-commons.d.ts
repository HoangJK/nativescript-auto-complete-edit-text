declare module native {
    export class Array<T> {
        public constructor();
    }
}

import javalangObject = java.lang.Object;
import javalangInteger = java.lang.Integer;
declare module com {
    export module hendraanggrian {
        export module socialview {
            export class Hashtag {
                public equals(param0: javalangObject): boolean;
                public component1(): string;
                public hashCode(): number;
                public getCount(): javalangInteger;
                public constructor(param0: string, param1: javalangInteger);
                public getHashtag(): string;
                public toString(): string;
                public component2(): javalangInteger;
                public constructor(param0: string);
                public copy(param0: string, param1: javalangInteger): com.hendraanggrian.socialview.Hashtag;
            }
        }
    }
}

declare module com {
    export module hendraanggrian {
        export module socialview {
            export class Mention {
                public component1(): string;
                public toString(): string;
                public constructor(param0: string);
                public copy(param0: string, param1: string, param2: javalangObject): com.hendraanggrian.socialview.Mention;
                public constructor(param0: string, param1: string, param2: javalangObject);
                public component3(): javalangObject;
                public getDisplayname(): string;
                public equals(param0: javalangObject): boolean;
                public hashCode(): number;
                public component2(): string;
                public getUsername(): string;
                public getAvatar(): javalangObject;
                public constructor(param0: string, param1: string);
            }
        }
    }
}

import androidviewView = android.view.View;
import kotlinjvmfunctionsFunction1 = kotlin.jvm.functions.Function1;
declare module com {
    export module hendraanggrian {
        export module socialview {
            export class Utils2Kt {
                public static setVisibleThen(param0: androidviewView, param1: boolean, param2: kotlinjvmfunctionsFunction1): void;
                public static setVisible(param0: androidviewView, param1: boolean): void;
                public static isVisible(param0: androidviewView): boolean;
            }
        }
    }
}

declare module com {
    export module hendraanggrian {
        export module socialview {
            export module commons {
                export class BuildConfig {
                    public static DEBUG: boolean;
                    public static APPLICATION_ID: string;
                    public static BUILD_TYPE: string;
                    public static FLAVOR: string;
                    public static VERSION_CODE: number;
                    public static VERSION_NAME: string;
                    public constructor();
                }
            }
        }
    }
}

import androidviewViewGroup = android.view.ViewGroup;
import androidcontentContext = android.content.Context;
import androidwidgetTextView = android.widget.TextView;
declare module com {
    export module hendraanggrian {
        export module widget {
            export class HashtagAdapter extends com.hendraanggrian.widget.SocialAdapter {
                public convertToString(param0: com.hendraanggrian.socialview.Hashtag): string;
                public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
                public constructor(param0: androidcontentContext, param1: number, param2: number);
                public constructor(param0: androidcontentContext);
                public constructor(param0: androidcontentContext, param1: number);
                public convertToString(param0: javalangObject): string;
            }
            export module HashtagAdapter {
                export class ViewHolder {
                    public getCountTextView(): androidwidgetTextView;
                    public constructor(param0: androidviewView);
                    public getHashtagTextView(): androidwidgetTextView;
                }
            }
        }
    }
}

import androidwidgetImageView = android.widget.ImageView;
declare module com {
    export module hendraanggrian {
        export module widget {
            export class MentionAdapter extends com.hendraanggrian.widget.SocialAdapter {
                public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
                public constructor(param0: androidcontentContext, param1: number, param2: number);
                public constructor(param0: androidcontentContext);
                public convertToString(param0: com.hendraanggrian.socialview.Mention): string;
                public constructor(param0: androidcontentContext, param1: number);
                public convertToString(param0: javalangObject): string;
            }
            export module MentionAdapter {
                export class ViewHolder {
                    public constructor(param0: androidviewView);
                    public getAvatarImageView(): androidwidgetImageView;
                    public getDisplaynameTextView(): androidwidgetTextView;
                    public getUsernameTextView(): androidwidgetTextView;
                }
            }
        }
    }
}

import androidwidgetFilter = android.widget.Filter;
import javautilCollection = java.util.Collection;
import androidwidgetFilterFilterResults = android.widget.Filter.FilterResults;
declare module com {
    export module hendraanggrian {
        export module widget {
            export abstract class SocialAdapter<T> {
                public addAll(param0: native.Array<javalangObject>): void;
                public remove(param0: javalangObject): void;
                public constructor(param0: androidcontentContext, param1: number, param2: number);
                public addAll(param0: javautilCollection): void;
                public clear(): void;
                public convertToString(param0: javalangObject): string;
                public add(param0: javalangObject): void;
                public getFilter(): androidwidgetFilter;
            }
            export module SocialAdapter {
                export abstract class SocialFilter {
                    public performFiltering(param0: string): androidwidgetFilterFilterResults;
                    public constructor(param0: com.hendraanggrian.widget.SocialAdapter);
                    public publishResults(param0: string, param1: androidwidgetFilterFilterResults): void;
                }
            }
        }
    }
}

import androidwidgetArrayAdapter = android.widget.ArrayAdapter;
import androidutilAttributeSet = android.util.AttributeSet;
import androidcontentresColorStateList = android.content.res.ColorStateList;
import javautilList = java.util.List;
import kotlinjvmfunctionsFunction2 = kotlin.jvm.functions.Function2;
declare module com {
    export module hendraanggrian {
        export module widget {
            export class SocialAutoCompleteTextView {
                public setAdapter(param);
                public getAdapter(): androidwidgetArrayAdapter;
                public getHyperlinkColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: number): void;
                public setHashtagColor(param0: androidcontentresColorStateList): void;
                public setHashtagAdapter(param0: androidwidgetArrayAdapter): void;
                public getHashtagColor(): androidcontentresColorStateList;
                public setHyperlinkEnabled(param0: boolean): void;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                public setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public isHashtagEnabled(): boolean;
                public colorize(): void;
                public getMentionAdapter(): androidwidgetArrayAdapter;
                public setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionColor(param0: number): void;
                public isHyperlinkEnabled(): boolean;
                public getHyperlinks(): javautilList;
                public setMentionAdapter(param0: androidwidgetArrayAdapter): void;
                public getHashtags(): javautilList;
                public setHashtagColor(param0: number): void;
                public setHashtagEnabled(param0: boolean): void;
                public setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public getHashtagAdapter(): androidwidgetArrayAdapter;
                public setHyperlinkColor(param0: androidcontentresColorStateList): void;
                public getMentionColor(): androidcontentresColorStateList;
                public setMentionColor(param0: androidcontentresColorStateList): void;
                public setMentionTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionEnabled(param0: boolean): void;
                public isMentionEnabled(): boolean;
                public setOnMentionClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public getMentions(): javautilList;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: com.hendraanggrian.socialview.SocialViewImpl);
                public constructor(param0: androidcontentContext);
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
            }
            export module SocialAutoCompleteTextView {
                export class SymbolsTokenizer {
                    public terminateToken(param0: string): string;
                    public constructor(param0: native.Array<string>);
                    public findTokenStart(param0: string, param1: number): number;
                    public findTokenEnd(param0: string, param1: number): number;
                }
            }
        }
    }
}

