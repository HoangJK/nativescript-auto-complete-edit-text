
declare class Popover extends UIView {

	static alloc(): Popover; // inherited from NSObject

	static appearance(): Popover; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Popover; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Popover; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): Popover; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Popover; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): Popover; // inherited from UIAppearance

	static new(): Popover; // inherited from NSObject

	animationIn: number;

	animationOut: number;

	arrowSize: CGSize;

	readonly blackOverlay: UIControl;

	blackOverlayColor: UIColor;

	cornerRadius: number;

	didDismissHandler: () => void;

	didShowHandler: () => void;

	dismissOnBlackOverlayTap: boolean;

	highlightCornerRadius: number;

	highlightFromView: boolean;

	initialSpringVelocity: number;

	overlayBlur: UIBlurEffect;

	popoverColor: UIColor;

	popoverType: PopoverType;

	showBlackOverlay: boolean;

	sideEdge: number;

	springDamping: number;

	willDismissHandler: () => void;

	willShowHandler: () => void;

	constructor(o: { showHandler: () => void; dismissHandler: () => void; });

	dismiss(): void;

	initWithShowHandlerDismissHandler(showHandler: () => void, dismissHandler: () => void): this;

	showAsDialog(contentView: UIView): void;

	showAsDialogInView(contentView: UIView, inView: UIView): void;

	showFromView(contentView: UIView, fromView: UIView): void;

	showFromViewInView(contentView: UIView, fromView: UIView, inView: UIView): void;

	showPoint(contentView: UIView, point: CGPoint): void;

	showPointInView(contentView: UIView, point: CGPoint, inView: UIView): void;
}

declare const enum PopoverType {

	Up = 0,

	Down = 1
}

declare var PopoverVersionNumber: number;

declare var PopoverVersionString: interop.Reference<number>;
