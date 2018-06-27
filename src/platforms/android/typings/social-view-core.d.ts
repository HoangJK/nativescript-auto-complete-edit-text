declare module native {
    export class Array<T> {
        public constructor();
    }
}

declare module com {
    export module hendraanggrian {
        export module socialview {
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

import androidcontentresColorStateList = android.content.res.ColorStateList;
import kotlinjvmfunctionsFunction2 = kotlin.jvm.functions.Function2;
import javautilList = java.util.List;
import kotlintextRegex = kotlin.text.Regex;
declare module com {
    export module hendraanggrian {
        export module socialview {
            export class SocialView {
				/**
				 * Constructs a new instance of the com.hendraanggrian.socialview.SocialView interface with the provided implementation.
				 */
                public constructor(implementation: {
                    isHashtagEnabled(): boolean;
                    setHashtagEnabled(param0: boolean): void;
                    isMentionEnabled(): boolean;
                    setMentionEnabled(param0: boolean): void;
                    isHyperlinkEnabled(): boolean;
                    setHyperlinkEnabled(param0: boolean): void;
                    getHashtagColor(): androidcontentresColorStateList;
                    setHashtagColor(param0: androidcontentresColorStateList): void;
                    getMentionColor(): androidcontentresColorStateList;
                    setMentionColor(param0: androidcontentresColorStateList): void;
                    getHyperlinkColor(): androidcontentresColorStateList;
                    setHyperlinkColor(param0: androidcontentresColorStateList): void;
                    setHashtagColor(param0: number): void;
                    setMentionColor(param0: number): void;
                    setHyperlinkColor(param0: number): void;
                    setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                    setOnMentionClickListener(param0: kotlinjvmfunctionsFunction2): void;
                    setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                    setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                    setMentionTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                    colorize(): void;
                    getHashtags(): javautilList;
                    getMentions(): javautilList;
                    getHyperlinks(): javautilList;
                    <clinit>(): void;
                });
                public static Companion: com.hendraanggrian.socialview.SocialView.Companion;
                public setHashtagEnabled(param0: boolean): void;
                public getHyperlinkColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: number): void;
                public setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public setHashtagColor(param0: androidcontentresColorStateList): void;
                public getMentionColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: androidcontentresColorStateList): void;
                public setMentionColor(param0: androidcontentresColorStateList): void;
                public setMentionTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionEnabled(param0: boolean): void;
                public isMentionEnabled(): boolean;
                public setOnMentionClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public getHashtagColor(): androidcontentresColorStateList;
                public getMentions(): javautilList;
                public setHyperlinkEnabled(param0: boolean): void;
                public setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public isHashtagEnabled(): boolean;
                public colorize(): void;
                public setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionColor(param0: number): void;
                public isHyperlinkEnabled(): boolean;
                public getHyperlinks(): javautilList;
                public setHashtagColor(param0: number): void;
                public getHashtags(): javautilList;
            }
            export module SocialView {
                export class Companion {
                    public getREGEX_HASHTAG$socialview_release(): kotlintextRegex;
                    public setMentionRegex(param0: string): void;
                    public setHyperlinkRegex(param0: string): void;
                    public setREGEX_HYPERLINK$socialview_release(param0: kotlintextRegex): void;
                    public getREGEX_HYPERLINK$socialview_release(): kotlintextRegex;
                    public setHashtagRegex(param0: string): void;
                    public setREGEX_MENTION$socialview_release(param0: kotlintextRegex): void;
                    public setREGEX_HASHTAG$socialview_release(param0: kotlintextRegex): void;
                    public getREGEX_MENTION$socialview_release(): kotlintextRegex;
                }
                export class DefaultImpls {
                    public static setHyperlinkColor(param0: com.hendraanggrian.socialview.SocialView, param1: number): void;
                    public static setHashtagColor(param0: com.hendraanggrian.socialview.SocialView, param1: number): void;
                    public static setMentionColor(param0: com.hendraanggrian.socialview.SocialView, param1: number): void;
                }
            }
        }
    }
}

import androidwidgetTextView = android.widget.TextView;
import androidutilAttributeSet = android.util.AttributeSet;
declare module com {
    export module hendraanggrian {
        export module socialview {
            export class SocialViewImpl {
                public static Companion: com.hendraanggrian.socialview.SocialViewImpl.Companion;
                public getHyperlinkColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: number): void;
                public setHashtagColor(param0: androidcontentresColorStateList): void;
                public getHashtagColor(): androidcontentresColorStateList;
                public setHyperlinkEnabled(param0: boolean): void;
                public constructor();
                public setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public isHashtagEnabled(): boolean;
                public colorize(): void;
                public setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionColor(param0: number): void;
                public isHyperlinkEnabled(): boolean;
                public getHyperlinks(): javautilList;
                public getHashtags(): javautilList;
                public setHashtagColor(param0: number): void;
                public setHashtagEnabled(param0: boolean): void;
                public setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public init(param0: androidwidgetTextView, param1: androidutilAttributeSet): void;
                public getMentionColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: androidcontentresColorStateList): void;
                public setMentionColor(param0: androidcontentresColorStateList): void;
                public setMentionTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionEnabled(param0: boolean): void;
                public isMentionEnabled(): boolean;
                public setOnMentionClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public getMentions(): javautilList;
            }
            export module SocialViewImpl {
                export class Companion {
                }
            }
        }
    }
}

import androidtextSpannable = android.text.Spannable;
import javalangObject = java.lang.Object;
import kotlinjvmfunctionsFunction1 = kotlin.jvm.functions.Function1;
declare module com {
    export module hendraanggrian {
        export module socialview {
            export class UtilsKt {
                public static span(param0: androidtextSpannable, param1: kotlintextRegex, param2: native.Array<kotlinjvmfunctionsFunction1>): androidtextSpannable;
                public static span(param0: androidtextSpannable, param1: kotlintextRegex, param2: native.Array<kotlinjvmfunctionsFunction1>, param3: number): androidtextSpannable;
                public static spanRange(param0: androidtextSpannable, param1: number, param2: number, param3: native.Array<kotlinjvmfunctionsFunction1>, param4: number): androidtextSpannable;
                public static spanRange(param0: androidtextSpannable, param1: number, param2: number, param3: native.Array<kotlinjvmfunctionsFunction1>): androidtextSpannable;
                public static removeSpans(param0: androidtextSpannable, param1: native.Array<javalangObject>): void;
            }
        }
    }
}

import androidcontentContext = android.content.Context;
declare module com {
    export module hendraanggrian {
        export module widget {
            export class SocialEditText {
                public getHyperlinkColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: number): void;
                public setHashtagColor(param0: androidcontentresColorStateList): void;
                public getHashtagColor(): androidcontentresColorStateList;
                public setHyperlinkEnabled(param0: boolean): void;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                public setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public isHashtagEnabled(): boolean;
                public colorize(): void;
                public setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionColor(param0: number): void;
                public getHyperlinks(): javautilList;
                public isHyperlinkEnabled(): boolean;
                public getHashtags(): javautilList;
                public setHashtagColor(param0: number): void;
                public setHashtagEnabled(param0: boolean): void;
                public setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
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
        }
    }
}

declare module com {
    export module hendraanggrian {
        export module widget {
            export class SocialTextView {
                public getHyperlinkColor(): androidcontentresColorStateList;
                public setHyperlinkColor(param0: number): void;
                public setHashtagColor(param0: androidcontentresColorStateList): void;
                public getHashtagColor(): androidcontentresColorStateList;
                public setHyperlinkEnabled(param0: boolean): void;
                public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
                public setOnHyperlinkClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public isHashtagEnabled(): boolean;
                public colorize(): void;
                public setOnHashtagClickListener(param0: kotlinjvmfunctionsFunction2): void;
                public setMentionColor(param0: number): void;
                public getHyperlinks(): javautilList;
                public isHyperlinkEnabled(): boolean;
                public getHashtags(): javautilList;
                public setHashtagColor(param0: number): void;
                public setHashtagEnabled(param0: boolean): void;
                public setHashtagTextChangedListener(param0: kotlinjvmfunctionsFunction2): void;
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
        }
    }
}

