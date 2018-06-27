
declare class HKWAbstractionLayer extends NSObject {

    static alloc(): HKWAbstractionLayer; // inherited from NSObject

    static instanceWithTextViewChangeRejection(textView: UITextView, enabled: boolean): HKWAbstractionLayer;

    static new(): HKWAbstractionLayer; // inherited from NSObject

    delegate: HKWAbstractionLayerDelegate;

    readonly ignoreStackDepth: number;

    shouldIgnoreNextCharacterDeletion: boolean;

    popIgnore(): void;

    pushIgnore(): void;

    textViewDidChange(): void;

    textViewDidChangeSelection(): void;

    textViewDidProgrammaticallyUpdate(): void;

    textViewShouldChangeTextInRangeReplacementText(range: NSRange, text: string): boolean;
}

interface HKWAbstractionLayerControlFlowPluginProtocol extends HKWAbstractionLayerDelegate, HKWSimplePluginProtocol {

    singleLineViewportChanged?(): void;

    singleLineViewportTapped?(): void;

    textViewDidBeginEditing?(textView: UITextView): void;

    textViewDidEndEditing?(textView: UITextView): void;

    textViewDidProgrammaticallyUpdate?(textView: UITextView): void;

    textViewShouldBeginEditing?(textView: UITextView): boolean;

    textViewShouldEndEditing?(textView: UITextView): boolean;

    textViewShouldInteractWithTextAttachmentInRange?(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

    textViewShouldInteractWithURLInRange?(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;
}
declare var HKWAbstractionLayerControlFlowPluginProtocol: {

    prototype: HKWAbstractionLayerControlFlowPluginProtocol;
};

interface HKWAbstractionLayerDelegate extends NSObjectProtocol {

    textViewCharacterDeletionWasIgnoredAtLocation?(textView: UITextView, location: number): void;

    textViewCursorChangedToInsertion?(textView: UITextView, location: number): void;

    textViewCursorChangedToSelection?(textView: UITextView, selectionRange: NSRange): void;

    textViewReplacedTextAtRangeNewTextAutocorrect?(textView: UITextView, replacementRange: NSRange, newText: string, autocorrect: boolean): boolean;

    textViewTextDeletedFromLocationLength?(textView: UITextView, location: number, length: number): boolean;

    textViewTextInsertedAtLocationAutocorrect?(textView: UITextView, text: string, location: number, autocorrect: boolean): boolean;
}
declare var HKWAbstractionLayerDelegate: {

    prototype: HKWAbstractionLayerDelegate;
};

declare const enum HKWAccessoryViewMode {

    Sibling = 0,

    FreeFloating = 1
}

declare class HKWAttribute extends NSObject {

    static alloc(): HKWAttribute; // inherited from NSObject

    static attachmentAttributeWithAttachment(attachment: NSTextAttachment): HKWAttribute;

    static attributeDictionaryWithAttributes(attributes: NSArray<any>): NSDictionary<any, any>;

    static backgroundColorAttributeWithColor(color: UIColor): HKWAttribute;

    static baselineOffsetAttributeWithOffset(offset: number): HKWAttribute;

    static expansionAttributeWithExpansion(expansion: number): HKWAttribute;

    static fontAttributeWithFont(font: UIFont): HKWAttribute;

    static foregroundColorAttributeWithColor(color: UIColor): HKWAttribute;

    static kernAttributeWithKerning(kerning: number): HKWAttribute;

    static ligatureAttributeWithMode(useLigatures: boolean): HKWAttribute;

    static linkAttributeWithURL(URL: NSURL): HKWAttribute;

    static new(): HKWAttribute; // inherited from NSObject

    static obliquenessAttributeWithObliqueness(obliqueness: number): HKWAttribute;

    static paragraphStyleAttributeWithStyle(style: NSParagraphStyle): HKWAttribute;

    static shadowAttributeWithShadow(shadow: NSShadow): HKWAttribute;

    static strikethroughAttributeWithParams(params: number): HKWAttribute;

    static strikethroughColorAttributeWithColor(color: UIColor): HKWAttribute;

    static strokeColorAttributeWithColor(color: UIColor): HKWAttribute;

    static strokeWidthAttributeWithWidth(width: number): HKWAttribute;

    static textEffectAttributeWithEffect(effect: string): HKWAttribute;

    static underlineAttributeWithParams(params: number): HKWAttribute;

    static underlineColorAttributeWithColor(color: UIColor): HKWAttribute;

    readonly attribute: string;

    readonly parameter: any;
}

declare const enum HKWChooserBorderMode {

    Top = 0,

    Bottom = 1,

    None = 2
}

interface HKWChooserViewProtocol extends NSObjectProtocol {

    borderMode?: HKWChooserBorderMode;

    chooserBackgroundColor?: UIColor;

    dataViewContentInset?: UIEdgeInsets;

    dataViewScrollIndicatorInsets?: UIEdgeInsets;

    insertionPointMarkerEnabled?: boolean;

    becomeVisible(): void;

    moveInsertionPointMarkerToXPosition?(position: number): void;

    reloadData(): void;

    resetScrollPositionAndHide(): void;
}
declare var HKWChooserViewProtocol: {

    prototype: HKWChooserViewProtocol;

    chooserViewWithFrameDelegate?(frame: CGRect, delegate: HKWCustomChooserViewDelegate): any;

    chooserViewWithFrameDelegateDataSource?(frame: CGRect, delegate: UITableViewDelegate, dataSource: UITableViewDataSource): any;
};

interface HKWCustomChooserViewDelegate extends UITableViewDataSource, UITableViewDelegate {

    modelObjectForIndex(index: number): any;

    modelObjectSelectedAtIndex(index: number): void;

    numberOfModelObjects(): number;

    shouldDisplayLoadingIndicator(): boolean;
}
declare var HKWCustomChooserViewDelegate: {

    prototype: HKWCustomChooserViewDelegate;
};

declare class HKWDefaultChooserArrowView extends UIView {

    static alloc(): HKWDefaultChooserArrowView; // inherited from NSObject

    static appearance(): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserArrowView; // inherited from UIAppearance

    static chooserArrowViewPointingUp(pointingUp: boolean): HKWDefaultChooserArrowView;

    static new(): HKWDefaultChooserArrowView; // inherited from NSObject

    baseGradientColor: UIColor;

    pointingUp: boolean;

    tipGradientColor: UIColor;
}

declare class HKWDefaultChooserBorderView extends UIView {

    static alloc(): HKWDefaultChooserBorderView; // inherited from NSObject

    static appearance(): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserBorderView; // inherited from UIAppearance

    static new(): HKWDefaultChooserBorderView; // inherited from NSObject

    arrowFillColor: UIColor;

    readonly arrowLeftX: number;

    readonly arrowMiddleX: number;

    readonly arrowRightX: number;

    readonly arrowTipYOffset: number;

    arrowVisible: boolean;

    borderOnTop: boolean;

    delegate: HKWDefaultChooserBorderViewProtocol;

    pointerXPercent: number;

    strokeColor: UIColor;

    strokeThickness: number;
}

interface HKWDefaultChooserBorderViewProtocol extends NSObjectProtocol {

    arrowView(): UIView;

    moveArrowViewToPositionRelativeToBorderView(position: CGPoint): void;

    sizeForArrowView(): CGSize;
}
declare var HKWDefaultChooserBorderViewProtocol: {

    prototype: HKWDefaultChooserBorderViewProtocol;
};

declare class HKWDefaultChooserView extends UIView implements HKWChooserViewProtocol, HKWDefaultChooserBorderViewProtocol {

    static alloc(): HKWDefaultChooserView; // inherited from NSObject

    static appearance(): HKWDefaultChooserView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): HKWDefaultChooserView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HKWDefaultChooserView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HKWDefaultChooserView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HKWDefaultChooserView; // inherited from UIAppearance

    static chooserViewWithFrameDelegate(frame: CGRect, delegate: HKWCustomChooserViewDelegate): any;

    static chooserViewWithFrameDelegateDataSource(frame: CGRect, delegate: UITableViewDelegate, dataSource: UITableViewDataSource): any;

    static new(): HKWDefaultChooserView; // inherited from NSObject

    readonly tableView: UITableView;

    borderMode: HKWChooserBorderMode; // inherited from HKWChooserViewProtocol

    chooserBackgroundColor: UIColor; // inherited from HKWChooserViewProtocol

    dataViewContentInset: UIEdgeInsets; // inherited from HKWChooserViewProtocol

    dataViewScrollIndicatorInsets: UIEdgeInsets; // inherited from HKWChooserViewProtocol

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    insertionPointMarkerEnabled: boolean; // inherited from HKWChooserViewProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    arrowView(): UIView;

    becomeVisible(): void;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    moveArrowViewToPositionRelativeToBorderView(position: CGPoint): void;

    moveInsertionPointMarkerToXPosition(position: number): void;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    reloadData(): void;

    resetScrollPositionAndHide(): void;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    sizeForArrowView(): CGSize;
}

interface HKWDirectControlFlowPluginProtocol extends HKWSimplePluginProtocol, UITextViewDelegate {

    singleLineViewportChanged?(): void;

    singleLineViewportTapped?(): void;

    textViewDidProgrammaticallyUpdate?(textView: UITextView): void;
}
declare var HKWDirectControlFlowPluginProtocol: {

    prototype: HKWDirectControlFlowPluginProtocol;
};

declare class HKWLayoutManager extends NSLayoutManager {

    static alloc(): HKWLayoutManager; // inherited from NSObject

    static new(): HKWLayoutManager; // inherited from NSObject
}

declare class HKWMentionsAttribute extends NSObject implements HKWMentionsEntityProtocol {

    static alloc(): HKWMentionsAttribute; // inherited from NSObject

    static mentionWithTextIdentifier(text: string, identifier: string): HKWMentionsAttribute;

    static new(): HKWMentionsAttribute; // inherited from NSObject

    entityIdentifier: string;

    mentionText: string;

    metadata: NSDictionary<any, any>;

    range: NSRange;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    entityId(): string;

    entityMetadata(): NSDictionary<any, any>;

    entityName(): string;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    self(): this;

    uniqueId(): string;

    valueForCustomKey(customKey: string): any;
}

declare const enum HKWMentionsChooserPositionMode {

    EnclosedTop = 0,

    EnclosedBottom = 1,

    CustomLockTopArrowPointingUp = 2,

    CustomLockTopArrowPointingDown = 3,

    CustomLockTopNoArrow = 4,

    CustomLockBottomArrowPointingUp = 5,

    CustomLockBottomArrowPointingDown = 6,

    CustomLockBottomNoArrow = 7,

    CustomNoLockArrowPointingUp = 8,

    CustomNoLockArrowPointingDown = 9,

    CustomNoLockNoArrow = 10
}

declare class HKWMentionsCreationStateMachine extends NSObject {

    static alloc(): HKWMentionsCreationStateMachine; // inherited from NSObject

    static new(): HKWMentionsCreationStateMachine; // inherited from NSObject

    static stateMachineWithDelegate(delegate: HKWMentionsCreationStateMachineProtocol): HKWMentionsCreationStateMachine;

    chooserViewBackgroundColor: UIColor;

    chooserViewClass: typeof NSObject;

    chooserViewEdgeInsets: UIEdgeInsets;

    cancelMentionCreation(): void;

    characterTyped(c: string): void;

    chooserViewFrame(): CGRect;

    cursorMoved(): void;

    frameForMode(mode: HKWMentionsChooserPositionMode): CGRect;

    getEntityChooserView(): UIView;

    hideChooserArrow(): void;

    mentionCreationStartedWithPrefixUsingControlCharacterControlCharacterLocation(prefix: string, usingControlCharacter: boolean, character: string, location: number): void;

    resetChooserView(): void;

    stringDeleted(deleteString: string): void;

    validStringInserted(string: string): void;
}

interface HKWMentionsCreationStateMachineProtocol extends HKWMentionsDelegate {

    loadingCellSupported: boolean;

    accessoryViewActivated(activated: boolean): void;

    accessoryViewStateWillChange(activated: boolean): void;

    attachViewToParentEditorOriginMode(view: UIView, origin: CGPoint, mode: HKWAccessoryViewMode): void;

    boundsForParentEditorView(): CGRect;

    cancelMentionFromStartingLocation(location: number): void;

    chooserPositionMode(): HKWMentionsChooserPositionMode;

    createMentionStartingLocation(mention: HKWMentionsAttribute, location: number): void;

    heightForSingleLineViewport(): number;

    originForParentEditorView(): CGPoint;

    positionForChooserCursorRelativeToViewAtLocation(view: UIView, location: number): number;

    selectedAtIndexPath(entity: HKWMentionsEntityProtocol, indexPath: NSIndexPath): void;
}
declare var HKWMentionsCreationStateMachineProtocol: {

    prototype: HKWMentionsCreationStateMachineProtocol;
};

interface HKWMentionsDelegate extends NSObjectProtocol {

    asyncRetrieveEntitiesForKeyStringSearchTypeControlCharacterCompletion(keyString: string, type: HKWMentionsSearchType, character: string, completionBlock: (p1: NSArray<any>, p2: boolean, p3: boolean) => void): void;

    cellForMentionsEntityWithMatchStringTableView(entity: HKWMentionsEntityProtocol, matchString: string, tableView: UITableView): UITableViewCell;

    entityCanBeTrimmed?(entity: HKWMentionsEntityProtocol): boolean;

    heightForCellForMentionsEntityTableView(entity: HKWMentionsEntityProtocol, tableView: UITableView): number;

    heightForLoadingCellInTableView?(tableView: UITableView): number;

    loadingCellForTableView?(tableView: UITableView): UITableViewCell;

    trimmedNameForEntity?(entity: HKWMentionsEntityProtocol): string;
}
declare var HKWMentionsDelegate: {

    prototype: HKWMentionsDelegate;
};

interface HKWMentionsEntityProtocol extends NSObjectProtocol {

    entityId(): string;

    entityMetadata(): NSDictionary<any, any>;

    entityName(): string;

    uniqueId?(): string;

    valueForCustomKey?(customKey: string): any;
}
declare var HKWMentionsEntityProtocol: {

    prototype: HKWMentionsEntityProtocol;
};

declare class HKWMentionsPlugin extends NSObject implements HKWDirectControlFlowPluginProtocol {

    static alloc(): HKWMentionsPlugin; // inherited from NSObject

    static mentionsAttributesInAttributedString(attributedString: NSAttributedString): NSArray<any>;

    static mentionsPluginWithChooserMode(mode: HKWMentionsChooserPositionMode): HKWMentionsPlugin;

    static mentionsPluginWithChooserModeControlCharactersSearchLength(mode: HKWMentionsChooserPositionMode, controlCharacterSet: NSCharacterSet, searchLength: number): HKWMentionsPlugin;

    static mentionsPluginWithChooserModeControlCharactersSearchLengthUnselectedColorSelectedColorSelectedBackgroundColor(mode: HKWMentionsChooserPositionMode, controlCharacterSet: NSCharacterSet, searchLength: number, unselectedColor: UIColor, selectedColor: UIColor, selectedBackgroundColor: UIColor): HKWMentionsPlugin;

    static mentionsPluginWithChooserModeControlCharactersSearchLengthUnselectedMentionAttributesSelectedMentionAttributes(mode: HKWMentionsChooserPositionMode, controlCharacterSet: NSCharacterSet, searchLength: number, unselectedAttributes: NSDictionary<any, any>, selectedAttributes: NSDictionary<any, any>): HKWMentionsPlugin;

    static new(): HKWMentionsPlugin; // inherited from NSObject

    readonly chooserPositionMode: HKWMentionsChooserPositionMode;

    readonly chooserView: UIView;

    chooserViewBackgroundColor: UIColor;

    chooserViewClass: typeof NSObject;

    chooserViewEdgeInsets: UIEdgeInsets;

    controlCharacterSet: NSCharacterSet;

    delegate: HKWMentionsDelegate;

    readonly implicitMentionsEnabled: boolean;

    implicitSearchLength: number;

    readonly loadingCellSupported: boolean;

    notifyTextViewDelegateOnMentionCreation: boolean;

    notifyTextViewDelegateOnMentionDeletion: boolean;

    notifyTextViewDelegateOnMentionTrim: boolean;

    resumeMentionsCreationEnabled: boolean;

    shouldEnableUndoUponUnregistration: boolean;

    stateChangeDelegate: HKWMentionsStateChangeDelegate;

    readonly debugDescription: string; // inherited from NSObjectProtocol

    readonly description: string; // inherited from NSObjectProtocol

    readonly hash: number; // inherited from NSObjectProtocol

    readonly isProxy: boolean; // inherited from NSObjectProtocol

    parentTextView: HKWTextView; // inherited from HKWSimplePluginProtocol

    readonly pluginName: string; // inherited from HKWSimplePluginProtocol

    readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

    readonly  // inherited from NSObjectProtocol

    addMention(mention: HKWMentionsAttribute): void;

    addMentions(mentions: NSArray<any>): void;

    calculatedChooserFrameForModeEdgeInsets(mode: HKWMentionsChooserPositionMode, edgeInsets: UIEdgeInsets): CGRect;

    chooserViewFrame(): CGRect;

    class(): typeof NSObject;

    conformsToProtocol(aProtocol: any /* Protocol */): boolean;

    isEqual(object: any): boolean;

    isKindOfClass(aClass: typeof NSObject): boolean;

    isMemberOfClass(aClass: typeof NSObject): boolean;

    mentions(): NSArray<any>;

    performFinalCleanup(): void;

    performInitialSetup(): void;

    performSelector(aSelector: string): any;

    performSelectorWithObject(aSelector: string, object: any): any;

    performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

    respondsToSelector(aSelector: string): boolean;

    retainCount(): number;

    scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

    scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

    scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

    scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

    scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

    scrollViewDidScroll(scrollView: UIScrollView): void;

    scrollViewDidScrollToTop(scrollView: UIScrollView): void;

    scrollViewDidZoom(scrollView: UIScrollView): void;

    scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

    scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

    scrollViewWillBeginDragging(scrollView: UIScrollView): void;

    scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

    scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

    self(): this;

    setChooserTopLevelViewAttachmentBlock(topLevelView: UIView, block: (p1: UIView) => void): void;

    singleLineViewportChanged(): void;

    singleLineViewportTapped(): void;

    textViewDidBeginEditing(textView: UITextView): void;

    textViewDidChange(textView: UITextView): void;

    textViewDidChangeSelection(textView: UITextView): void;

    textViewDidEndEditing(textView: UITextView): void;

    textViewDidProgrammaticallyUpdate(textView: UITextView): void;

    textViewShouldBeginEditing(textView: UITextView): boolean;

    textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

    textViewShouldEndEditing(textView: UITextView): boolean;

    textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

    textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

    textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

    textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

    viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum HKWMentionsPluginState {

    Quiescent = 0,

    CreatingMention = 1
}

declare const enum HKWMentionsSearchType {

    Implicit = 0,

    Explicit = 1
}

declare class HKWMentionsStartDetectionStateMachine extends NSObject {

    static alloc(): HKWMentionsStartDetectionStateMachine; // inherited from NSObject

    static new(): HKWMentionsStartDetectionStateMachine; // inherited from NSObject

    static stateMachineWithDelegate(delegate: HKWMentionsStartDetectionStateMachineProtocol): HKWMentionsStartDetectionStateMachine;

    characterTypedAsInsertedCharacter(c: string, inserted: boolean): void;

    cursorMovedWithCharacterNowPrecedingCursor(c: string): void;

    deleteTypedCharacterWithCharacterNowPrecedingCursor(deletedChar: string, precedingChar: string): void;

    mentionCreationEnded(canImmediatelyRestart: boolean): void;

    mentionCreationResumed(): void;

    resetStateUsingString(string: string): void;

    validStringInsertedAtLocationUsingControlCharacterControlCharacter(string: string, location: number, usingControlCharacter: boolean, character: string): void;
}

interface HKWMentionsStartDetectionStateMachineProtocol extends NSObjectProtocol {

    beginMentionsCreationWithStringAlreadyInsertedUsingControlCharacterControlCharacter(prefix: string, alreadyInserted: boolean, usingControlCharacter: boolean, character: string): void;

    beginMentionsCreationWithStringAtLocationUsingControlCharacterControlCharacter(prefix: string, location: number, usingControlCharacter: boolean, character: string): void;

    controlCharacterSet(): NSCharacterSet;

    implicitSearchLength(): number;
}
declare var HKWMentionsStartDetectionStateMachineProtocol: {

    prototype: HKWMentionsStartDetectionStateMachineProtocol;
};

interface HKWMentionsStateChangeDelegate extends NSObjectProtocol {

    mentionsPluginActivatedChooserView?(plugin: HKWMentionsPlugin): void;

    mentionsPluginCreatedMentionAtLocation?(plugin: HKWMentionsPlugin, entity: HKWMentionsEntityProtocol, location: number): void;

    mentionsPluginDeactivatedChooserView?(plugin: HKWMentionsPlugin): void;

    mentionsPluginDeletedMentionAtLocation?(plugin: HKWMentionsPlugin, entity: HKWMentionsEntityProtocol, location: number): void;

    mentionsPluginStateChangedToFrom?(plugin: HKWMentionsPlugin, newState: HKWMentionsPluginState, oldState: HKWMentionsPluginState): void;

    mentionsPluginTrimmedMentionAtLocation?(plugin: HKWMentionsPlugin, entity: HKWMentionsEntityProtocol, location: number): void;

    mentionsPluginWillActivateChooserView?(plugin: HKWMentionsPlugin): void;

    selectedAtIndexPath?(entity: HKWMentionsEntityProtocol, indexPath: NSIndexPath): void;
}
declare var HKWMentionsStateChangeDelegate: {

    prototype: HKWMentionsStateChangeDelegate;
};

declare class HKWRoundedRectBackgroundAttributeValue extends NSObject {

    static alloc(): HKWRoundedRectBackgroundAttributeValue; // inherited from NSObject

    static new(): HKWRoundedRectBackgroundAttributeValue; // inherited from NSObject

    static valueWithBackgroundColor(color: UIColor): HKWRoundedRectBackgroundAttributeValue;

    backgroundColor: UIColor;
}

interface HKWSimplePluginProtocol extends NSObjectProtocol {

    parentTextView: HKWTextView;

    pluginName: string;

    performFinalCleanup(): void;

    performInitialSetup(): void;
}
declare var HKWSimplePluginProtocol: {

    prototype: HKWSimplePluginProtocol;
};

declare class HKWTextView extends UITextView {

    static alloc(): HKWTextView; // inherited from NSObject

    static appearance(): HKWTextView; // inherited from UIAppearance

    static appearanceForTraitCollection(trait: UITraitCollection): HKWTextView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): HKWTextView; // inherited from UIAppearance

    static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): HKWTextView; // inherited from UIAppearance

    static appearanceWhenContainedIn(ContainerClass: typeof NSObject): HKWTextView; // inherited from UIAppearance

    static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): HKWTextView; // inherited from UIAppearance

    static new(): HKWTextView; // inherited from NSObject

    abstractionControlFlowPlugin: HKWAbstractionLayerControlFlowPluginProtocol;

    abstractionLayer: HKWAbstractionLayer;

    readonly abstractionLayerEnabled: boolean;

    accessorySiblingViewOrigin: CGPoint;

    accessoryViewConstraints: NSMutableArray<any>;

    accessoryViewMode: HKWAccessoryViewMode;

    readonly attachedAccessoryView: UIView;

    controlFlowPlugin: HKWDirectControlFlowPluginProtocol;

    readonly customTopLevelView: UIView;

    customTypingAttributes: NSMutableDictionary<any, any>;

    disableVerticalScrolling: boolean;

    externalDelegate: HKWTextViewDelegate;

    readonly firstResponderIsCycling: boolean;

    readonly fontSetByApp: UIFont;

    readonly inSingleLineViewportMode: boolean;

    readonly lineFragmentPadding: number;

    onAccessoryViewAttachmentBlock: (p1: UIView, p2: boolean) => void;

    originalAutocapitalization: UITextAutocapitalizationType;

    originalAutocorrection: UITextAutocorrectionType;

    originalContentOffset: CGPoint;

    originalSpellChecking: UITextSpellCheckingType;

    overridingAutocapitalization: boolean;

    overridingAutocorrection: boolean;

    overridingSpellChecking: boolean;

    shouldRejectAutocorrectInsertions: boolean;

    simpleDelegate: UITextViewDelegate;

    readonly simplePlugins: NSArray<any>;

    singleLineViewportShouldFollowInsertionCaret: boolean;

    readonly textColorSetByApp: UIColor;

    touchCaptureOverlayView: UIView;

    transformInProgress: boolean;

    viewportContentOffset: CGPoint;

    viewportMode: HKWViewportMode;

    activateCustomAttributeWithNameValue(name: string, value: any): void;

    addSimplePlugin(plugin: HKWSimplePluginProtocol): void;

    attachFreeFloatingAccessoryViewAbsolutePosition(view: UIView, position: CGPoint): void;

    attachSiblingAccessoryViewPosition(view: UIView, position: CGPoint): void;

    characterPrecedingLocation(location: number): string;

    deactivateAllCustomAttributes(): void;

    deactivateCustomAttributeWithName(name: string): void;

    detachAccessoryView(view: UIView): void;

    dismissAutocorrectSuggestion(): void;

    enterSingleLineViewportModeCaptureTouches(mode: HKWViewportMode, shouldCaptureTouches: boolean): CGRect;

    exitSingleLineViewportMode(): void;

    insertAttributedTextLocation(text: NSAttributedString, location: number): void;

    insertPlainTextLocation(text: string, location: number): void;

    insertTextAttachmentLocation(attachment: NSTextAttachment, location: number): void;

    overrideAutocapitalizationWith(override: UITextAutocapitalizationType): void;

    overrideAutocorrectionWith(override: UITextAutocorrectionType): void;

    overrideSpellCheckingWith(override: UITextSpellCheckingType): void;

    rangeForWordPrecedingCursor(): NSRange;

    rangeForWordPrecedingLocationSearchToEnd(location: number, toEnd: boolean): NSRange;

    rectForSingleLineViewportInMode(mode: HKWViewportMode): CGRect;

    rectForWordPrecedingCursor(): CGRect;

    removeSimplePluginNamed(name: string): void;

    removeTextForRange(range: NSRange): void;

    restoreOriginalAutocapitalization(shouldCycle: boolean): void;

    restoreOriginalAutocorrection(shouldCycle: boolean): void;

    restoreOriginalSpellChecking(shouldCycle: boolean): void;

    setTopLevelViewForAccessoryViewPositioning(view: UIView): void;

    stripAttributeFromTextAtRangeAttributeName(range: NSRange, attributeName: string): void;

    textViewDidProgrammaticallyUpdate(): void;

    transformSelectedTextWithTransformer(transformer: (p1: NSAttributedString) => NSAttributedString): void;

    transformTextAtRangeWithTransformer(range: NSRange, transformer: (p1: NSAttributedString) => NSAttributedString): void;

    transformTypingAttributesWithTransformer(transformer: (p1: NSDictionary<any, any>) => NSDictionary<any, any>): void;
}

interface HKWTextViewDelegate extends UITextViewDelegate {

    textViewDidChangeAttributedTextToOriginalTextOriginalRange?(textView: HKWTextView, newText: NSAttributedString, originalText: NSAttributedString, originalRange: NSRange): void;

    textViewDidEnterSingleLineViewportMode?(textView: HKWTextView): void;

    textViewDidExitSingleLineViewportMode?(textView: HKWTextView): void;

    textViewDidHaveTextPastedIn?(textView: HKWTextView): void;

    textViewDidReceiveNewTextAttachment?(textView: HKWTextView, attachment: NSTextAttachment): void;

    textViewWasTappedInSingleLineViewportMode?(textView: HKWTextView): void;

    textViewWillBeginEditing?(textView: HKWTextView, editing: boolean): void;

    textViewWillEndEditing?(textView: HKWTextView, editing: boolean): void;
}
declare var HKWTextViewDelegate: {

    prototype: HKWTextViewDelegate;
};

declare const enum HKWViewportMode {

    Top = 0,

    Bottom = 1
}

declare function HKW_systemVersionIsAtLeast(version: string): boolean;

declare var HakawaiVersionNumber: number;

declare var HakawaiVersionString: interop.Reference<number>;
