declare module native {
	export class Array<T> {
		public constructor();
	}
}

declare module kotlin {
	export class ArrayIntrinsicsKt {
	}
}

declare module kotlin {
	export class Deprecated {
		/**
		 * Constructs a new instance of the kotlin.Deprecated interface with the provided implementation.
		 */
		public constructor(implementation: {
			message(): string;
			replaceWith(): kotlin.ReplaceWith;
			level(): kotlin.DeprecationLevel;
		});
		public level(): kotlin.DeprecationLevel;
		public message(): string;
		public replaceWith(): kotlin.ReplaceWith;
	}
}

declare module kotlin {
	export class DeprecationLevel {
		public static WARNING: kotlin.DeprecationLevel;
		public static ERROR: kotlin.DeprecationLevel;
		public static HIDDEN: kotlin.DeprecationLevel;
		public static values(): native.Array<kotlin.DeprecationLevel>;
		public constructor(param0: string, param1: number);
		public static valueOf(param0: string): kotlin.DeprecationLevel;
	}
}

declare module kotlin {
	export class DslMarker {
		/**
		 * Constructs a new instance of the kotlin.DslMarker interface with the provided implementation.
		 */
		public constructor(implementation: {
		});
	}
}

declare module kotlin {
	export class ExceptionsKt extends kotlin.ExceptionsKt__ExceptionsKt {
	}
}

import javalangThrowable = java.lang.Throwable;
import javalangStackTraceElement = java.lang.StackTraceElement;
declare module kotlin {
	export class ExceptionsKt__ExceptionsKt {
		public static getStackTrace(param0: javalangThrowable): native.Array<javalangStackTraceElement>;
		public constructor();
		public static addSuppressed(param0: javalangThrowable, param1: javalangThrowable): void;
	}
}

declare module kotlin {
	export class ExtensionFunctionType {
		/**
		 * Constructs a new instance of the kotlin.ExtensionFunctionType interface with the provided implementation.
		 */
		public constructor(implementation: {
		});
	}
}

declare module kotlin {
	export class Function {
		/**
		 * Constructs a new instance of the kotlin.Function interface with the provided implementation.
		 */
		public constructor(implementation: {
		});
	}
}

import javalangObject = java.lang.Object;
declare module kotlin {
	export class InitializedLazyImpl {
		public isInitialized(): boolean;
		public getValue(): javalangObject;
		public constructor(param0: javalangObject);
		public toString(): string;
	}
}

declare module kotlin {
	export class KotlinNullPointerException {
		public constructor();
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class KotlinVersion {
		public static MAX_COMPONENT_VALUE: number;
		public static CURRENT: kotlin.KotlinVersion;
		public static Companion: kotlin.KotlinVersion.Companion;
		public constructor(param0: number, param1: number);
		public getPatch(): number;
		public constructor(param0: number, param1: number, param2: number);
		public hashCode(): number;
		public getMinor(): number;
		public equals(param0: javalangObject): boolean;
		public getMajor(): number;
		public toString(): string;
		public compareTo(param0: kotlin.KotlinVersion): number;
		public isAtLeast(param0: number, param1: number): boolean;
		public isAtLeast(param0: number, param1: number, param2: number): boolean;
	}
	export module KotlinVersion {
		export class Companion {
		}
	}
}

declare module kotlin {
	export class Lazy {
		/**
		 * Constructs a new instance of the kotlin.Lazy interface with the provided implementation.
		 */
		public constructor(implementation: {
			getValue(): javalangObject;
			isInitialized(): boolean;
		});
		public isInitialized(): boolean;
		public getValue(): javalangObject;
	}
}

declare module kotlin {
	export class LazyKt {
		public static lazy(param0: kotlin.LazyThreadSafetyMode, param1: kotlin.jvm.functions.Function0): kotlin.Lazy;
		public static lazy(param0: javalangObject, param1: kotlin.jvm.functions.Function0): kotlin.Lazy;
		public static lazyOf(param0: javalangObject): kotlin.Lazy;
		public static lazy(param0: kotlin.jvm.functions.Function0): kotlin.Lazy;
	}
	export module LazyKt {
		export class WhenMappings {
		}
	}
}

declare module kotlin {
	export class LazyThreadSafetyMode {
		public static SYNCHRONIZED: kotlin.LazyThreadSafetyMode;
		public static PUBLICATION: kotlin.LazyThreadSafetyMode;
		public static NONE: kotlin.LazyThreadSafetyMode;
		public static valueOf(param0: string): kotlin.LazyThreadSafetyMode;
		public constructor(param0: string, param1: number);
		public static values(): native.Array<kotlin.LazyThreadSafetyMode>;
	}
}

declare module kotlin {
	export class MathKt extends kotlin.MathKt__NumbersKt {
	}
}

declare module kotlin {
	export class MathKt__BigNumbersKt {
		public constructor();
	}
}

declare module kotlin {
	export class MathKt__NumbersKt extends kotlin.MathKt__BigNumbersKt {
		public constructor();
	}
}

declare module kotlin {
	export class Metadata {
		/**
		 * Constructs a new instance of the kotlin.Metadata interface with the provided implementation.
		 */
		public constructor(implementation: {
			k(): number;
			mv(): native.Array<number>;
			bv(): native.Array<number>;
			d1(): native.Array<string>;
			d2(): native.Array<string>;
			xs(): string;
			xi(): number;
		});
		public k(): number;
		public d2(): native.Array<string>;
		public bv(): native.Array<number>;
		public d1(): native.Array<string>;
		public xi(): number;
		public mv(): native.Array<number>;
		public xs(): string;
	}
}

declare module kotlin {
	export class NoWhenBranchMatchedException {
		public constructor();
		public constructor(param0: javalangThrowable);
		public constructor(param0: string);
		public constructor(param0: string, param1: javalangThrowable);
	}
}

declare module kotlin {
	export class NotImplementedError {
		public constructor();
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class Pair {
		public copy(param0: javalangObject, param1: javalangObject): kotlin.Pair;
		public getFirst(): javalangObject;
		public component1(): javalangObject;
		public constructor(param0: javalangObject, param1: javalangObject);
		public hashCode(): number;
		public component2(): javalangObject;
		public equals(param0: javalangObject): boolean;
		public toString(): string;
		public getSecond(): javalangObject;
	}
}

declare module kotlin {
	export class ParameterName {
		/**
		 * Constructs a new instance of the kotlin.ParameterName interface with the provided implementation.
		 */
		public constructor(implementation: {
			name(): string;
		});
		public name(): string;
	}
}

declare module kotlin {
	export class PreconditionsKt extends kotlin.PreconditionsKt__PreconditionsKt {
	}
}

declare module kotlin {
	export class PreconditionsKt__AssertionsJVMKt {
		public constructor();
	}
}

declare module kotlin {
	export class PreconditionsKt__PreconditionsKt extends kotlin.PreconditionsKt__AssertionsJVMKt {
		public constructor();
	}
}

declare module kotlin {
	export class PublishedApi {
		/**
		 * Constructs a new instance of the kotlin.PublishedApi interface with the provided implementation.
		 */
		public constructor(implementation: {
		});
	}
}

declare module kotlin {
	export class ReplaceWith {
		/**
		 * Constructs a new instance of the kotlin.ReplaceWith interface with the provided implementation.
		 */
		public constructor(implementation: {
			expression(): string;
			imports(): native.Array<string>;
		});
		public imports(): native.Array<string>;
		public expression(): string;
	}
}

declare module kotlin {
	export class SafePublicationLazyImpl {
		public static Companion: kotlin.SafePublicationLazyImpl.Companion;
		public isInitialized(): boolean;
		public getValue(): javalangObject;
		public toString(): string;
		public constructor(param0: kotlin.jvm.functions.Function0);
	}
	export module SafePublicationLazyImpl {
		export class Companion {
		}
	}
}

declare module kotlin {
	export class SinceKotlin {
		/**
		 * Constructs a new instance of the kotlin.SinceKotlin interface with the provided implementation.
		 */
		public constructor(implementation: {
			version(): string;
		});
		public version(): string;
	}
}

declare module kotlin {
	export class StandardKt extends kotlin.StandardKt__SynchronizedKt {
	}
}

declare module kotlin {
	export class StandardKt__StandardKt {
		public constructor();
	}
}

declare module kotlin {
	export class StandardKt__SynchronizedKt extends kotlin.StandardKt__StandardKt {
		public constructor();
	}
}

declare module kotlin {
	export class Suppress {
		/**
		 * Constructs a new instance of the kotlin.Suppress interface with the provided implementation.
		 */
		public constructor(implementation: {
			names(): native.Array<string>;
		});
		public names(): native.Array<string>;
	}
}

declare module kotlin {
	export class SynchronizedLazyImpl {
		public isInitialized(): boolean;
		public getValue(): javalangObject;
		public toString(): string;
		public constructor(param0: kotlin.jvm.functions.Function0, param1: javalangObject);
	}
}

declare module kotlin {
	export class Triple {
		public copy(param0: javalangObject, param1: javalangObject, param2: javalangObject): kotlin.Triple;
		public getFirst(): javalangObject;
		public constructor(param0: javalangObject, param1: javalangObject, param2: javalangObject);
		public component1(): javalangObject;
		public getThird(): javalangObject;
		public hashCode(): number;
		public component2(): javalangObject;
		public component3(): javalangObject;
		public equals(param0: javalangObject): boolean;
		public toString(): string;
		public getSecond(): javalangObject;
	}
}

import javautilList = java.util.List;
declare module kotlin {
	export class TuplesKt {
		public static to(param0: javalangObject, param1: javalangObject): kotlin.Pair;
		public static toList(param0: kotlin.Triple): javautilList;
		public static toList(param0: kotlin.Pair): javautilList;
	}
}

declare module kotlin {
	export class TypeAliasesKt {
	}
}

declare module kotlin {
	export class TypeCastException {
		public constructor();
		public constructor(param0: string);
	}
}

declare module kotlin {
	export class UNINITIALIZED_VALUE {
		public static INSTANCE: kotlin.UNINITIALIZED_VALUE;
	}
}

declare module kotlin {
	export class UninitializedPropertyAccessException {
		public constructor();
		public constructor(param0: javalangThrowable);
		public constructor(param0: string);
		public constructor(param0: string, param1: javalangThrowable);
	}
}

declare module kotlin {
	export class Unit {
		public static INSTANCE: kotlin.Unit;
		public toString(): string;
	}
}

declare module kotlin {
	export class UnsafeLazyImpl {
		public isInitialized(): boolean;
		public getValue(): javalangObject;
		public toString(): string;
		public constructor(param0: kotlin.jvm.functions.Function0);
	}
}

declare module kotlin {
	export class UnsafeVariance {
		/**
		 * Constructs a new instance of the kotlin.UnsafeVariance interface with the provided implementation.
		 */
		public constructor(implementation: {
		});
	}
}

declare module kotlin {
	export class _Assertions {
		public static ENABLED: boolean;
		public static INSTANCE: kotlin._Assertions;
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationRetention {
			public static SOURCE: kotlin.annotation.AnnotationRetention;
			public static BINARY: kotlin.annotation.AnnotationRetention;
			public static RUNTIME: kotlin.annotation.AnnotationRetention;
			public static valueOf(param0: string): kotlin.annotation.AnnotationRetention;
			public constructor(param0: string, param1: number);
			public static values(): native.Array<kotlin.annotation.AnnotationRetention>;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class AnnotationTarget {
			public static CLASS: kotlin.annotation.AnnotationTarget;
			public static ANNOTATION_CLASS: kotlin.annotation.AnnotationTarget;
			public static TYPE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY: kotlin.annotation.AnnotationTarget;
			public static FIELD: kotlin.annotation.AnnotationTarget;
			public static LOCAL_VARIABLE: kotlin.annotation.AnnotationTarget;
			public static VALUE_PARAMETER: kotlin.annotation.AnnotationTarget;
			public static CONSTRUCTOR: kotlin.annotation.AnnotationTarget;
			public static FUNCTION: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_GETTER: kotlin.annotation.AnnotationTarget;
			public static PROPERTY_SETTER: kotlin.annotation.AnnotationTarget;
			public static TYPE: kotlin.annotation.AnnotationTarget;
			public static EXPRESSION: kotlin.annotation.AnnotationTarget;
			public static FILE: kotlin.annotation.AnnotationTarget;
			public static TYPEALIAS: kotlin.annotation.AnnotationTarget;
			public static valueOf(param0: string): kotlin.annotation.AnnotationTarget;
			public constructor(param0: string, param1: number);
			public static values(): native.Array<kotlin.annotation.AnnotationTarget>;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class MustBeDocumented {
			/**
			 * Constructs a new instance of the kotlin.annotation.MustBeDocumented interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Repeatable {
			/**
			 * Constructs a new instance of the kotlin.annotation.Repeatable interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Retention {
			/**
			 * Constructs a new instance of the kotlin.annotation.Retention interface with the provided implementation.
			 */
			public constructor(implementation: {
				value(): kotlin.annotation.AnnotationRetention;
			});
			public value(): kotlin.annotation.AnnotationRetention;
		}
	}
}

declare module kotlin {
	export module annotation {
		export class Target {
			/**
			 * Constructs a new instance of the kotlin.annotation.Target interface with the provided implementation.
			 */
			public constructor(implementation: {
				allowedTargets(): native.Array<kotlin.annotation.AnnotationTarget>;
			});
			public allowedTargets(): native.Array<kotlin.annotation.AnnotationTarget>;
		}
	}
}

import javautilIterator = java.util.Iterator;
import javautilCollection = java.util.Collection;
declare module kotlin {
	export module collections {
		export abstract class AbstractCollection {
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public addAll(param0: javautilCollection): boolean;
			public iterator(): javautilIterator;
			public toArray(): native.Array<javalangObject>;
			public add(param0: javalangObject): boolean;
			public constructor();
			public getSize(): number;
			public remove(param0: javalangObject): boolean;
			public removeAll(param0: javautilCollection): boolean;
			public toString(): string;
			public containsAll(param0: javautilCollection): boolean;
			public retainAll(param0: javautilCollection): boolean;
			public contains(param0: javalangObject): boolean;
			public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractIterator {
			public done(): void;
			public next(): javalangObject;
			public setNext(param0: javalangObject): void;
			public constructor();
			public hasNext(): boolean;
			public remove(): void;
			public computeNext(): void;
		}
		export module AbstractIterator {
			export class WhenMappings {
			}
		}
	}
}

import javautilListIterator = java.util.ListIterator;
declare module kotlin {
	export module collections {
		export abstract class AbstractList extends kotlin.collections.AbstractCollection implements kotlin.jvm.internal.markers.KMappedMarker {
			public static Companion: kotlin.collections.AbstractList.Companion;
			public subList(param0: number, param1: number): javautilList;
			public listIterator(param0: number): javautilListIterator;
			public addAll(param0: javautilCollection): boolean;
			public get(param0: number): javalangObject;
			public iterator(): javautilIterator;
			public listIterator(): javautilListIterator;
			public equals(param0: javalangObject): boolean;
			public add(param0: javalangObject): boolean;
			public constructor();
			public getSize(): number;
			public remove(param0: javalangObject): boolean;
			public remove(param0: number): javalangObject;
			public indexOf(param0: javalangObject): number;
			public add(param0: number, param1: javalangObject): void;
			public lastIndexOf(param0: javalangObject): number;
			public set(param0: number, param1: javalangObject): javalangObject;
			public addAll(param0: number, param1: javautilCollection): boolean;
			public hashCode(): number;
		}
		export module AbstractList {
			export class Companion {
				public checkElementIndex$kotlin_stdlib(param0: number, param1: number): void;
				public checkPositionIndex$kotlin_stdlib(param0: number, param1: number): void;
				public orderedEquals$kotlin_stdlib(param0: javautilCollection, param1: javautilCollection): boolean;
				public checkRangeIndexes$kotlin_stdlib(param0: number, param1: number, param2: number): void;
				public orderedHashCode$kotlin_stdlib(param0: javautilCollection): number;
			}
			export class IteratorImpl {
				public remove(): void;
				public constructor(param0: kotlin.collections.AbstractList);
				public hasNext(): boolean;
				public getIndex(): number;
				public next(): javalangObject;
				public setIndex(param0: number): void;
			}
			export class ListIteratorImpl extends kotlin.collections.AbstractList.IteratorImpl implements kotlin.jvm.internal.markers.KMappedMarker {
				public previous(): javalangObject;
				public previousIndex(): number;
				public constructor(param0: kotlin.collections.AbstractList, param1: number);
				public nextIndex(): number;
				public constructor(param0: kotlin.collections.AbstractList);
				public set(param0: javalangObject): void;
				public hasPrevious(): boolean;
				public add(param0: javalangObject): void;
			}
			export class SubList extends kotlin.collections.AbstractList {
				public getSize(): number;
				public constructor(param0: kotlin.collections.AbstractList, param1: number, param2: number);
				public get(param0: number): javalangObject;
				public constructor();
			}
		}
	}
}

import javautilMapEntry = java.util.Map.Entry;
import javautilSet = java.util.Set;
import javautilMap = java.util.Map;
declare module kotlin {
	export module collections {
		export abstract class AbstractMap {
			public static Companion: kotlin.collections.AbstractMap.Companion;
			public keySet(): javautilSet;
			public clear(): void;
			public containsKey(param0: javalangObject): boolean;
			public getEntries(): javautilSet;
			public values(): javautilCollection;
			public isEmpty(): boolean;
			public size(): number;
			public equals(param0: javalangObject): boolean;
			public remove(param0: javalangObject): javalangObject;
			public containsEntry$kotlin_stdlib(param0: javautilMapEntry): boolean;
			public constructor();
			public getSize(): number;
			public put(param0: javalangObject, param1: javalangObject): javalangObject;
			public toString(): string;
			public entrySet(): javautilSet;
			public getValues(): javautilCollection;
			public containsValue(param0: javalangObject): boolean;
			public getKeys(): javautilSet;
			public get(param0: javalangObject): javalangObject;
			public hashCode(): number;
			public putAll(param0: javautilMap): void;
		}
		export module AbstractMap {
			export class Companion {
				public entryHashCode$kotlin_stdlib(param0: javautilMapEntry): number;
				public entryEquals$kotlin_stdlib(param0: javautilMapEntry, param1: javalangObject): boolean;
				public entryToString$kotlin_stdlib(param0: javautilMapEntry): string;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableCollection {
			public size(): number;
			public add(param0: javalangObject): boolean;
			public constructor();
			public getSize(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableList {
			public removeAt(param0: number): javalangObject;
			public size(): number;
			public add(param0: number, param1: javalangObject): void;
			public constructor();
			public set(param0: number, param1: javalangObject): javalangObject;
			public getSize(): number;
			public remove(param0: number): javalangObject;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableMap {
			public keySet(): javautilSet;
			public getEntries(): javautilSet;
			public values(): javautilCollection;
			public size(): number;
			public entrySet(): javautilSet;
			public getValues(): javautilCollection;
			public constructor();
			public getKeys(): javautilSet;
			public getSize(): number;
			public put(param0: javalangObject, param1: javalangObject): javalangObject;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractMutableSet {
			public size(): number;
			public add(param0: javalangObject): boolean;
			public constructor();
			public getSize(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class AbstractSet extends kotlin.collections.AbstractCollection implements kotlin.jvm.internal.markers.KMappedMarker {
			public static Companion: kotlin.collections.AbstractSet.Companion;
			public equals(param0: javalangObject): boolean;
			public iterator(): javautilIterator;
			public constructor();
			public hashCode(): number;
		}
		export module AbstractSet {
			export class Companion {
				public setEquals$kotlin_stdlib(param0: javautilSet, param1: javautilSet): boolean;
				public unorderedHashCode$kotlin_stdlib(param0: javautilCollection): number;
			}
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArrayAsCollection {
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public addAll(param0: javautilCollection): boolean;
			public iterator(): javautilIterator;
			public toArray(): native.Array<javalangObject>;
			public getValues(): native.Array<javalangObject>;
			public add(param0: javalangObject): boolean;
			public getSize(): number;
			public constructor(param0: native.Array<javalangObject>, param1: boolean);
			public remove(param0: javalangObject): boolean;
			public removeAll(param0: javautilCollection): boolean;
			public containsAll(param0: javautilCollection): boolean;
			public retainAll(param0: javautilCollection): boolean;
			public contains(param0: javalangObject): boolean;
			public isVarargs(): boolean;
			public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt extends kotlin.collections.ArraysKt___ArraysKt {
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysJVMKt {
			public constructor();
			public static arrayOfNulls(param0: native.Array<javalangObject>, param1: number): native.Array<javalangObject>;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysKt__ArraysKt extends kotlin.collections.ArraysKt__ArraysJVMKt {
			public static unzip(param0: native.Array<kotlin.Pair>): kotlin.Pair;
			public static flatten(param0: native.Array<native.Array<javalangObject>>): javautilList;
			public constructor();
		}
	}
}

import javalangByte = java.lang.Byte;
import javalangShort = java.lang.Short;
import javalangInteger = java.lang.Integer;
import javalangLong = java.lang.Long;
import javalangFloat = java.lang.Float;
import javalangDouble = java.lang.Double;
import javalangBoolean = java.lang.Boolean;
import javalangCharacter = java.lang.Character;
import javalangIterable = java.lang.Iterable;
import javalangComparable = java.lang.Comparable;
import javautilComparator = java.util.Comparator;
import javautilHashSet = java.util.HashSet;
import javautilSortedSet = java.util.SortedSet;
import javalangAppendable = java.lang.Appendable;
import javalangClass = java.lang.Class;
declare module kotlin {
	export module collections {
		export class ArraysKt___ArraysKt extends kotlin.collections.ArraysKt__ArraysKt {
			public static count(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): number;
			public static first(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): string;
			public static joinToString(param0: native.Array<number>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static singleOrNull(param0: native.Array<string>): javalangCharacter;
			public static filterIndexed(param0: native.Array<string>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static fold(param0: native.Array<javalangObject>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static indexOf(param0: native.Array<string>, param1: string): number;
			public static takeLast(param0: native.Array<javalangObject>, param1: number): javautilList;
			public static getIndices(param0: native.Array<string>): kotlin.ranges.IntRange;
			public static groupBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static sort(param0: native.Array<number>, param1: number, param2: number): void;
			public static groupByTo(param0: native.Array<boolean>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static foldRightIndexed(param0: native.Array<string>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static lastOrNull(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javalangBoolean;
			public static takeLast(param0: native.Array<boolean>, param1: number): javautilList;
			public static contains(param0: native.Array<javalangObject>, param1: javalangObject): boolean;
			public static toCollection(param0: native.Array<javalangObject>, param1: javautilCollection): javautilCollection;
			public static asList(param0: native.Array<boolean>): javautilList;
			public static getIndices(param0: native.Array<boolean>): kotlin.ranges.IntRange;
			public static filterNot(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static associateByTo(param0: native.Array<boolean>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static drop(param0: native.Array<string>, param1: number): javautilList;
			public static single(param0: native.Array<number>): number;
			public static associateTo(param0: native.Array<number>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static sortedArray(param0: native.Array<number>): native.Array<number>;
			public static toSortedSet(param0: native.Array<javalangComparable>): javautilSortedSet;
			public static foldRight(param0: native.Array<boolean>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static reduce(param0: native.Array<string>, param1: kotlin.jvm.functions.Function2): string;
			public static sort(param0: native.Array<javalangObject>, param1: number, param2: number): void;
			public static firstOrNull(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javalangBoolean;
			public static associateTo(param0: native.Array<boolean>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static foldIndexed(param0: native.Array<string>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static flatMap(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static dropLastWhile(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static all(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): boolean;
			public static fill(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
			public static toSortedSet(param0: native.Array<javalangObject>, param1: javautilComparator): javautilSortedSet;
			public static foldRight(param0: native.Array<number>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static sortedArray(param0: native.Array<string>): native.Array<string>;
			public static associateBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static requireNoNulls(param0: native.Array<javalangObject>): native.Array<javalangObject>;
			public static sort(param0: native.Array<string>): void;
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangFloat;
			public static joinTo(param0: native.Array<javalangObject>, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static maxWith(param0: native.Array<string>, param1: javautilComparator): javalangCharacter;
			public static toTypedArray(param0: native.Array<string>): native.Array<javalangCharacter>;
			public static zip(param0: native.Array<string>, param1: native.Array<javalangObject>): javautilList;
			public static none(param0: native.Array<boolean>): boolean;
			public static toMutableList(param0: native.Array<number>): javautilList;
			public static fold(param0: native.Array<number>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static associateByTo(param0: native.Array<boolean>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static last(param0: native.Array<javalangObject>): javalangObject;
			public static any(param0: native.Array<number>): boolean;
			public static sumByDouble(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static plus(param0: native.Array<string>, param1: native.Array<string>): native.Array<string>;
			public static toMutableList(param0: native.Array<boolean>): javautilList;
			public static forEachIndexed(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): void;
			public static plus(param0: native.Array<boolean>, param1: javautilCollection): native.Array<boolean>;
			public static sumByDouble(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): number;
			public static filterIndexed(param0: native.Array<number>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static sorted(param0: native.Array<javalangComparable>): javautilList;
			public static foldRightIndexed(param0: native.Array<number>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static filterIndexedTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static toMutableSet(param0: native.Array<javalangObject>): javautilSet;
			public static associateBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static filterIndexed(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static toLongArray(param0: native.Array<javalangLong>): native.Array<number>;
			public static sortedArrayDescending(param0: native.Array<string>): native.Array<string>;
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangShort;
			public static toSet(param0: native.Array<number>): javautilSet;
			public static distinct(param0: native.Array<javalangObject>): javautilList;
			public static sortedBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static lastOrNull(param0: native.Array<number>): javalangDouble;
			public static firstOrNull(param0: native.Array<number>): javalangByte;
			public static last(param0: native.Array<number>): number;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangInteger;
			public static sortedDescending(param0: native.Array<number>): javautilList;
			public static contains(param0: native.Array<number>, param1: number): boolean;
			public static lastOrNull(param0: native.Array<number>): javalangInteger;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangDouble;
			public static lastOrNull(param0: native.Array<number>): javalangFloat;
			public static groupByTo(param0: native.Array<string>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static sortedArrayDescending(param0: native.Array<number>): native.Array<number>;
			public static reversed(param0: native.Array<boolean>): javautilList;
			public static reduceRightIndexed(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function3): boolean;
			public static flatMap(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static filterNotNull(param0: native.Array<javalangObject>): javautilList;
			public static firstOrNull(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static averageOfDouble(param0: native.Array<javalangDouble>): number;
			public static reduce(param0: native.Array<number>, param1: kotlin.jvm.functions.Function2): number;
			public static mapIndexed(param0: native.Array<number>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static first(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static flatMap(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static drop(param0: native.Array<boolean>, param1: number): javautilList;
			public static averageOfShort(param0: native.Array<javalangShort>): number;
			public static lastOrNull(param0: native.Array<number>): javalangShort;
			public static toSet(param0: native.Array<string>): javautilSet;
			public static fold(param0: native.Array<string>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangDouble;
			public static any(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): boolean;
			public static toBooleanArray(param0: native.Array<javalangBoolean>): native.Array<boolean>;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangByte>;
			public static first(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangLong;
			public static take(param0: native.Array<boolean>, param1: number): javautilList;
			public static reverse(param0: native.Array<string>): void;
			public static max(param0: native.Array<number>): javalangByte;
			public static none(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): boolean;
			public static first(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static sumOfLong(param0: native.Array<javalangLong>): number;
			public static indexOf(param0: native.Array<number>, param1: number): number;
			public static toSortedSet(param0: native.Array<string>): javautilSortedSet;
			public static mapTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static associateByTo(param0: native.Array<number>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static filterTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static lastOrNull(param0: native.Array<number>): javalangByte;
			public static firstOrNull(param0: native.Array<number>): javalangDouble;
			public static getOrNull(param0: native.Array<javalangObject>, param1: number): javalangObject;
			public static sumByDouble(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): number;
			public static flatMap(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static zip(param0: native.Array<javalangObject>, param1: javalangIterable, param2: kotlin.jvm.functions.Function2): javautilList;
			public static sortWith(param0: native.Array<javalangObject>, param1: javautilComparator, param2: number, param3: number): void;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangInteger;
			public static sumOfDouble(param0: native.Array<javalangDouble>): number;
			public static slice(param0: native.Array<boolean>, param1: javalangIterable): javautilList;
			public static take(param0: native.Array<number>, param1: number): javautilList;
			public static sortedBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static reduceIndexed(param0: native.Array<string>, param1: kotlin.jvm.functions.Function3): string;
			public static filterNotTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static firstOrNull(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static last(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static mapTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static slice(param0: native.Array<number>, param1: javalangIterable): javautilList;
			public static drop(param0: native.Array<number>, param1: number): javautilList;
			public static associateTo(param0: native.Array<string>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static groupByTo(param0: native.Array<javalangObject>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static toCharArray(param0: native.Array<javalangCharacter>): native.Array<string>;
			public static toSet(param0: native.Array<javalangObject>): javautilSet;
			public static union(param0: native.Array<javalangObject>, param1: javalangIterable): javautilSet;
			public static all(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): boolean;
			public static mapIndexedTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static min(param0: native.Array<number>): javalangFloat;
			public static max(param0: native.Array<string>): javalangCharacter;
			public static reversed(param0: native.Array<string>): javautilList;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangShort;
			public static associateByTo(param0: native.Array<string>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static subtract(param0: native.Array<boolean>, param1: javalangIterable): javautilSet;
			public static dropLastWhile(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sortedByDescending(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sliceArray(param0: native.Array<javalangObject>, param1: javautilCollection): native.Array<javalangObject>;
			public static associate(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static toMutableSet(param0: native.Array<boolean>): javautilSet;
			public static groupByTo(param0: native.Array<number>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static min(param0: native.Array<number>): javalangShort;
			public static associateByTo(param0: native.Array<number>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static sumBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static contains(param0: native.Array<boolean>, param1: boolean): boolean;
			public static filterNotTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static firstOrNull(param0: native.Array<number>): javalangLong;
			public static sortDescending(param0: native.Array<javalangComparable>): void;
			public static take(param0: native.Array<string>, param1: number): javautilList;
			public static flatMapTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static plus(param0: native.Array<javalangObject>, param1: native.Array<javalangObject>): native.Array<javalangObject>;
			public static takeLastWhile(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static takeLastWhile(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static none(param0: native.Array<number>): boolean;
			public static intersect(param0: native.Array<javalangObject>, param1: javalangIterable): javautilSet;
			public static sortedArrayDescending(param0: native.Array<javalangComparable>): native.Array<javalangComparable>;
			public static indexOfLast(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): number;
			public static dropWhile(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static max(param0: native.Array<number>): javalangLong;
			public static withIndex(param0: native.Array<boolean>): javalangIterable;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangFloat;
			public static first(param0: native.Array<number>): number;
			public static plus(param0: native.Array<number>, param1: number): native.Array<number>;
			public static binarySearch(param0: native.Array<string>, param1: string, param2: number, param3: number): number;
			public static groupByTo(param0: native.Array<number>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static takeWhile(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangShort;
			public static joinTo(param0: native.Array<boolean>, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static takeWhile(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static any(param0: native.Array<javalangObject>): boolean;
			public static slice(param0: native.Array<javalangObject>, param1: javalangIterable): javautilList;
			public static zip(param0: native.Array<javalangObject>, param1: native.Array<javalangObject>): javautilList;
			public static minBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static filterIndexedTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static lastOrNull(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangFloat;
			public static singleOrNull(param0: native.Array<javalangObject>): javalangObject;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangFloat;
			public static sort(param0: native.Array<string>, param1: number, param2: number): void;
			public static groupBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static mapNotNullTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static foldRightIndexed(param0: native.Array<boolean>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangFloat>;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangLong;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangFloat;
			public static none(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): boolean;
			public static sortByDescending(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): void;
			public static min(param0: native.Array<javalangDouble>): javalangDouble;
			public static plus(param0: native.Array<boolean>, param1: boolean): native.Array<boolean>;
			public static sortedByDescending(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static groupingBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): kotlin.collections.Grouping;
			public static filterTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static groupBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangShort;
			public static lastOrNull(param0: native.Array<boolean>): javalangBoolean;
			public static reduceIndexed(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function3): boolean;
			public static getIndices(param0: native.Array<javalangObject>): kotlin.ranges.IntRange;
			public static zip(param0: native.Array<boolean>, param1: native.Array<boolean>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static zip(param0: native.Array<number>, param1: javalangIterable): javautilList;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangLong;
			public static filterIndexed(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static distinct(param0: native.Array<number>): javautilList;
			public static zip(param0: native.Array<string>, param1: native.Array<string>): javautilList;
			public static sorted(param0: native.Array<string>): javautilList;
			public static toSortedSet(param0: native.Array<boolean>): javautilSortedSet;
			public static mapIndexed(param0: native.Array<string>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangFloat;
			public static asList(param0: native.Array<number>): javautilList;
			public static groupBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangFloat;
			public static binarySearch(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
			public static forEachIndexed(param0: native.Array<string>, param1: kotlin.jvm.functions.Function2): void;
			public static toCollection(param0: native.Array<boolean>, param1: javautilCollection): javautilCollection;
			public static any(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static joinTo(param0: native.Array<string>, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static last(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): string;
			public static min(param0: native.Array<javalangFloat>): javalangFloat;
			public static takeLast(param0: native.Array<string>, param1: number): javautilList;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangShort;
			public static filterIsInstance(param0: native.Array<javalangObject>, param1: javalangClass): javautilList;
			public static singleOrNull(param0: native.Array<number>): javalangShort;
			public static singleOrNull(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static filter(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static foldRight(param0: native.Array<javalangObject>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static asSequence(param0: native.Array<string>): kotlin.sequences.Sequence;
			public static sliceArray(param0: native.Array<string>, param1: javautilCollection): native.Array<string>;
			public static subtract(param0: native.Array<javalangObject>, param1: javalangIterable): javautilSet;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangShort;
			public static mapIndexed(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangShort;
			public static zip(param0: native.Array<boolean>, param1: native.Array<boolean>): javautilList;
			public static reversed(param0: native.Array<javalangObject>): javautilList;
			public static first(param0: native.Array<string>): string;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangInteger;
			public static singleOrNull(param0: native.Array<number>): javalangFloat;
			public static foldRight(param0: native.Array<string>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static withIndex(param0: native.Array<javalangObject>): javalangIterable;
			public static withIndex(param0: native.Array<string>): javalangIterable;
			public static count(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): number;
			public static filter(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static flatMapTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static min(param0: native.Array<string>): javalangCharacter;
			public static single(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): string;
			public static slice(param0: native.Array<number>, param1: kotlin.ranges.IntRange): javautilList;
			public static count(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static none(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): boolean;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangDouble;
			public static groupBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static asIterable(param0: native.Array<javalangObject>): javalangIterable;
			public static averageOfByte(param0: native.Array<javalangByte>): number;
			public static lastIndexOf(param0: native.Array<string>, param1: string): number;
			public static reduce(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): javalangObject;
			public static singleOrNull(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static single(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static asSequence(param0: native.Array<boolean>): kotlin.sequences.Sequence;
			public static foldIndexed(param0: native.Array<boolean>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static associateByTo(param0: native.Array<javalangObject>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static forEachIndexed(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function2): void;
			public static toCollection(param0: native.Array<string>, param1: javautilCollection): javautilCollection;
			public static singleOrNull(param0: native.Array<number>): javalangDouble;
			public static mapNotNull(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangLong;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangInteger;
			public static sumOfInt(param0: native.Array<javalangInteger>): number;
			public static firstOrNull(param0: native.Array<javalangObject>): javalangObject;
			public static last(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static mapIndexedNotNullTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static groupBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static indexOfLast(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static sortedByDescending(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static foldRightIndexed(param0: native.Array<javalangObject>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static maxBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static sortDescending(param0: native.Array<string>): void;
			public static minWith(param0: native.Array<string>, param1: javautilComparator): javalangCharacter;
			public static groupByTo(param0: native.Array<string>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static map(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sliceArray(param0: native.Array<boolean>, param1: kotlin.ranges.IntRange): native.Array<boolean>;
			public static toMutableSet(param0: native.Array<number>): javautilSet;
			public static sumOfFloat(param0: native.Array<javalangFloat>): number;
			public static singleOrNull(param0: native.Array<boolean>): javalangBoolean;
			public static zip(param0: native.Array<javalangObject>, param1: javalangIterable): javautilList;
			public static reversedArray(param0: native.Array<string>): native.Array<string>;
			public static maxWith(param0: native.Array<javalangObject>, param1: javautilComparator): javalangObject;
			public static zip(param0: native.Array<javalangObject>, param1: native.Array<javalangObject>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static foldIndexed(param0: native.Array<javalangObject>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static associateBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static max(param0: native.Array<number>): javalangShort;
			public static sortedWith(param0: native.Array<number>, param1: javautilComparator): javautilList;
			public static maxBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javalangBoolean;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangFloat;
			public static singleOrNull(param0: native.Array<number>): javalangLong;
			public static fill(param0: native.Array<boolean>, param1: boolean, param2: number, param3: number): void;
			public static dropLastWhile(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static plus(param0: native.Array<string>, param1: string): native.Array<string>;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangShort;
			public static associateBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static mapTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static distinctBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static lastOrNull(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static filterIsInstanceTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: javalangClass): javautilCollection;
			public static toDoubleArray(param0: native.Array<javalangDouble>): native.Array<number>;
			public static reduceRight(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): javalangObject;
			public static sliceArray(param0: native.Array<string>, param1: kotlin.ranges.IntRange): native.Array<string>;
			public static filter(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static toSortedSet(param0: native.Array<number>): javautilSortedSet;
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangInteger;
			public static averageOfLong(param0: native.Array<javalangLong>): number;
			public static single(param0: native.Array<boolean>): boolean;
			public static slice(param0: native.Array<string>, param1: javalangIterable): javautilList;
			public static singleOrNull(param0: native.Array<number>): javalangInteger;
			public static takeLastWhile(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static reduce(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function2): boolean;
			public static zip(param0: native.Array<boolean>, param1: javalangIterable): javautilList;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangInteger;
			public static single(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangLong;
			public static drop(param0: native.Array<javalangObject>, param1: number): javautilList;
			public static reduceRight(param0: native.Array<number>, param1: kotlin.jvm.functions.Function2): number;
			public static distinct(param0: native.Array<boolean>): javautilList;
			public static indexOf(param0: native.Array<boolean>, param1: boolean): number;
			public static partition(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static filterNotNullTo(param0: native.Array<javalangObject>, param1: javautilCollection): javautilCollection;
			public static forEach(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): void;
			public static last(param0: native.Array<string>): string;
			public static plus(param0: native.Array<javalangObject>, param1: javalangObject): native.Array<javalangObject>;
			public static plus(param0: native.Array<number>, param1: javautilCollection): native.Array<number>;
			public static toFloatArray(param0: native.Array<javalangFloat>): native.Array<number>;
			public static distinct(param0: native.Array<string>): javautilList;
			public static toList(param0: native.Array<string>): javautilList;
			public static sumOfByte(param0: native.Array<javalangByte>): number;
			public static zip(param0: native.Array<string>, param1: native.Array<string>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static filterNot(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static lastOrNull(param0: native.Array<string>): javalangCharacter;
			public static asIterable(param0: native.Array<number>): javalangIterable;
			public static zip(param0: native.Array<boolean>, param1: javalangIterable, param2: kotlin.jvm.functions.Function2): javautilList;
			public static all(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangDouble>;
			public static reversedArray(param0: native.Array<number>): native.Array<number>;
			public static toHashSet(param0: native.Array<boolean>): javautilHashSet;
			public static union(param0: native.Array<boolean>, param1: javalangIterable): javautilSet;
			public static filterNot(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static asList(param0: native.Array<javalangObject>): javautilList;
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangLong;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangLong;
			public static zip(param0: native.Array<string>, param1: native.Array<javalangObject>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static dropLast(param0: native.Array<string>, param1: number): javautilList;
			public static toMutableList(param0: native.Array<javalangObject>): javautilList;
			public static associate(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static min(param0: native.Array<number>): javalangInteger;
			public static firstOrNull(param0: native.Array<number>): javalangFloat;
			public static dropWhile(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static max(param0: native.Array<javalangDouble>): javalangDouble;
			public static flatMapTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static sumBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): number;
			public static forEach(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): void;
			public static getOrNull(param0: native.Array<string>, param1: number): javalangCharacter;
			public static singleOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangByte;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangByte;
			public static sliceArray(param0: native.Array<number>, param1: kotlin.ranges.IntRange): native.Array<number>;
			public static intersect(param0: native.Array<string>, param1: javalangIterable): javautilSet;
			public static singleOrNull(param0: native.Array<number>): javalangByte;
			public static groupByTo(param0: native.Array<boolean>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static none(param0: native.Array<javalangObject>): boolean;
			public static toHashSet(param0: native.Array<number>): javautilHashSet;
			public static joinToString(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static single(param0: native.Array<javalangObject>): javalangObject;
			public static associateByTo(param0: native.Array<string>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static binarySearch(param0: native.Array<javalangObject>, param1: javalangObject, param2: javautilComparator, param3: number, param4: number): number;
			public static reverse(param0: native.Array<javalangObject>): void;
			public static firstOrNull(param0: native.Array<number>): javalangShort;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangShort>;
			public static asSequence(param0: native.Array<number>): kotlin.sequences.Sequence;
			public static zip(param0: native.Array<string>, param1: javalangIterable): javautilList;
			public static lastOrNull(param0: native.Array<javalangObject>): javalangObject;
			public static takeLastWhile(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static none(param0: native.Array<string>): boolean;
			public static toHashSet(param0: native.Array<string>): javautilHashSet;
			public static reduceRightIndexed(param0: native.Array<number>, param1: kotlin.jvm.functions.Function3): number;
			public static firstOrNull(param0: native.Array<boolean>): javalangBoolean;
			public static lastIndexOf(param0: native.Array<boolean>, param1: boolean): number;
			public static sort(param0: native.Array<number>): void;
			public static minBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static zip(param0: native.Array<number>, param1: native.Array<number>): javautilList;
			public static intersect(param0: native.Array<number>, param1: javalangIterable): javautilSet;
			public static fold(param0: native.Array<boolean>, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static groupByTo(param0: native.Array<javalangObject>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static maxBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static sortedWith(param0: native.Array<string>, param1: javautilComparator): javautilList;
			public static mapIndexedTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static partition(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static min(param0: native.Array<number>): javalangLong;
			public static reversedArray(param0: native.Array<boolean>): native.Array<boolean>;
			public static sortDescending(param0: native.Array<number>): void;
			public static lastOrNull(param0: native.Array<number>): javalangLong;
			public static binarySearch(param0: native.Array<javalangObject>, param1: javalangObject, param2: number, param3: number): number;
			public static indexOf(param0: native.Array<javalangObject>, param1: javalangObject): number;
			public static mapIndexedNotNull(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static averageOfFloat(param0: native.Array<javalangFloat>): number;
			public static reduceRightIndexed(param0: native.Array<string>, param1: kotlin.jvm.functions.Function3): string;
			public static toTypedArray(param0: native.Array<boolean>): native.Array<javalangBoolean>;
			public static forEach(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): void;
			public static indexOfLast(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): number;
			public static plus(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
			public static toCollection(param0: native.Array<number>, param1: javautilCollection): javautilCollection;
			public static any(param0: native.Array<boolean>): boolean;
			public static zip(param0: native.Array<number>, param1: native.Array<javalangObject>): javautilList;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangInteger>;
			public static mapIndexedTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static sumByDouble(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): number;
			public static single(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static takeWhile(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static toShortArray(param0: native.Array<javalangShort>): native.Array<number>;
			public static count(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): number;
			public static reduceRightIndexed(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function3): javalangObject;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangDouble;
			public static associate(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static contains(param0: native.Array<string>, param1: string): boolean;
			public static sortedDescending(param0: native.Array<javalangComparable>): javautilList;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangByte;
			public static joinToString(param0: native.Array<javalangObject>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static getOrNull(param0: native.Array<boolean>, param1: number): javalangBoolean;
			public static none(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static max(param0: native.Array<number>): javalangFloat;
			public static getIndices(param0: native.Array<number>): kotlin.ranges.IntRange;
			public static minWith(param0: native.Array<boolean>, param1: javautilComparator): javalangBoolean;
			public static asIterable(param0: native.Array<boolean>): javalangIterable;
			public static sortedDescending(param0: native.Array<string>): javautilList;
			public static mapIndexed(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function2): javautilList;
			public static indexOfFirst(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): number;
			public static filterTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static sliceArray(param0: native.Array<boolean>, param1: javautilCollection): native.Array<boolean>;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangLong;
			public static takeWhile(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static dropLast(param0: native.Array<boolean>, param1: number): javautilList;
			public static toIntArray(param0: native.Array<javalangInteger>): native.Array<number>;
			public static sumBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): number;
			public static any(param0: native.Array<string>): boolean;
			public static filter(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static getLastIndex(param0: native.Array<boolean>): number;
			public static associateBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static last(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): boolean;
			public static toMutableList(param0: native.Array<string>): javautilList;
			public static averageOfInt(param0: native.Array<javalangInteger>): number;
			public static filterIndexedTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static lastIndexOf(param0: native.Array<javalangObject>, param1: javalangObject): number;
			public static toByteArray(param0: native.Array<javalangByte>): native.Array<number>;
			public static single(param0: native.Array<string>): string;
			public static zip(param0: native.Array<boolean>, param1: native.Array<javalangObject>): javautilList;
			public static filterNotTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static dropWhile(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sortedWith(param0: native.Array<javalangObject>, param1: javautilComparator): javautilList;
			public static union(param0: native.Array<string>, param1: javalangIterable): javautilSet;
			public constructor();
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangDouble;
			public static flatMapTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static lastOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangDouble;
			public static indexOfFirst(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): number;
			public static withIndex(param0: native.Array<number>): javalangIterable;
			public static max(param0: native.Array<number>): javalangDouble;
			public static groupBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static maxWith(param0: native.Array<boolean>, param1: javautilComparator): javalangBoolean;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangByte;
			public static slice(param0: native.Array<boolean>, param1: kotlin.ranges.IntRange): javautilList;
			public static all(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): boolean;
			public static slice(param0: native.Array<string>, param1: kotlin.ranges.IntRange): javautilList;
			public static sortedBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static joinToString(param0: native.Array<boolean>, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static first(param0: native.Array<javalangObject>): javalangObject;
			public static asIterable(param0: native.Array<string>): javalangIterable;
			public static min(param0: native.Array<number>): javalangByte;
			public static sorted(param0: native.Array<number>): javautilList;
			public static asSequence(param0: native.Array<javalangObject>): kotlin.sequences.Sequence;
			public static min(param0: native.Array<javalangComparable>): javalangComparable;
			public static filterTo(param0: native.Array<javalangObject>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static filterNotTo(param0: native.Array<boolean>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static takeLast(param0: native.Array<number>, param1: number): javautilList;
			public static fill(param0: native.Array<string>, param1: string, param2: number, param3: number): void;
			public static filterIndexedTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static indexOfFirst(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): number;
			public static joinTo(param0: native.Array<number>, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static map(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sortedArray(param0: native.Array<javalangComparable>): native.Array<javalangComparable>;
			public static reverse(param0: native.Array<boolean>): void;
			public static fill(param0: native.Array<javalangObject>, param1: javalangObject, param2: number, param3: number): void;
			public static lastIndexOf(param0: native.Array<number>, param1: number): number;
			public static sliceArray(param0: native.Array<javalangObject>, param1: kotlin.ranges.IntRange): native.Array<javalangObject>;
			public static distinctBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sortBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): void;
			public static mapTo(param0: native.Array<number>, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static reduceIndexed(param0: native.Array<number>, param1: kotlin.jvm.functions.Function3): number;
			public static associate(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static sliceArray(param0: native.Array<number>, param1: javautilCollection): native.Array<number>;
			public static minWith(param0: native.Array<number>, param1: javautilComparator): javalangByte;
			public static dropWhile(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static plus(param0: native.Array<boolean>, param1: native.Array<boolean>): native.Array<boolean>;
			public static groupBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static toHashSet(param0: native.Array<javalangObject>): javautilHashSet;
			public static firstOrNull(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangByte;
			public static subtract(param0: native.Array<number>, param1: javalangIterable): javautilSet;
			public static zip(param0: native.Array<number>, param1: javalangIterable, param2: kotlin.jvm.functions.Function2): javautilList;
			public static map(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static distinctBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sum(param0: native.Array<number>): number;
			public static forEachIndexed(param0: native.Array<number>, param1: kotlin.jvm.functions.Function2): void;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangDouble;
			public static minBy(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javalangBoolean;
			public static mapIndexedTo(param0: native.Array<string>, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static zip(param0: native.Array<string>, param1: javalangIterable, param2: kotlin.jvm.functions.Function2): javautilList;
			public static last(param0: native.Array<boolean>): boolean;
			public static any(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): boolean;
			public static sumBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): number;
			public static slice(param0: native.Array<javalangObject>, param1: kotlin.ranges.IntRange): javautilList;
			public static firstOrNull(param0: native.Array<string>): javalangCharacter;
			public static plus(param0: native.Array<string>, param1: javautilCollection): native.Array<string>;
			public static average(param0: native.Array<number>): number;
			public static reduceRight(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function2): boolean;
			public static firstOrNull(param0: native.Array<number>): javalangInteger;
			public static toTypedArray(param0: native.Array<number>): native.Array<javalangLong>;
			public static indexOfFirst(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): number;
			public static dropLast(param0: native.Array<number>, param1: number): javautilList;
			public static reversed(param0: native.Array<number>): javautilList;
			public static getLastIndex(param0: native.Array<string>): number;
			public static indexOfLast(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): number;
			public static partition(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static max(param0: native.Array<javalangComparable>): javalangComparable;
			public static sortedWith(param0: native.Array<boolean>, param1: javautilComparator): javautilList;
			public static toList(param0: native.Array<javalangObject>): javautilList;
			public static subtract(param0: native.Array<string>, param1: javalangIterable): javautilSet;
			public static max(param0: native.Array<number>): javalangInteger;
			public static associateBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static sortedByDescending(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static partition(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static associateBy(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static associateTo(param0: native.Array<javalangObject>, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static associateByTo(param0: native.Array<javalangObject>, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static toList(param0: native.Array<number>): javautilList;
			public static max(param0: native.Array<javalangFloat>): javalangFloat;
			public static dropLast(param0: native.Array<javalangObject>, param1: number): javautilList;
			public static toList(param0: native.Array<boolean>): javautilList;
			public static sortWith(param0: native.Array<javalangObject>, param1: javautilComparator): void;
			public static getLastIndex(param0: native.Array<number>): number;
			public static union(param0: native.Array<number>, param1: javalangIterable): javautilSet;
			public static any(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function1): boolean;
			public static reduceIndexed(param0: native.Array<javalangObject>, param1: kotlin.jvm.functions.Function3): javalangObject;
			public static sortedBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static foldIndexed(param0: native.Array<number>, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static dropLastWhile(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static reduceRight(param0: native.Array<string>, param1: kotlin.jvm.functions.Function2): string;
			public static zip(param0: native.Array<number>, param1: native.Array<javalangObject>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static getOrNull(param0: native.Array<number>, param1: number): javalangInteger;
			public static take(param0: native.Array<javalangObject>, param1: number): javautilList;
			public static zip(param0: native.Array<boolean>, param1: native.Array<javalangObject>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static reversedArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
			public static getLastIndex(param0: native.Array<javalangObject>): number;
			public static reverse(param0: native.Array<number>): void;
			public static filterNot(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static maxBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangByte;
			public static forEach(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): void;
			public static toMutableSet(param0: native.Array<string>): javautilSet;
			public static sortedArrayWith(param0: native.Array<javalangObject>, param1: javautilComparator): native.Array<javalangObject>;
			public static zip(param0: native.Array<number>, param1: native.Array<number>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static min(param0: native.Array<number>): javalangDouble;
			public static minWith(param0: native.Array<javalangObject>, param1: javautilComparator): javalangObject;
			public static asList(param0: native.Array<string>): javautilList;
			public static toSet(param0: native.Array<boolean>): javautilSet;
			public static maxWith(param0: native.Array<number>, param1: javautilComparator): javalangInteger;
			public static associateBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static singleOrNull(param0: native.Array<boolean>, param1: kotlin.jvm.functions.Function1): javalangBoolean;
			public static intersect(param0: native.Array<boolean>, param1: javalangIterable): javautilSet;
			public static map(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static distinctBy(param0: native.Array<string>, param1: kotlin.jvm.functions.Function1): javautilList;
			public static sumOfShort(param0: native.Array<javalangShort>): number;
			public static sort(param0: native.Array<javalangObject>): void;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangByte;
			public static minBy(param0: native.Array<number>, param1: kotlin.jvm.functions.Function1): javalangDouble;
			public static plus(param0: native.Array<javalangObject>, param1: javautilCollection): native.Array<javalangObject>;
			public static first(param0: native.Array<boolean>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ArraysUtilJVM {
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class BooleanIterator {
			public next(): javalangBoolean;
			public nextBoolean(): boolean;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ByteIterator {
			public next(): javalangByte;
			public nextByte(): number;
			public constructor();
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class CharIterator {
			public nextChar(): string;
			public constructor();
			public next(): javalangCharacter;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt extends kotlin.collections.CollectionsKt___CollectionsKt {
		}
	}
}

import javautilArrayList = java.util.ArrayList;
declare module kotlin {
	export module collections {
		export class CollectionsKt__CollectionsKt {
			public static binarySearch(param0: javautilList, param1: javalangComparable, param2: number, param3: number): number;
			public static emptyList(): javautilList;
			public static listOfNotNull(param0: native.Array<javalangObject>): javautilList;
			public static mutableListOf(param0: native.Array<javalangObject>): javautilList;
			public static getLastIndex(param0: javautilList): number;
			public static listOfNotNull(param0: javalangObject): javautilList;
			public static listOf(param0: javalangObject): javautilList;
			public static optimizeReadOnlyList(param0: javautilList): javautilList;
			public static binarySearch(param0: javautilList, param1: number, param2: number, param3: kotlin.jvm.functions.Function1): number;
			public constructor();
			public static binarySearch(param0: javautilList, param1: javalangObject, param2: javautilComparator, param3: number, param4: number): number;
			public static arrayListOf(param0: native.Array<javalangObject>): javautilArrayList;
			public static listOf(param0: native.Array<javalangObject>): javautilList;
			public static getIndices(param0: javautilCollection): kotlin.ranges.IntRange;
			public static binarySearchBy(param0: javautilList, param1: javalangComparable, param2: number, param3: number, param4: kotlin.jvm.functions.Function1): number;
			public static asCollection(param0: native.Array<javalangObject>): javautilCollection;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__IterablesKt extends kotlin.collections.CollectionsKt__CollectionsKt {
			public static convertToSetForSetOperation(param0: javalangIterable): javautilCollection;
			public static unzip(param0: javalangIterable): kotlin.Pair;
			public static convertToSetForSetOperationWith(param0: javalangIterable, param1: javalangIterable): javautilCollection;
			public static flatten(param0: javalangIterable): javautilList;
			public static collectionSizeOrNull(param0: javalangIterable): javalangInteger;
			public constructor();
			public static collectionSizeOrDefault(param0: javalangIterable, param1: number): number;
		}
	}
}

import javautilEnumeration = java.util.Enumeration;
declare module kotlin {
	export module collections {
		export class CollectionsKt__IteratorsKt extends kotlin.collections.CollectionsKt__IterablesKt {
			public static forEach(param0: javautilIterator, param1: kotlin.jvm.functions.Function1): void;
			public static iterator(param0: javautilEnumeration): javautilIterator;
			public constructor();
			public static withIndex(param0: javautilIterator): javautilIterator;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__MutableCollectionsKt extends kotlin.collections.CollectionsKt__IteratorsKt {
			public static removeAll(param0: javautilCollection, param1: native.Array<javalangObject>): boolean;
			public static sort(param0: javautilList): void;
			public static removeAll(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): boolean;
			public static sortWith(param0: javautilList, param1: javautilComparator): void;
			public static removeAll(param0: javautilCollection, param1: javalangIterable): boolean;
			public static retainAll(param0: javautilCollection, param1: kotlin.sequences.Sequence): boolean;
			public constructor();
			public static retainAll(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): boolean;
			public static removeAll(param0: javautilCollection, param1: kotlin.sequences.Sequence): boolean;
			public static retainAll(param0: javautilCollection, param1: javalangIterable): boolean;
			public static addAll(param0: javautilCollection, param1: native.Array<javalangObject>): boolean;
			public static addAll(param0: javautilCollection, param1: javalangIterable): boolean;
			public static retainAll(param0: javautilList, param1: kotlin.jvm.functions.Function1): boolean;
			public static removeAll(param0: javautilList, param1: kotlin.jvm.functions.Function1): boolean;
			public static addAll(param0: javautilCollection, param1: kotlin.sequences.Sequence): boolean;
			public static retainAll(param0: javautilCollection, param1: native.Array<javalangObject>): boolean;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt__ReversedViewsKt extends kotlin.collections.CollectionsKt__MutableCollectionsKt {
			public static asReversed(param0: javautilList): javautilList;
			public constructor();
			public static asReversedMutable(param0: javautilList): javautilList;
		}
	}
}

declare module kotlin {
	export module collections {
		export class CollectionsKt___CollectionsKt extends kotlin.collections.CollectionsKt__ReversedViewsKt {
			public static filterIndexedTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static contains(param0: javalangIterable, param1: javalangObject): boolean;
			public static lastOrNull(param0: javautilList): javalangObject;
			public static indexOf(param0: javautilList, param1: javalangObject): number;
			public static minus(param0: javalangIterable, param1: javalangIterable): javautilList;
			public static joinToString(param0: javalangIterable, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static sumOfShort(param0: javalangIterable): number;
			public static any(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): boolean;
			public static slice(param0: javautilList, param1: javalangIterable): javautilList;
			public static min(param0: javalangIterable): javalangFloat;
			public static min(param0: javalangIterable): javalangComparable;
			public static indexOfFirst(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): number;
			public static dropLastWhile(param0: javautilList, param1: kotlin.jvm.functions.Function1): javautilList;
			public static mapTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static max(param0: javalangIterable): javalangComparable;
			public static single(param0: javautilList): javalangObject;
			public static sortedByDescending(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static distinctBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static mapIndexed(param0: javalangIterable, param1: kotlin.jvm.functions.Function2): javautilList;
			public static groupBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static filterIsInstanceTo(param0: javalangIterable, param1: javautilCollection, param2: javalangClass): javautilCollection;
			public static take(param0: javalangIterable, param1: number): javautilList;
			public static lastOrNull(param0: javautilList, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static toShortArray(param0: javautilCollection): native.Array<number>;
			public static minBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static minWith(param0: javalangIterable, param1: javautilComparator): javalangObject;
			public static single(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static toMutableList(param0: javautilCollection): javautilList;
			public static averageOfDouble(param0: javalangIterable): number;
			public constructor();
			public static sortedWith(param0: javalangIterable, param1: javautilComparator): javautilList;
			public static fold(param0: javalangIterable, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static foldRight(param0: javautilList, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static sorted(param0: javalangIterable): javautilList;
			public static toList(param0: javalangIterable): javautilList;
			public static first(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static sumOfByte(param0: javalangIterable): number;
			public static requireNoNulls(param0: javautilList): javautilList;
			public static filterNotNull(param0: javalangIterable): javautilList;
			public static union(param0: javalangIterable, param1: javalangIterable): javautilSet;
			public static onEach(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangIterable;
			public static lastIndexOf(param0: javalangIterable, param1: javalangObject): number;
			public static lastOrNull(param0: javalangIterable): javalangObject;
			public static reduceRight(param0: javautilList, param1: kotlin.jvm.functions.Function2): javalangObject;
			public static flatMap(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static subtract(param0: javalangIterable, param1: javalangIterable): javautilSet;
			public static forEach(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): void;
			public static plus(param0: javalangIterable, param1: native.Array<javalangObject>): javautilList;
			public static toSortedSet(param0: javalangIterable): javautilSortedSet;
			public static lastIndexOf(param0: javautilList, param1: javalangObject): number;
			public static maxBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static minus(param0: javalangIterable, param1: javalangObject): javautilList;
			public static reverse(param0: javautilList): void;
			public static sortedBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static withIndex(param0: javalangIterable): javalangIterable;
			public static all(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): boolean;
			public static toIntArray(param0: javautilCollection): native.Array<number>;
			public static groupingBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): kotlin.collections.Grouping;
			public static lastOrNull(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static plus(param0: javautilCollection, param1: kotlin.sequences.Sequence): javautilList;
			public static firstOrNull(param0: javalangIterable): javalangObject;
			public static mapIndexedNotNullTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static averageOfByte(param0: javalangIterable): number;
			public static sumOfFloat(param0: javalangIterable): number;
			public static toSortedSet(param0: javalangIterable, param1: javautilComparator): javautilSortedSet;
			public static reduceIndexed(param0: javalangIterable, param1: kotlin.jvm.functions.Function3): javalangObject;
			public static filterTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static sortedDescending(param0: javalangIterable): javautilList;
			public static first(param0: javautilList): javalangObject;
			public static drop(param0: javalangIterable, param1: number): javautilList;
			public static associateByTo(param0: javalangIterable, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static any(param0: javalangIterable): boolean;
			public static getOrNull(param0: javautilList, param1: number): javalangObject;
			public static count(param0: javalangIterable): number;
			public static mapIndexedNotNull(param0: javalangIterable, param1: kotlin.jvm.functions.Function2): javautilList;
			public static map(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static singleOrNull(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static plus(param0: javalangIterable, param1: kotlin.sequences.Sequence): javautilList;
			public static singleOrNull(param0: javalangIterable): javalangObject;
			public static associateTo(param0: javalangIterable, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static mapNotNullTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static maxWith(param0: javalangIterable, param1: javautilComparator): javalangObject;
			public static mapNotNull(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static reduce(param0: javalangIterable, param1: kotlin.jvm.functions.Function2): javalangObject;
			public static toCollection(param0: javalangIterable, param1: javautilCollection): javautilCollection;
			public static groupByTo(param0: javalangIterable, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static plus(param0: javautilCollection, param1: native.Array<javalangObject>): javautilList;
			public static dropWhile(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static dropLast(param0: javautilList, param1: number): javautilList;
			public static partition(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static reversed(param0: javalangIterable): javautilList;
			public static zip(param0: javalangIterable, param1: native.Array<javalangObject>): javautilList;
			public static averageOfInt(param0: javalangIterable): number;
			public static filterNot(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static toBooleanArray(param0: javautilCollection): native.Array<boolean>;
			public static groupBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static minus(param0: javalangIterable, param1: native.Array<javalangObject>): javautilList;
			public static filter(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static toSet(param0: javalangIterable): javautilSet;
			public static toByteArray(param0: javautilCollection): native.Array<number>;
			public static takeLast(param0: javautilList, param1: number): javautilList;
			public static elementAt(param0: javalangIterable, param1: number): javalangObject;
			public static plus(param0: javautilCollection, param1: javalangIterable): javautilList;
			public static averageOfLong(param0: javalangIterable): number;
			public static associateBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static indexOfFirst(param0: javautilList, param1: kotlin.jvm.functions.Function1): number;
			public static forEach(param0: javautilIterator, param1: kotlin.jvm.functions.Function1): void;
			public static associateBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static withIndex(param0: javautilIterator): javautilIterator;
			public static sumBy(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): number;
			public static mapIndexedTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static filterIsInstance(param0: javalangIterable, param1: javalangClass): javautilList;
			public static indexOfLast(param0: javautilList, param1: kotlin.jvm.functions.Function1): number;
			public static takeWhile(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilList;
			public static last(param0: javautilList): javalangObject;
			public static max(param0: javalangIterable): javalangFloat;
			public static sortBy(param0: javautilList, param1: kotlin.jvm.functions.Function1): void;
			public static toLongArray(param0: javautilCollection): native.Array<number>;
			public static sortDescending(param0: javautilList): void;
			public static averageOfShort(param0: javalangIterable): number;
			public static firstOrNull(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static associate(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static associateByTo(param0: javalangIterable, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static zip(param0: javalangIterable, param1: native.Array<javalangObject>, param2: kotlin.jvm.functions.Function2): javautilList;
			public static toCharArray(param0: javautilCollection): native.Array<string>;
			public static sumByDouble(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): number;
			public static joinTo(param0: javalangIterable, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static elementAtOrNull(param0: javalangIterable, param1: number): javalangObject;
			public static slice(param0: javautilList, param1: kotlin.ranges.IntRange): javautilList;
			public static elementAtOrElse(param0: javalangIterable, param1: number, param2: kotlin.jvm.functions.Function1): javalangObject;
			public static count(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): number;
			public static minus(param0: javalangIterable, param1: kotlin.sequences.Sequence): javautilList;
			public static distinct(param0: javalangIterable): javautilList;
			public static toMutableSet(param0: javalangIterable): javautilSet;
			public static foldIndexed(param0: javalangIterable, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static takeLastWhile(param0: javautilList, param1: kotlin.jvm.functions.Function1): javautilList;
			public static singleOrNull(param0: javautilList): javalangObject;
			public static filterIndexed(param0: javalangIterable, param1: kotlin.jvm.functions.Function2): javautilList;
			public static intersect(param0: javalangIterable, param1: javalangIterable): javautilSet;
			public static first(param0: javalangIterable): javalangObject;
			public static requireNoNulls(param0: javalangIterable): javalangIterable;
			public static sumOfDouble(param0: javalangIterable): number;
			public static plus(param0: javalangIterable, param1: javalangIterable): javautilList;
			public static toHashSet(param0: javalangIterable): javautilHashSet;
			public static single(param0: javalangIterable): javalangObject;
			public static forEachIndexed(param0: javalangIterable, param1: kotlin.jvm.functions.Function2): void;
			public static groupByTo(param0: javalangIterable, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static last(param0: javautilList, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static last(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static last(param0: javalangIterable): javalangObject;
			public static filterNotTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static toDoubleArray(param0: javautilCollection): native.Array<number>;
			public static none(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): boolean;
			public static toMutableList(param0: javalangIterable): javautilList;
			public static zip(param0: javalangIterable, param1: javalangIterable, param2: kotlin.jvm.functions.Function2): javautilList;
			public static sumOfInt(param0: javalangIterable): number;
			public static asSequence(param0: javalangIterable): kotlin.sequences.Sequence;
			public static max(param0: javalangIterable): javalangDouble;
			public static averageOfFloat(param0: javalangIterable): number;
			public static none(param0: javalangIterable): boolean;
			public static indexOf(param0: javalangIterable, param1: javalangObject): number;
			public static zip(param0: javalangIterable, param1: javalangIterable): javautilList;
			public static sortByDescending(param0: javautilList, param1: kotlin.jvm.functions.Function1): void;
			public static sumOfLong(param0: javalangIterable): number;
			public static foldRightIndexed(param0: javautilList, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static toFloatArray(param0: javautilCollection): native.Array<number>;
			public static reduceRightIndexed(param0: javautilList, param1: kotlin.jvm.functions.Function3): javalangObject;
			public static indexOfLast(param0: javalangIterable, param1: kotlin.jvm.functions.Function1): number;
			public static filterNotNullTo(param0: javalangIterable, param1: javautilCollection): javautilCollection;
			public static plus(param0: javalangIterable, param1: javalangObject): javautilList;
			public static flatMapTo(param0: javalangIterable, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static firstOrNull(param0: javautilList): javalangObject;
			public static min(param0: javalangIterable): javalangDouble;
			public static plus(param0: javautilCollection, param1: javalangObject): javautilList;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class DoubleIterator {
			public nextDouble(): number;
			public next(): javalangDouble;
			public constructor();
			public remove(): void;
		}
	}
}

import javalangVoid = java.lang.Void;
declare module kotlin {
	export module collections {
		export class EmptyIterator {
			public static INSTANCE: kotlin.collections.EmptyIterator;
			public add(param0: javalangVoid): void;
			public next(): javalangVoid;
			public previous(): javalangVoid;
			public hasPrevious(): boolean;
			public previousIndex(): number;
			public set(param0: javalangVoid): void;
			public hasNext(): boolean;
			public nextIndex(): number;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyList {
			public static INSTANCE: kotlin.collections.EmptyList;
			public subList(param0: number, param1: number): javautilList;
			public addAll(param0: javautilCollection): boolean;
			public equals(param0: javalangObject): boolean;
			public iterator(): javautilIterator;
			public listIterator(): javautilListIterator;
			public getSize(): number;
			public get(param0: number): javalangVoid;
			public lastIndexOf(param0: javalangVoid): number;
			public lastIndexOf(param0: javalangObject): number;
			public containsAll(param0: javautilCollection): boolean;
			public retainAll(param0: javautilCollection): boolean;
			public contains(param0: javalangObject): boolean;
			public add(param0: javalangVoid): boolean;
			public clear(): void;
			public listIterator(param0: number): javautilListIterator;
			public size(): number;
			public isEmpty(): boolean;
			public contains(param0: javalangVoid): boolean;
			public add(param0: number, param1: javalangVoid): void;
			public toArray(): native.Array<javalangObject>;
			public indexOf(param0: javalangVoid): number;
			public set(param0: number, param1: javalangVoid): javalangVoid;
			public remove(param0: javalangObject): boolean;
			public removeAll(param0: javautilCollection): boolean;
			public remove(param0: number): javalangVoid;
			public toString(): string;
			public indexOf(param0: javalangObject): number;
			public addAll(param0: number, param1: javautilCollection): boolean;
			public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptyMap {
			public static INSTANCE: kotlin.collections.EmptyMap;
			public keySet(): javautilSet;
			public clear(): void;
			public containsKey(param0: javalangObject): boolean;
			public getEntries(): javautilSet;
			public values(): javautilCollection;
			public size(): number;
			public isEmpty(): boolean;
			public equals(param0: javalangObject): boolean;
			public remove(param0: javalangObject): javalangObject;
			public getSize(): number;
			public toString(): string;
			public entrySet(): javautilSet;
			public getValues(): javautilCollection;
			public get(param0: javalangObject): javalangVoid;
			public put(param0: javalangObject, param1: javalangVoid): javalangVoid;
			public containsValue(param0: javalangObject): boolean;
			public getKeys(): javautilSet;
			public containsValue(param0: javalangVoid): boolean;
			public hashCode(): number;
			public get(param0: javalangObject): javalangObject;
			public putAll(param0: javautilMap): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class EmptySet {
			public static INSTANCE: kotlin.collections.EmptySet;
			public clear(): void;
			public size(): number;
			public isEmpty(): boolean;
			public contains(param0: javalangVoid): boolean;
			public addAll(param0: javautilCollection): boolean;
			public equals(param0: javalangObject): boolean;
			public iterator(): javautilIterator;
			public toArray(): native.Array<javalangObject>;
			public getSize(): number;
			public remove(param0: javalangObject): boolean;
			public removeAll(param0: javautilCollection): boolean;
			public toString(): string;
			public containsAll(param0: javautilCollection): boolean;
			public retainAll(param0: javautilCollection): boolean;
			public contains(param0: javalangObject): boolean;
			public add(param0: javalangVoid): boolean;
			public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class FloatIterator {
			public nextFloat(): number;
			public constructor();
			public remove(): void;
			public next(): javalangFloat;
		}
	}
}

declare module kotlin {
	export module collections {
		export class Grouping {
			/**
			 * Constructs a new instance of the kotlin.collections.Grouping interface with the provided implementation.
			 */
			public constructor(implementation: {
				sourceIterator(): javautilIterator;
				keyOf(param0: javalangObject): javalangObject;
			});
			public sourceIterator(): javautilIterator;
			public keyOf(param0: javalangObject): javalangObject;
		}
	}
}

declare module kotlin {
	export module collections {
		export class GroupingKt {
			public static reduceTo(param0: kotlin.collections.Grouping, param1: javautilMap, param2: kotlin.jvm.functions.Function3): javautilMap;
			public static aggregateTo(param0: kotlin.collections.Grouping, param1: javautilMap, param2: kotlin.jvm.functions.Function4): javautilMap;
			public static fold(param0: kotlin.collections.Grouping, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javautilMap;
			public static foldTo(param0: kotlin.collections.Grouping, param1: javautilMap, param2: javalangObject, param3: kotlin.jvm.functions.Function2): javautilMap;
			public static fold(param0: kotlin.collections.Grouping, param1: kotlin.jvm.functions.Function2, param2: kotlin.jvm.functions.Function3): javautilMap;
			public static foldTo(param0: kotlin.collections.Grouping, param1: javautilMap, param2: kotlin.jvm.functions.Function2, param3: kotlin.jvm.functions.Function3): javautilMap;
			public static reduce(param0: kotlin.collections.Grouping, param1: kotlin.jvm.functions.Function3): javautilMap;
			public static eachCountTo(param0: kotlin.collections.Grouping, param1: javautilMap): javautilMap;
			public static aggregate(param0: kotlin.collections.Grouping, param1: kotlin.jvm.functions.Function4): javautilMap;
			public static eachCount(param0: kotlin.collections.Grouping): javautilMap;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexedValue {
			public getIndex(): number;
			public toString(): string;
			public constructor(param0: number, param1: javalangObject);
			public equals(param0: javalangObject): boolean;
			public copy(param0: number, param1: javalangObject): kotlin.collections.IndexedValue;
			public component2(): javalangObject;
			public getValue(): javalangObject;
			public component1(): number;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterable {
			public constructor(param0: kotlin.jvm.functions.Function0);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module collections {
		export class IndexingIterator {
			public constructor(param0: javautilIterator);
			public next(): kotlin.collections.IndexedValue;
			public hasNext(): boolean;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class IntIterator {
			public nextInt(): number;
			public constructor();
			public next(): javalangInteger;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class LongIterator {
			public next(): javalangLong;
			public constructor();
			public nextLong(): number;
			public remove(): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapAccessorsKt {
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefault {
			/**
			 * Constructs a new instance of the kotlin.collections.MapWithDefault interface with the provided implementation.
			 */
			public constructor(implementation: {
				getMap(): javautilMap;
				getOrImplicitDefault(param0: javalangObject): javalangObject;
			});
			public getOrImplicitDefault(param0: javalangObject): javalangObject;
			public getMap(): javautilMap;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapWithDefaultImpl {
			public keySet(): javautilSet;
			public clear(): void;
			public containsKey(param0: javalangObject): boolean;
			public getEntries(): javautilSet;
			public values(): javautilCollection;
			public size(): number;
			public isEmpty(): boolean;
			public equals(param0: javalangObject): boolean;
			public remove(param0: javalangObject): javalangObject;
			public getOrImplicitDefault(param0: javalangObject): javalangObject;
			public getSize(): number;
			public constructor(param0: javautilMap, param1: kotlin.jvm.functions.Function1);
			public put(param0: javalangObject, param1: javalangObject): javalangObject;
			public toString(): string;
			public entrySet(): javautilSet;
			public getValues(): javautilCollection;
			public containsValue(param0: javalangObject): boolean;
			public getMap(): javautilMap;
			public getKeys(): javautilSet;
			public hashCode(): number;
			public get(param0: javalangObject): javalangObject;
			public putAll(param0: javautilMap): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt extends kotlin.collections.MapsKt___MapsKt {
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt__MapWithDefaultKt {
			public static withDefaultMutable(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static withDefault(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public constructor();
			public static getOrImplicitDefaultNullable(param0: javautilMap, param1: javalangObject): javalangObject;
		}
	}
}

import javautilconcurrentConcurrentMap = java.util.concurrent.ConcurrentMap;
import javautilSortedMap = java.util.SortedMap;
declare module kotlin {
	export module collections {
		export class MapsKt__MapsJVMKt extends kotlin.collections.MapsKt__MapWithDefaultKt {
			public static sortedMapOf(param0: native.Array<kotlin.Pair>): javautilSortedMap;
			public static getOrPut(param0: javautilconcurrentConcurrentMap, param1: javalangObject, param2: kotlin.jvm.functions.Function0): javalangObject;
			public static toSortedMap(param0: javautilMap): javautilSortedMap;
			public constructor();
			public static toSortedMap(param0: javautilMap, param1: javautilComparator): javautilSortedMap;
		}
	}
}

import javautilHashMap = java.util.HashMap;
import javautilLinkedHashMap = java.util.LinkedHashMap;
declare module kotlin {
	export module collections {
		export class MapsKt__MapsKt extends kotlin.collections.MapsKt__MapsJVMKt {
			public static getOrElseNullable(param0: javautilMap, param1: javalangObject, param2: kotlin.jvm.functions.Function0): javalangObject;
			public static getValue(param0: javautilMap, param1: javalangObject): javalangObject;
			public static filterNotTo(param0: javautilMap, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static toMap(param0: native.Array<kotlin.Pair>): javautilMap;
			public static putAll(param0: javautilMap, param1: javalangIterable): void;
			public static plus(param0: javautilMap, param1: javalangIterable): javautilMap;
			public static toMap(param0: native.Array<kotlin.Pair>, param1: javautilMap): javautilMap;
			public static mapValuesTo(param0: javautilMap, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static mapCapacity(param0: number): number;
			public static optimizeReadOnlyMap(param0: javautilMap): javautilMap;
			public static mapKeys(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static minus(param0: javautilMap, param1: javalangObject): javautilMap;
			public static filterKeys(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static plus(param0: javautilMap, param1: kotlin.Pair): javautilMap;
			public static putAll(param0: javautilMap, param1: native.Array<kotlin.Pair>): void;
			public static putAll(param0: javautilMap, param1: kotlin.sequences.Sequence): void;
			public static filterTo(param0: javautilMap, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static toMap(param0: javalangIterable, param1: javautilMap): javautilMap;
			public static toMap(param0: javalangIterable): javautilMap;
			public static toMap(param0: javautilMap): javautilMap;
			public static toMutableMap(param0: javautilMap): javautilMap;
			public static mapKeysTo(param0: javautilMap, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static filter(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static plus(param0: javautilMap, param1: native.Array<kotlin.Pair>): javautilMap;
			public static minus(param0: javautilMap, param1: native.Array<javalangObject>): javautilMap;
			public static minus(param0: javautilMap, param1: kotlin.sequences.Sequence): javautilMap;
			public static linkedMapOf(param0: native.Array<kotlin.Pair>): javautilLinkedHashMap;
			public static getOrPut(param0: javautilconcurrentConcurrentMap, param1: javalangObject, param2: kotlin.jvm.functions.Function0): javalangObject;
			public constructor();
			public static mapOf(param0: kotlin.Pair): javautilMap;
			public static hashMapOf(param0: native.Array<kotlin.Pair>): javautilHashMap;
			public static toMap(param0: kotlin.sequences.Sequence): javautilMap;
			public static toMap(param0: javautilMap, param1: javautilMap): javautilMap;
			public static toMap(param0: kotlin.sequences.Sequence, param1: javautilMap): javautilMap;
			public static plus(param0: javautilMap, param1: kotlin.sequences.Sequence): javautilMap;
			public static plus(param0: javautilMap, param1: javautilMap): javautilMap;
			public static filterNot(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static filterValues(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static minus(param0: javautilMap, param1: javalangIterable): javautilMap;
			public static mapValues(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static emptyMap(): javautilMap;
			public static getOrPut(param0: javautilMap, param1: javalangObject, param2: kotlin.jvm.functions.Function0): javalangObject;
			public static mutableMapOf(param0: native.Array<kotlin.Pair>): javautilMap;
			public static mapOf(param0: native.Array<kotlin.Pair>): javautilMap;
			public static toSingletonMap(param0: javautilMap): javautilMap;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MapsKt___MapsKt extends kotlin.collections.MapsKt__MapsKt {
			public static mapTo(param0: javautilMap, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static minBy(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMapEntry;
			public static asSequence(param0: javautilMap): kotlin.sequences.Sequence;
			public static map(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilList;
			public static all(param0: javautilMap, param1: kotlin.jvm.functions.Function1): boolean;
			public constructor();
			public static flatMap(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilList;
			public static minWith(param0: javautilMap, param1: javautilComparator): javautilMapEntry;
			public static onEach(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static flatMapTo(param0: javautilMap, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static none(param0: javautilMap, param1: kotlin.jvm.functions.Function1): boolean;
			public static count(param0: javautilMap, param1: kotlin.jvm.functions.Function1): number;
			public static none(param0: javautilMap): boolean;
			public static any(param0: javautilMap, param1: kotlin.jvm.functions.Function1): boolean;
			public static forEach(param0: javautilMap, param1: kotlin.jvm.functions.Function1): void;
			public static mapNotNullTo(param0: javautilMap, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static toList(param0: javautilMap): javautilList;
			public static any(param0: javautilMap): boolean;
			public static mapNotNull(param0: javautilMap, param1: kotlin.jvm.functions.Function1): javautilList;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefault {
			/**
			 * Constructs a new instance of the kotlin.collections.MutableMapWithDefault interface with the provided implementation.
			 */
			public constructor(implementation: {
				getMap(): javautilMap;
				getMap(): javautilMap;
				getOrImplicitDefault(param0: javalangObject): javalangObject;
			});
			public getOrImplicitDefault(param0: javalangObject): javalangObject;
			public getMap(): javautilMap;
		}
	}
}

declare module kotlin {
	export module collections {
		export class MutableMapWithDefaultImpl {
			public keySet(): javautilSet;
			public clear(): void;
			public containsKey(param0: javalangObject): boolean;
			public getEntries(): javautilSet;
			public values(): javautilCollection;
			public size(): number;
			public isEmpty(): boolean;
			public equals(param0: javalangObject): boolean;
			public remove(param0: javalangObject): javalangObject;
			public getOrImplicitDefault(param0: javalangObject): javalangObject;
			public getSize(): number;
			public constructor(param0: javautilMap, param1: kotlin.jvm.functions.Function1);
			public put(param0: javalangObject, param1: javalangObject): javalangObject;
			public toString(): string;
			public entrySet(): javautilSet;
			public getValues(): javautilCollection;
			public containsValue(param0: javalangObject): boolean;
			public getMap(): javautilMap;
			public getKeys(): javautilSet;
			public hashCode(): number;
			public get(param0: javalangObject): javalangObject;
			public putAll(param0: javautilMap): void;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedList extends kotlin.collections.AbstractMutableList {
			public clear(): void;
			public removeAt(param0: number): javalangObject;
			public get(param0: number): javalangObject;
			public add(param0: number, param1: javalangObject): void;
			public constructor(param0: javautilList);
			public constructor();
			public getSize(): number;
			public set(param0: number, param1: javalangObject): javalangObject;
		}
	}
}

declare module kotlin {
	export module collections {
		export class ReversedListReadOnly extends kotlin.collections.AbstractList {
			public get(param0: number): javalangObject;
			public constructor(param0: javautilList);
			public constructor();
			public getSize(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt extends kotlin.collections.SetsKt___SetsKt {
		}
	}
}

import javautilLinkedHashSet = java.util.LinkedHashSet;
import javautilTreeSet = java.util.TreeSet;
declare module kotlin {
	export module collections {
		export class SetsKt__SetsKt {
			public static sortedSetOf(param0: javautilComparator, param1: native.Array<javalangObject>): javautilTreeSet;
			public static sortedSetOf(param0: native.Array<javalangObject>): javautilTreeSet;
			public static setOf(param0: native.Array<javalangObject>): javautilSet;
			public static linkedSetOf(param0: native.Array<javalangObject>): javautilLinkedHashSet;
			public static optimizeReadOnlySet(param0: javautilSet): javautilSet;
			public static mutableSetOf(param0: native.Array<javalangObject>): javautilSet;
			public constructor();
			public static hashSetOf(param0: native.Array<javalangObject>): javautilHashSet;
			public static setOf(param0: javalangObject): javautilSet;
			public static emptySet(): javautilSet;
		}
	}
}

declare module kotlin {
	export module collections {
		export class SetsKt___SetsKt extends kotlin.collections.SetsKt__SetsKt {
			public static minus(param0: javautilSet, param1: native.Array<javalangObject>): javautilSet;
			public static minus(param0: javautilSet, param1: javalangIterable): javautilSet;
			public static plus(param0: javautilSet, param1: javalangObject): javautilSet;
			public static minus(param0: javautilSet, param1: kotlin.sequences.Sequence): javautilSet;
			public static plus(param0: javautilSet, param1: kotlin.sequences.Sequence): javautilSet;
			public static minus(param0: javautilSet, param1: javalangObject): javautilSet;
			public static plus(param0: javautilSet, param1: javalangIterable): javautilSet;
			public constructor();
			public static plus(param0: javautilSet, param1: native.Array<javalangObject>): javautilSet;
		}
	}
}

declare module kotlin {
	export module collections {
		export abstract class ShortIterator {
			public next(): javalangShort;
			public constructor();
			public remove(): void;
			public nextShort(): number;
		}
	}
}

declare module kotlin {
	export module collections {
		export class State {
			public static Ready: kotlin.collections.State;
			public static NotReady: kotlin.collections.State;
			public static Done: kotlin.collections.State;
			public static Failed: kotlin.collections.State;
			public static valueOf(param0: string): kotlin.collections.State;
			public static values(): native.Array<kotlin.collections.State>;
			public constructor(param0: string, param1: number);
		}
	}
}

declare module kotlin {
	export module collections {
		export class TypeAliasesKt {
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt extends kotlin.comparisons.ComparisonsKt___ComparisonsKt {
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt__ComparisonsKt {
			public static thenDescending(param0: javautilComparator, param1: javautilComparator): javautilComparator;
			public static nullsFirst(param0: javautilComparator): javautilComparator;
			public static compareBy(param0: native.Array<kotlin.jvm.functions.Function1>): javautilComparator;
			public static compareValues(param0: javalangComparable, param1: javalangComparable): number;
			public static then(param0: javautilComparator, param1: javautilComparator): javautilComparator;
			public static reverseOrder(): javautilComparator;
			public constructor();
			public static compareValuesBy(param0: javalangObject, param1: javalangObject, param2: native.Array<kotlin.jvm.functions.Function1>): number;
			public static reversed(param0: javautilComparator): javautilComparator;
			public static naturalOrder(): javautilComparator;
			public static nullsLast(param0: javautilComparator): javautilComparator;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ComparisonsKt___ComparisonsKt extends kotlin.comparisons.ComparisonsKt__ComparisonsKt {
			public static minOf(param0: javalangObject, param1: javalangObject, param2: javautilComparator): javalangObject;
			public static maxOf(param0: javalangComparable, param1: javalangComparable, param2: javalangComparable): javalangComparable;
			public static maxOf(param0: javalangComparable, param1: javalangComparable): javalangComparable;
			public static maxOf(param0: javalangObject, param1: javalangObject, param2: javautilComparator): javalangObject;
			public static minOf(param0: javalangComparable, param1: javalangComparable, param2: javalangComparable): javalangComparable;
			public constructor();
			public static minOf(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javautilComparator): javalangObject;
			public static maxOf(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javautilComparator): javalangObject;
			public static minOf(param0: javalangComparable, param1: javalangComparable): javalangComparable;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class NaturalOrderComparator {
			public static INSTANCE: kotlin.comparisons.NaturalOrderComparator;
			public reversed(): javautilComparator;
			public compare(param0: javalangComparable, param1: javalangComparable): number;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReverseOrderComparator {
			public static INSTANCE: kotlin.comparisons.ReverseOrderComparator;
			public reversed(): javautilComparator;
			public compare(param0: javalangComparable, param1: javalangComparable): number;
		}
	}
}

declare module kotlin {
	export module comparisons {
		export class ReversedComparator {
			public compare(param0: javalangObject, param1: javalangObject): number;
			public reversed(): javautilComparator;
			public constructor(param0: javautilComparator);
			public getComparator(): javautilComparator;
		}
	}
}

declare module kotlin {
	export module concurrent {
		export class LocksKt {
		}
	}
}

import javalangClassLoader = java.lang.ClassLoader;
import javalangThread = java.lang.Thread;
declare module kotlin {
	export module concurrent {
		export class ThreadsKt {
			public static thread(param0: boolean, param1: boolean, param2: javalangClassLoader, param3: string, param4: number, param5: kotlin.jvm.functions.Function0): javalangThread;
		}
	}
}

import javautilTimer = java.util.Timer;
declare module kotlin {
	export module concurrent {
		export class TimersKt {
			public static timer(param0: string, param1: boolean): javautilTimer;
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export abstract class AbstractCoroutineContextElement {
				public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				public constructor(param0: kotlin.coroutines.experimental.CoroutineContext.Key);
				public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
				public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
				public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				public getKey(): kotlin.coroutines.experimental.CoroutineContext.Key;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class CombinedContext {
				public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getElement(): kotlin.coroutines.experimental.CoroutineContext.Element;
				public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
				public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				public toString(): string;
				public getLeft(): kotlin.coroutines.experimental.CoroutineContext;
				public constructor(param0: kotlin.coroutines.experimental.CoroutineContext, param1: kotlin.coroutines.experimental.CoroutineContext.Element);
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class Continuation {
				/**
				 * Constructs a new instance of the kotlin.coroutines.experimental.Continuation interface with the provided implementation.
				 */
				public constructor(implementation: {
					getContext(): kotlin.coroutines.experimental.CoroutineContext;
					resume(param0: javalangObject): void;
					resumeWithException(param0: javalangThrowable): void;
				});
				public resumeWithException(param0: javalangThrowable): void;
				public getContext(): kotlin.coroutines.experimental.CoroutineContext;
				public resume(param0: javalangObject): void;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class ContinuationInterceptor {
				/**
				 * Constructs a new instance of the kotlin.coroutines.experimental.ContinuationInterceptor interface with the provided implementation.
				 */
				public constructor(implementation: {
					interceptContinuation(param0: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
					<clinit>(): void;
					getKey(): kotlin.coroutines.experimental.CoroutineContext.Key;
					get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
					minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
					get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
					plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
					minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				});
				public static Key: kotlin.coroutines.experimental.ContinuationInterceptor.Key;
				public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
				public interceptContinuation(param0: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
				public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
				public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				public getKey(): kotlin.coroutines.experimental.CoroutineContext.Key;
			}
			export module ContinuationInterceptor {
				export class DefaultImpls {
					public static get(param0: kotlin.coroutines.experimental.ContinuationInterceptor, param1: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					public static plus(param0: kotlin.coroutines.experimental.ContinuationInterceptor, param1: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
					public static fold(param0: kotlin.coroutines.experimental.ContinuationInterceptor, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
					public static minusKey(param0: kotlin.coroutines.experimental.ContinuationInterceptor, param1: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				}
				export class Key {
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class CoroutineContext {
				/**
				 * Constructs a new instance of the kotlin.coroutines.experimental.CoroutineContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
					plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
					minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				});
				public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
				public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
				public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
			}
			export module CoroutineContext {
				export class DefaultImpls {
					public static plus(param0: kotlin.coroutines.experimental.CoroutineContext, param1: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				}
				export class Element {
					/**
					 * Constructs a new instance of the kotlin.coroutines.experimental.CoroutineContext$Element interface with the provided implementation.
					 */
					public constructor(implementation: {
						getKey(): kotlin.coroutines.experimental.CoroutineContext.Key;
						get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
						fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
						minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
						get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
						fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
						plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
						minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
					});
					public getKey(): kotlin.coroutines.experimental.CoroutineContext.Key;
					public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
					public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
					public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				}
				export module Element {
					export class DefaultImpls {
						public static plus(param0: kotlin.coroutines.experimental.CoroutineContext.Element, param1: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
						public static minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Element, param1: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
						public static fold(param0: kotlin.coroutines.experimental.CoroutineContext.Element, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
						public static get(param0: kotlin.coroutines.experimental.CoroutineContext.Element, param1: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
					}
				}
				export class Key {
					/**
					 * Constructs a new instance of the kotlin.coroutines.experimental.CoroutineContext$Key interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class CoroutinesKt {
				public static createCoroutine(param0: kotlin.jvm.functions.Function2, param1: javalangObject, param2: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
				public static startCoroutine(param0: kotlin.jvm.functions.Function1, param1: kotlin.coroutines.experimental.Continuation): void;
				public static startCoroutine(param0: kotlin.jvm.functions.Function2, param1: javalangObject, param2: kotlin.coroutines.experimental.Continuation): void;
				public static createCoroutine(param0: kotlin.jvm.functions.Function1, param1: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class EmptyCoroutineContext {
				public static INSTANCE: kotlin.coroutines.experimental.EmptyCoroutineContext;
				public plus(param0: kotlin.coroutines.experimental.CoroutineContext): kotlin.coroutines.experimental.CoroutineContext;
				public fold(param0: javalangObject, param1: kotlin.jvm.functions.Function2): javalangObject;
				public hashCode(): number;
				public get(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext.Element;
				public minusKey(param0: kotlin.coroutines.experimental.CoroutineContext.Key): kotlin.coroutines.experimental.CoroutineContext;
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class RestrictsSuspension {
				/**
				 * Constructs a new instance of the kotlin.coroutines.experimental.RestrictsSuspension interface with the provided implementation.
				 */
				public constructor(implementation: {
				});
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class SafeContinuation {
				public static Companion: kotlin.coroutines.experimental.SafeContinuation.Companion;
				public constructor(param0: kotlin.coroutines.experimental.Continuation);
				public resumeWithException(param0: javalangThrowable): void;
				public getContext(): kotlin.coroutines.experimental.CoroutineContext;
				public resume(param0: javalangObject): void;
				public constructor(param0: kotlin.coroutines.experimental.Continuation, param1: javalangObject);
				public getResult(): javalangObject;
			}
			export module SafeContinuation {
				export class Companion {
				}
				export class Fail {
					public constructor(param0: javalangThrowable);
					public getException(): javalangThrowable;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export abstract class SequenceBuilder {
				public yieldAll(param0: javautilIterator, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public yield(param0: javalangObject, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public yieldAll(param0: javalangIterable, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public yieldAll(param0: kotlin.sequences.Sequence, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class SequenceBuilderIterator extends kotlin.coroutines.experimental.SequenceBuilder implements kotlin.coroutines.experimental.Continuation, kotlin.jvm.internal.markers.KMappedMarker {
				public setNextStep(param0: kotlin.coroutines.experimental.Continuation): void;
				public remove(): void;
				public resumeWithException(param0: javalangThrowable): void;
				public getContext(): kotlin.coroutines.experimental.CoroutineContext;
				public yield(param0: javalangObject, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public yieldAll(param0: javalangIterable, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public getNextStep(): kotlin.coroutines.experimental.Continuation;
				public constructor();
				public yieldAll(param0: javautilIterator, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public resume(param0: kotlin.Unit): void;
				public hasNext(): boolean;
				public next(): javalangObject;
				public yieldAll(param0: kotlin.sequences.Sequence, param1: kotlin.coroutines.experimental.Continuation): javalangObject;
				public resume(param0: javalangObject): void;
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class SequenceBuilderKt extends kotlin.coroutines.experimental.SequenceBuilderKt__SequenceBuilderKt {
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export class SequenceBuilderKt__SequenceBuilderKt {
				public static buildIterator(param0: kotlin.jvm.functions.Function2): javautilIterator;
				public static buildSequence(param0: kotlin.jvm.functions.Function2): kotlin.sequences.Sequence;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export module intrinsics {
				export class IntrinsicsJvmKt {
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export module intrinsics {
				export class IntrinsicsKt {
					public static getCOROUTINE_SUSPENDED(): javalangObject;
					public static createCoroutineUnchecked(param0: kotlin.jvm.functions.Function2, param1: javalangObject, param2: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
					public static createCoroutineUnchecked(param0: kotlin.jvm.functions.Function1, param1: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export module jvm {
				export module internal {
					export abstract class CoroutineImpl extends kotlin.jvm.internal.Lambda implements kotlin.coroutines.experimental.Continuation {
						public label: number;
						public completion: kotlin.coroutines.experimental.Continuation;
						public create(param0: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
						public resume(param0: javalangObject): void;
						public resumeWithException(param0: javalangThrowable): void;
						public constructor(param0: number, param1: kotlin.coroutines.experimental.Continuation);
						public doResume(param0: javalangObject, param1: javalangThrowable): javalangObject;
						public create(param0: javalangObject, param1: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
						public constructor(param0: number);
						public getFacade(): kotlin.coroutines.experimental.Continuation;
						public getArity(): number;
						public getContext(): kotlin.coroutines.experimental.CoroutineContext;
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module coroutines {
		export module experimental {
			export module jvm {
				export module internal {
					export class CoroutineIntrinsics {
						public static interceptContinuationIfNeeded(param0: kotlin.coroutines.experimental.CoroutineContext, param1: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
						public static normalizeContinuation(param0: kotlin.coroutines.experimental.Continuation): kotlin.coroutines.experimental.Continuation;
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module experimental {
		export class BitwiseOperationsKt {
		}
	}
}

declare module kotlin {
	export module internal {
		export class DynamicExtension {
			/**
			 * Constructs a new instance of the kotlin.internal.DynamicExtension interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class Exact {
			/**
			 * Constructs a new instance of the kotlin.internal.Exact interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class HidesMembers {
			/**
			 * Constructs a new instance of the kotlin.internal.HidesMembers interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class InlineOnly {
			/**
			 * Constructs a new instance of the kotlin.internal.InlineOnly interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class LowPriorityInOverloadResolution {
			/**
			 * Constructs a new instance of the kotlin.internal.LowPriorityInOverloadResolution interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class NoInfer {
			/**
			 * Constructs a new instance of the kotlin.internal.NoInfer interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class OnlyInputTypes {
			/**
			 * Constructs a new instance of the kotlin.internal.OnlyInputTypes interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformDependent {
			/**
			 * Constructs a new instance of the kotlin.internal.PlatformDependent interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

import javautilregexMatchResult = java.util.regex.MatchResult;
declare module kotlin {
	export module internal {
		export class PlatformImplementations {
			public getMatchResultNamedGroup(param0: javautilregexMatchResult, param1: string): kotlin.text.MatchGroup;
			public addSuppressed(param0: javalangThrowable, param1: javalangThrowable): void;
			public constructor();
		}
	}
}

declare module kotlin {
	export module internal {
		export class PlatformImplementationsKt {
			public static IMPLEMENTATIONS: kotlin.internal.PlatformImplementations;
		}
	}
}

declare module kotlin {
	export module internal {
		export class ProgressionUtilKt {
			public static getProgressionLastElement(param0: number, param1: number, param2: number): number;
		}
	}
}

declare module kotlin {
	export module internal {
		export class PureReifiable {
			/**
			 * Constructs a new instance of the kotlin.internal.PureReifiable interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

import javaioFile = java.io.File;
declare module kotlin {
	export module io {
		export class AccessDeniedException extends kotlin.io.FileSystemException {
			public constructor(param0: javaioFile, param1: javaioFile, param2: string);
		}
	}
}

import javaioBufferedInputStream = java.io.BufferedInputStream;
import javaioInputStream = java.io.InputStream;
import javaioOutputStream = java.io.OutputStream;
declare module kotlin {
	export module io {
		export class ByteStreamsKt {
			public static readBytes(param0: javaioInputStream, param1: number): native.Array<number>;
			public static copyTo(param0: javaioInputStream, param1: javaioOutputStream, param2: number): number;
			public static iterator(param0: javaioBufferedInputStream): kotlin.collections.ByteIterator;
		}
	}
}

import javaioCloseable = java.io.Closeable;
declare module kotlin {
	export module io {
		export class CloseableKt {
			public static closeFinally(param0: javaioCloseable, param1: javalangThrowable): void;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConsoleKt {
			public static readLine(): string;
		}
	}
}

declare module kotlin {
	export module io {
		export class ConstantsKt {
			public static DEFAULT_BUFFER_SIZE: number;
			public static DEFAULT_BLOCK_SIZE: number;
			public static MINIMUM_BLOCK_SIZE: number;
		}
	}
}

declare module kotlin {
	export module io {
		export class ExceptionsKt {
		}
	}
}

declare module kotlin {
	export module io {
		export class FileAlreadyExistsException extends kotlin.io.FileSystemException {
			public constructor(param0: javaioFile, param1: javaioFile, param2: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class FilePathComponents {
			public equals(param0: javalangObject): boolean;
			public getRoot(): javaioFile;
			public getSize(): number;
			public constructor(param0: javaioFile, param1: javautilList);
			public copy(param0: javaioFile, param1: javautilList): kotlin.io.FilePathComponents;
			public toString(): string;
			public component1(): javaioFile;
			public isRooted(): boolean;
			public subPath(param0: number, param1: number): javaioFile;
			public getRootName(): string;
			public getSegments(): javautilList;
			public component2(): javautilList;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileSystemException {
			public getReason(): string;
			public constructor(param0: javaioFile, param1: javaioFile, param2: string);
			public getFile(): javaioFile;
			public getOther(): javaioFile;
		}
	}
}

declare module kotlin {
	export module io {
		export class FileTreeWalk {
			public constructor(param0: javaioFile, param1: kotlin.io.FileWalkDirection);
			public maxDepth(param0: number): kotlin.io.FileTreeWalk;
			public iterator(): javautilIterator;
			public onLeave(param0: kotlin.jvm.functions.Function1): kotlin.io.FileTreeWalk;
			public onEnter(param0: kotlin.jvm.functions.Function1): kotlin.io.FileTreeWalk;
			public onFail(param0: kotlin.jvm.functions.Function2): kotlin.io.FileTreeWalk;
		}
		export module FileTreeWalk {
			export abstract class DirectoryState extends kotlin.io.FileTreeWalk.WalkState {
				public constructor(param0: javaioFile);
			}
			export class FileTreeWalkIterator extends kotlin.collections.AbstractIterator {
				public computeNext(): void;
				public constructor(param0: kotlin.io.FileTreeWalk);
				public constructor();
			}
			export module FileTreeWalkIterator {
				export class BottomUpDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public constructor(param0: kotlin.io.FileTreeWalk.FileTreeWalkIterator, param1: javaioFile);
					public constructor(param0: javaioFile);
					public step(): javaioFile;
				}
				export class SingleFileState extends kotlin.io.FileTreeWalk.WalkState {
					public constructor(param0: kotlin.io.FileTreeWalk.FileTreeWalkIterator, param1: javaioFile);
					public constructor(param0: javaioFile);
					public step(): javaioFile;
				}
				export class TopDownDirectoryState extends kotlin.io.FileTreeWalk.DirectoryState {
					public constructor(param0: kotlin.io.FileTreeWalk.FileTreeWalkIterator, param1: javaioFile);
					public constructor(param0: javaioFile);
					public step(): javaioFile;
				}
				export class WhenMappings {
				}
			}
			export abstract class WalkState {
				public step(): javaioFile;
				public constructor(param0: javaioFile);
				public getRoot(): javaioFile;
			}
		}
	}
}

declare module kotlin {
	export module io {
		export class FileWalkDirection {
			public static TOP_DOWN: kotlin.io.FileWalkDirection;
			public static BOTTOM_UP: kotlin.io.FileWalkDirection;
			public static valueOf(param0: string): kotlin.io.FileWalkDirection;
			public constructor(param0: string, param1: number);
			public static values(): native.Array<kotlin.io.FileWalkDirection>;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt extends kotlin.io.FilesKt__UtilsKt {
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FilePathComponentsKt {
			public static subPath(param0: javaioFile, param1: number, param2: number): javaioFile;
			public static getRootName(param0: javaioFile): string;
			public static toComponents(param0: javaioFile): kotlin.io.FilePathComponents;
			public constructor();
			public static getRoot(param0: javaioFile): javaioFile;
			public static isRooted(param0: javaioFile): boolean;
		}
	}
}

import javaniocharsetCharset = java.nio.charset.Charset;
declare module kotlin {
	export module io {
		export class FilesKt__FileReadWriteKt extends kotlin.io.FilesKt__FilePathComponentsKt {
			public static forEachLine(param0: javaioFile, param1: javaniocharsetCharset, param2: kotlin.jvm.functions.Function1): void;
			public static appendText(param0: javaioFile, param1: string, param2: javaniocharsetCharset): void;
			public static useLines(param0: javaioFile, param1: javaniocharsetCharset, param2: kotlin.jvm.functions.Function1): javalangObject;
			public static forEachBlock(param0: javaioFile, param1: kotlin.jvm.functions.Function2): void;
			public static appendBytes(param0: javaioFile, param1: native.Array<number>): void;
			public static readBytes(param0: javaioFile): native.Array<number>;
			public static forEachBlock(param0: javaioFile, param1: number, param2: kotlin.jvm.functions.Function2): void;
			public static writeBytes(param0: javaioFile, param1: native.Array<number>): void;
			public constructor();
			public static readText(param0: javaioFile, param1: javaniocharsetCharset): string;
			public static writeText(param0: javaioFile, param1: string, param2: javaniocharsetCharset): void;
			public static readLines(param0: javaioFile, param1: javaniocharsetCharset): javautilList;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__FileTreeWalkKt extends kotlin.io.FilesKt__FileReadWriteKt {
			public static walk(param0: javaioFile, param1: kotlin.io.FileWalkDirection): kotlin.io.FileTreeWalk;
			public constructor();
			public static walkBottomUp(param0: javaioFile): kotlin.io.FileTreeWalk;
			public static walkTopDown(param0: javaioFile): kotlin.io.FileTreeWalk;
		}
	}
}

declare module kotlin {
	export module io {
		export class FilesKt__UtilsKt extends kotlin.io.FilesKt__FileTreeWalkKt {
			public static resolve(param0: javaioFile, param1: string): javaioFile;
			public static resolveSibling(param0: javaioFile, param1: javaioFile): javaioFile;
			public static endsWith(param0: javaioFile, param1: string): boolean;
			public static resolve(param0: javaioFile, param1: javaioFile): javaioFile;
			public static relativeToOrSelf(param0: javaioFile, param1: javaioFile): javaioFile;
			public static getExtension(param0: javaioFile): string;
			public constructor();
			public static relativeToOrNull(param0: javaioFile, param1: javaioFile): javaioFile;
			public static normalize(param0: javaioFile): javaioFile;
			public static getNameWithoutExtension(param0: javaioFile): string;
			public static copyRecursively(param0: javaioFile, param1: javaioFile, param2: boolean, param3: kotlin.jvm.functions.Function2): boolean;
			public static startsWith(param0: javaioFile, param1: string): boolean;
			public static toRelativeString(param0: javaioFile, param1: javaioFile): string;
			public static copyTo(param0: javaioFile, param1: javaioFile, param2: boolean, param3: number): javaioFile;
			public static startsWith(param0: javaioFile, param1: javaioFile): boolean;
			public static createTempFile(param0: string, param1: string, param2: javaioFile): javaioFile;
			public static createTempDir(param0: string, param1: string, param2: javaioFile): javaioFile;
			public static relativeTo(param0: javaioFile, param1: javaioFile): javaioFile;
			public static deleteRecursively(param0: javaioFile): boolean;
			public static resolveSibling(param0: javaioFile, param1: string): javaioFile;
			public static getInvariantSeparatorsPath(param0: javaioFile): string;
			public static endsWith(param0: javaioFile, param1: javaioFile): boolean;
		}
	}
}

import javaioBufferedReader = java.io.BufferedReader;
declare module kotlin {
	export module io {
		export class LinesSequence {
			public constructor(param0: javaioBufferedReader);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module io {
		export class NoSuchFileException extends kotlin.io.FileSystemException {
			public constructor(param0: javaioFile, param1: javaioFile, param2: string);
		}
	}
}

declare module kotlin {
	export module io {
		export class OnErrorAction {
			public static SKIP: kotlin.io.OnErrorAction;
			public static TERMINATE: kotlin.io.OnErrorAction;
			public static values(): native.Array<kotlin.io.OnErrorAction>;
			public constructor(param0: string, param1: number);
			public static valueOf(param0: string): kotlin.io.OnErrorAction;
		}
	}
}

declare module kotlin {
	export module io {
		export class SerializableKt {
		}
	}
}

declare module kotlin {
	export module io {
		export class TerminateException extends kotlin.io.FileSystemException {
			public constructor(param0: javaioFile, param1: javaioFile, param2: string);
			public constructor(param0: javaioFile);
		}
	}
}

import javaioReader = java.io.Reader;
import javaioWriter = java.io.Writer;
import javanetURL = java.net.URL;
declare module kotlin {
	export module io {
		export class TextStreamsKt {
			public static forEachLine(param0: javaioReader, param1: kotlin.jvm.functions.Function1): void;
			public static copyTo(param0: javaioReader, param1: javaioWriter, param2: number): number;
			public static readLines(param0: javaioReader): javautilList;
			public static lineSequence(param0: javaioBufferedReader): kotlin.sequences.Sequence;
			public static readBytes(param0: javanetURL): native.Array<number>;
			public static readText(param0: javaioReader): string;
			public static useLines(param0: javaioReader, param1: kotlin.jvm.functions.Function1): javalangObject;
		}
	}
}

import javalangannotationAnnotation = java.lang.annotation.Annotation;
declare module kotlin {
	export module jvm {
		export class JvmClassMappingKt {
			public static getJavaObjectType(param0: kotlin.reflect.KClass): javalangClass;
			public static getJavaClass(param0: kotlin.reflect.KClass): javalangClass;
			public static getJavaPrimitiveType(param0: kotlin.reflect.KClass): javalangClass;
			public static getRuntimeClassOfKClassInstance(param0: kotlin.reflect.KClass): javalangClass;
			public static getAnnotationClass(param0: javalangannotationAnnotation): kotlin.reflect.KClass;
			public static getJavaClass(param0: javalangObject): javalangClass;
			public static getKotlinClass(param0: javalangClass): kotlin.reflect.KClass;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmField {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmField interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmMultifileClass {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmMultifileClass interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmName {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmName interface with the provided implementation.
			 */
			public constructor(implementation: {
				name(): string;
			});
			public name(): string;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmOverloads {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmOverloads interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmStatic {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmStatic interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSuppressWildcards {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSuppressWildcards interface with the provided implementation.
			 */
			public constructor(implementation: {
				suppress(): boolean;
			});
			public suppress(): boolean;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmSynthetic {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmSynthetic interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmVersion {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmVersion interface with the provided implementation.
			 */
			public constructor(implementation: {
				minimum(): number;
				maximum(): number;
			});
			public maximum(): number;
			public minimum(): number;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class JvmWildcard {
			/**
			 * Constructs a new instance of the kotlin.jvm.JvmWildcard interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class KotlinReflectionNotSupportedError {
			public constructor(param0: javalangThrowable);
			public constructor(param0: string, param1: javalangThrowable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module kotlin {
	export module jvm {
		export class PurelyImplements {
			/**
			 * Constructs a new instance of the kotlin.jvm.PurelyImplements interface with the provided implementation.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public value(): string;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Strictfp {
			/**
			 * Constructs a new instance of the kotlin.jvm.Strictfp interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Synchronized {
			/**
			 * Constructs a new instance of the kotlin.jvm.Synchronized interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Throws {
			/**
			 * Constructs a new instance of the kotlin.jvm.Throws interface with the provided implementation.
			 */
			public constructor(implementation: {
				exceptionClasses(): native.Array<javalangClass>;
			});
			public exceptionClasses(): native.Array<javalangClass>;
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Transient {
			/**
			 * Constructs a new instance of the kotlin.jvm.Transient interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export class Volatile {
			/**
			 * Constructs a new instance of the kotlin.jvm.Volatile interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function0 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function0 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(): javalangObject;
				});
				public invoke(): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function1 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function1 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function10 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function10 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function11 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function11 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function12 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function12 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function13 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function13 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function14 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function14 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function15 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function15 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function16 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function16 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function17 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function17 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function18 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function18 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function19 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function19 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function2<A, B, C> {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function2 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function20 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function20 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function21 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function21 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function22 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function22 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject, param21: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject, param21: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function3 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function3 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function4 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function4 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function5 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function5 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function6 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function6 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function7 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function7 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function8 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function8 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module functions {
			export class Function9 {
				/**
				 * Constructs a new instance of the kotlin.jvm.functions.Function9 interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject): javalangObject;
				});
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayBooleanIterator extends kotlin.collections.BooleanIterator {
				public constructor(param0: native.Array<boolean>);
				public hasNext(): boolean;
				public nextBoolean(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayByteIterator extends kotlin.collections.ByteIterator {
				public constructor(param0: native.Array<number>);
				public nextByte(): number;
				public hasNext(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayCharIterator extends kotlin.collections.CharIterator {
				public hasNext(): boolean;
				public constructor(param0: native.Array<string>);
				public nextChar(): string;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayDoubleIterator extends kotlin.collections.DoubleIterator {
				public constructor(param0: native.Array<number>);
				public hasNext(): boolean;
				public nextDouble(): number;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayFloatIterator extends kotlin.collections.FloatIterator {
				public constructor(param0: native.Array<number>);
				public nextFloat(): number;
				public hasNext(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIntIterator extends kotlin.collections.IntIterator {
				public nextInt(): number;
				public constructor(param0: native.Array<number>);
				public hasNext(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIterator {
				public remove(): void;
				public getArray(): native.Array<javalangObject>;
				public hasNext(): boolean;
				public next(): javalangObject;
				public constructor(param0: native.Array<javalangObject>);
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorKt {
				public static iterator(param0: native.Array<javalangObject>): javautilIterator;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayIteratorsKt {
				public static iterator(param0: native.Array<string>): kotlin.collections.CharIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.ShortIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.IntIterator;
				public static iterator(param0: native.Array<boolean>): kotlin.collections.BooleanIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.FloatIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.ByteIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.LongIterator;
				public static iterator(param0: native.Array<number>): kotlin.collections.DoubleIterator;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayLongIterator extends kotlin.collections.LongIterator {
				public nextLong(): number;
				public constructor(param0: native.Array<number>);
				public hasNext(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ArrayShortIterator extends kotlin.collections.ShortIterator {
				public constructor(param0: native.Array<number>);
				public nextShort(): number;
				public hasNext(): boolean;
				public constructor();
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class BooleanSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public getSize(param0: native.Array<boolean>): number;
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public toArray(): native.Array<boolean>;
				public constructor(param0: number);
				public getSize(param0: javalangObject): number;
				public add(param0: boolean): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteCompanionObject {
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static INSTANCE: kotlin.jvm.internal.ByteCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ByteSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class CallableReference {
				public receiver: javalangObject;
				public static NO_RECEIVER: javalangObject;
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public getBoundReceiver(): javalangObject;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public compute(): kotlin.reflect.KCallable;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getReflected(): kotlin.reflect.KCallable;
				public computeReflected(): kotlin.reflect.KCallable;
			}
			export module CallableReference {
				export class NoReceiver {
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharCompanionObject {
				public static MIN_HIGH_SURROGATE: string;
				public static MAX_HIGH_SURROGATE: string;
				public static MIN_LOW_SURROGATE: string;
				public static MAX_LOW_SURROGATE: string;
				public static MIN_SURROGATE: string;
				public static MAX_SURROGATE: string;
				public static INSTANCE: kotlin.jvm.internal.CharCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CharSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public getSize(param0: native.Array<string>): number;
				public toArray(): native.Array<string>;
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public constructor(param0: number);
				public getSize(param0: javalangObject): number;
				public add(param0: string): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassBasedDeclarationContainer {
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.ClassBasedDeclarationContainer interface with the provided implementation.
				 */
				public constructor(implementation: {
					getJClass(): javalangClass;
					getMembers(): javautilCollection;
				});
				public getJClass(): javalangClass;
				public getMembers(): javautilCollection;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ClassReference {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getObjectInstance(): javalangObject;
				public getSupertypes(): javautilList;
				public isFinal(): boolean;
				public isInner(): boolean;
				public isCompanion(): boolean;
				public getQualifiedName(): string;
				public getMembers(): javautilCollection;
				public getAnnotations(): javautilList;
				public getNestedClasses(): javautilCollection;
				public toString(): string;
				public getTypeParameters(): javautilList;
				public getSimpleName(): string;
				public isData(): boolean;
				public isInstance(param0: javalangObject): boolean;
				public getConstructors(): javautilCollection;
				public getJClass(): javalangClass;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public isOpen(): boolean;
				public isSealed(): boolean;
				public constructor(param0: javalangClass);
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class CollectionToArray {
				public static toArray(param0: javautilCollection): native.Array<javalangObject>;
				public static toArray(param0: javautilCollection, param1: native.Array<javalangObject>): native.Array<javalangObject>;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DefaultConstructorMarker {
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleCompanionObject {
				public static INSTANCE: kotlin.jvm.internal.DoubleCompanionObject;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class DoubleSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class EnumCompanionObject {
				public static INSTANCE: kotlin.jvm.internal.EnumCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatCompanionObject {
				public static INSTANCE: kotlin.jvm.internal.FloatCompanionObject;
				public getNaN(): number;
				public getMAX_VALUE(): number;
				public getNEGATIVE_INFINITY(): number;
				public getMIN_VALUE(): number;
				public getPOSITIVE_INFINITY(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FloatSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionBase {
				/**
				 * Constructs a new instance of the kotlin.jvm.internal.FunctionBase interface with the provided implementation.
				 */
				public constructor(implementation: {
					getArity(): number;
				});
				public getArity(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class FunctionImpl {
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject): javalangObject;
				public getArity(): number;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject): javalangObject;
				public constructor();
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject): javalangObject;
				public invokeVararg(param0: native.Array<javalangObject>): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject): javalangObject;
				public invoke(): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject, param13: javalangObject, param14: javalangObject, param15: javalangObject, param16: javalangObject, param17: javalangObject, param18: javalangObject, param19: javalangObject, param20: javalangObject, param21: javalangObject): javalangObject;
				public invoke(param0: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject): javalangObject;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject, param3: javalangObject, param4: javalangObject, param5: javalangObject, param6: javalangObject, param7: javalangObject, param8: javalangObject, param9: javalangObject, param10: javalangObject, param11: javalangObject, param12: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReference extends kotlin.jvm.internal.CallableReference implements kotlin.jvm.internal.FunctionBase, kotlin.reflect.KFunction {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getArity(): number;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public constructor();
				public isExternal(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public hashCode(): number;
				public getReflected(): kotlin.reflect.KCallable;
				public getReflected(): kotlin.reflect.KFunction;
				public isAbstract(): boolean;
				public constructor(param0: number, param1: javalangObject);
				public getAnnotations(): javautilList;
				public getName(): string;
				public toString(): string;
				public isInfix(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public equals(param0: javalangObject): boolean;
				public isOpen(): boolean;
				public constructor(param0: number);
				public isSuspend(): boolean;
				public computeReflected(): kotlin.reflect.KCallable;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class FunctionReferenceImpl extends kotlin.jvm.internal.FunctionReference {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public constructor(param0: number, param1: javalangObject);
				public isInline(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getArity(): number;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public constructor();
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public constructor(param0: number, param1: kotlin.reflect.KDeclarationContainer, param2: string, param3: string);
				public isOpen(): boolean;
				public constructor(param0: number);
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class InlineMarker {
				public static mark(param0: string): void;
				public static beforeInlineCall(): void;
				public static finallyEnd(param0: number): void;
				public static afterInlineCall(): void;
				public constructor();
				public static mark(param0: number): void;
				public static finallyStart(param0: number): void;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntCompanionObject {
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static INSTANCE: kotlin.jvm.internal.IntCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class IntSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Intrinsics {
				public static areEqual(param0: javalangObject, param1: javalangObject): boolean;
				public static checkNotNullParameter(param0: javalangObject, param1: string): void;
				public static throwIllegalState(param0: string): void;
				public static checkNotNull(param0: javalangObject): void;
				public static checkHasClass(param0: string, param1: string): void;
				public static throwUndefinedForReified(): void;
				public static areEqual(param0: javalangFloat, param1: number): boolean;
				public static throwIllegalArgument(): void;
				public static checkReturnedValueIsNotNull(param0: javalangObject, param1: string, param2: string): void;
				public static needClassReification(): void;
				public static checkParameterIsNotNull(param0: javalangObject, param1: string): void;
				public static throwNpe(param0: string): void;
				public static throwAssert(): void;
				public static throwIllegalArgument(param0: string): void;
				public static checkHasClass(param0: string): void;
				public static throwAssert(param0: string): void;
				public static areEqual(param0: javalangFloat, param1: javalangFloat): boolean;
				public static throwUninitializedProperty(param0: string): void;
				public static checkReturnedValueIsNotNull(param0: javalangObject, param1: string): void;
				public static reifiedOperationMarker(param0: number, param1: string, param2: string): void;
				public static needClassReification(param0: string): void;
				public static throwNpe(): void;
				public static areEqual(param0: number, param1: javalangFloat): boolean;
				public static checkExpressionValueIsNotNull(param0: javalangObject, param1: string): void;
				public static reifiedOperationMarker(param0: number, param1: string): void;
				public static throwIllegalState(): void;
				public static areEqual(param0: javalangDouble, param1: javalangDouble): boolean;
				public static throwUndefinedForReified(param0: string): void;
				public static checkNotNull(param0: javalangObject, param1: string): void;
				public static areEqual(param0: number, param1: javalangDouble): boolean;
				public static checkNotNullExpressionValue(param0: javalangObject, param1: string): void;
				public static checkFieldIsNotNull(param0: javalangObject, param1: string): void;
				public static compare(param0: number, param1: number): number;
				public static checkFieldIsNotNull(param0: javalangObject, param1: string, param2: string): void;
				public static stringPlus(param0: string, param1: javalangObject): string;
				public static throwUninitializedPropertyAccessException(param0: string): void;
				public static areEqual(param0: javalangDouble, param1: number): boolean;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class Lambda {
				public getArity(): number;
				public constructor(param0: number);
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReference extends kotlin.jvm.internal.PropertyReference0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public get(): javalangObject;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getDelegate(): javalangObject;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LocalVariableReferencesKt {
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongCompanionObject {
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static INSTANCE: kotlin.jvm.internal.LongCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class LongSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutableLocalVariableReference extends kotlin.jvm.internal.MutablePropertyReference0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public set(param0: javalangObject): void;
				public get(): javalangObject;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KMutableProperty {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference0 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public invoke(): javalangObject;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public set(param0: javalangObject): void;
				public get(): javalangObject;
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getDelegate(): javalangObject;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public computeReflected(): kotlin.reflect.KCallable;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference0Impl extends kotlin.jvm.internal.MutablePropertyReference0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public getSetter(): kotlin.reflect.KMutableProperty0.Setter;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public set(param0: javalangObject): void;
				public get(): javalangObject;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference1 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty1 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public getDelegate(param0: javalangObject): javalangObject;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public set(param0: javalangObject, param1: javalangObject): void;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public invoke(param0: javalangObject): javalangObject;
				public getGetter(): kotlin.reflect.KProperty1.Getter;
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter;
				public computeReflected(): kotlin.reflect.KCallable;
				public get(param0: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference1Impl extends kotlin.jvm.internal.MutablePropertyReference1 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public set(param0: javalangObject, param1: javalangObject): void;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public getGetter(): kotlin.reflect.KProperty1.Getter;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public getSetter(): kotlin.reflect.KMutableProperty1.Setter;
				public get(param0: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class MutablePropertyReference2 extends kotlin.jvm.internal.MutablePropertyReference implements kotlin.reflect.KMutableProperty2 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public set(param0: javalangObject, param1: javalangObject, param2: javalangObject): void;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
				public get(param0: javalangObject, param1: javalangObject): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public isOpen(): boolean;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter;
				public getGetter(): kotlin.reflect.KProperty2.Getter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public computeReflected(): kotlin.reflect.KCallable;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class MutablePropertyReference2Impl extends kotlin.jvm.internal.MutablePropertyReference2 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public set(param0: javalangObject, param1: javalangObject, param2: javalangObject): void;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public get(param0: javalangObject, param1: javalangObject): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getSetter(): kotlin.reflect.KMutableProperty.Setter;
				public getSetter(): kotlin.reflect.KMutableProperty2.Setter;
				public getGetter(): kotlin.reflect.KProperty2.Getter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PackageReference {
				public getJClass(): javalangClass;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getMembers(): javautilCollection;
				public constructor(param0: javalangClass, param1: string);
				public toString(): string;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PrimitiveSpreadBuilder {
				public addSpread(param0: javalangObject): void;
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public constructor(param0: number);
				public getPosition(): number;
				public setPosition(param0: number): void;
				public getSize(param0: javalangObject): number;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference extends kotlin.jvm.internal.CallableReference implements kotlin.reflect.KProperty {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getReflected(): kotlin.reflect.KProperty;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public toString(): string;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public equals(param0: javalangObject): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public hashCode(): number;
				public isOpen(): boolean;
				public getReflected(): kotlin.reflect.KCallable;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference0 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public invoke(): javalangObject;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public get(): javalangObject;
				public isOpen(): boolean;
				public getDelegate(): javalangObject;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public computeReflected(): kotlin.reflect.KCallable;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference0Impl extends kotlin.jvm.internal.PropertyReference0 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getGetter(): kotlin.reflect.KProperty0.Getter;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public get(): javalangObject;
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getDelegate(): javalangObject;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference1 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty1 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public getDelegate(param0: javalangObject): javalangObject;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public invoke(param0: javalangObject): javalangObject;
				public getGetter(): kotlin.reflect.KProperty1.Getter;
				public isOpen(): boolean;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public computeReflected(): kotlin.reflect.KCallable;
				public get(param0: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference1Impl extends kotlin.jvm.internal.PropertyReference1 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public getDelegate(param0: javalangObject): javalangObject;
				public isFinal(): boolean;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public getGetter(): kotlin.reflect.KProperty1.Getter;
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public get(param0: javalangObject): javalangObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export abstract class PropertyReference2 extends kotlin.jvm.internal.PropertyReference implements kotlin.reflect.KProperty2 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public isLateinit(): boolean;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
				public get(param0: javalangObject, param1: javalangObject): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public isOpen(): boolean;
				public getGetter(): kotlin.reflect.KProperty2.Getter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
				public computeReflected(): kotlin.reflect.KCallable;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class PropertyReference2Impl extends kotlin.jvm.internal.PropertyReference2 {
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public getSignature(): string;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getName(): string;
				public isLateinit(): boolean;
				public getReturnType(): kotlin.reflect.KType;
				public getTypeParameters(): javautilList;
				public constructor();
				public call(param0: native.Array<javalangObject>): javalangObject;
				public getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
				public get(param0: javalangObject, param1: javalangObject): javalangObject;
				public isConst(): boolean;
				public callBy(param0: javautilMap): javalangObject;
				public constructor(param0: javalangObject);
				public constructor(param0: kotlin.reflect.KDeclarationContainer, param1: string, param2: string);
				public isOpen(): boolean;
				public getOwner(): kotlin.reflect.KDeclarationContainer;
				public getGetter(): kotlin.reflect.KProperty2.Getter;
				public getGetter(): kotlin.reflect.KProperty.Getter;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Ref {
			}
			export module Ref {
				export class BooleanRef {
					public element: boolean;
					public toString(): string;
					public constructor();
				}
				export class ByteRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class CharRef {
					public element: string;
					public toString(): string;
					public constructor();
				}
				export class DoubleRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class FloatRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class IntRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class LongRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
				export class ObjectRef {
					public element: javalangObject;
					public toString(): string;
					public constructor();
				}
				export class ShortRef {
					public element: number;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class Reflection {
				public static getOrCreateKotlinClass(param0: javalangClass): kotlin.reflect.KClass;
				public static mutableProperty2(param0: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2;
				public static mutableProperty0(param0: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0;
				public constructor();
				public static createKotlinClass(param0: javalangClass, param1: string): kotlin.reflect.KClass;
				public static property0(param0: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0;
				public static renderLambdaToString(param0: kotlin.jvm.internal.Lambda): string;
				public static getOrCreateKotlinPackage(param0: javalangClass, param1: string): kotlin.reflect.KDeclarationContainer;
				public static mutableProperty1(param0: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1;
				public static getOrCreateKotlinClass(param0: javalangClass, param1: string): kotlin.reflect.KClass;
				public static property2(param0: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2;
				public static getOrCreateKotlinClasses(param0: native.Array<javalangClass>): native.Array<kotlin.reflect.KClass>;
				public static function(param0: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction;
				public static createKotlinClass(param0: javalangClass): kotlin.reflect.KClass;
				public static property1(param0: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ReflectionFactory {
				public createKotlinClass(param0: javalangClass): kotlin.reflect.KClass;
				public property0(param0: kotlin.jvm.internal.PropertyReference0): kotlin.reflect.KProperty0;
				public renderLambdaToString(param0: kotlin.jvm.internal.Lambda): string;
				public mutableProperty0(param0: kotlin.jvm.internal.MutablePropertyReference0): kotlin.reflect.KMutableProperty0;
				public property1(param0: kotlin.jvm.internal.PropertyReference1): kotlin.reflect.KProperty1;
				public getOrCreateKotlinPackage(param0: javalangClass, param1: string): kotlin.reflect.KDeclarationContainer;
				public property2(param0: kotlin.jvm.internal.PropertyReference2): kotlin.reflect.KProperty2;
				public constructor();
				public getOrCreateKotlinClass(param0: javalangClass): kotlin.reflect.KClass;
				public mutableProperty1(param0: kotlin.jvm.internal.MutablePropertyReference1): kotlin.reflect.KMutableProperty1;
				public getOrCreateKotlinClass(param0: javalangClass, param1: string): kotlin.reflect.KClass;
				public function(param0: kotlin.jvm.internal.FunctionReference): kotlin.reflect.KFunction;
				public createKotlinClass(param0: javalangClass, param1: string): kotlin.reflect.KClass;
				public mutableProperty2(param0: kotlin.jvm.internal.MutablePropertyReference2): kotlin.reflect.KMutableProperty2;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortCompanionObject {
				public static MIN_VALUE: number;
				public static MAX_VALUE: number;
				public static INSTANCE: kotlin.jvm.internal.ShortCompanionObject;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class ShortSpreadBuilder extends kotlin.jvm.internal.PrimitiveSpreadBuilder {
				public toArray(param0: javalangObject, param1: javalangObject): javalangObject;
				public add(param0: number): void;
				public constructor(param0: number);
				public getSize(param0: native.Array<number>): number;
				public toArray(): native.Array<number>;
				public getSize(param0: javalangObject): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class SpreadBuilder {
				public addSpread(param0: javalangObject): void;
				public toArray(param0: native.Array<javalangObject>): native.Array<javalangObject>;
				public constructor(param0: number);
				public add(param0: javalangObject): void;
				public size(): number;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export class StringCompanionObject {
				public static INSTANCE: kotlin.jvm.internal.StringCompanionObject;
			}
		}
	}
}

import javalangClassCastException = java.lang.ClassCastException;
declare module kotlin {
	export module jvm {
		export module internal {
			export class TypeIntrinsics {
				public static isFunctionOfArity(param0: javalangObject, param1: number): boolean;
				public static asMutableIterable(param0: javalangObject): javalangIterable;
				public static asMutableCollection(param0: javalangObject, param1: string): javautilCollection;
				public static asMutableMap(param0: javalangObject, param1: string): javautilMap;
				public static asMutableIterator(param0: javalangObject, param1: string): javautilIterator;
				public static asMutableListIterator(param0: javalangObject, param1: string): javautilListIterator;
				public static castToIterator(param0: javalangObject): javautilIterator;
				public static throwCce(param0: javalangObject, param1: string): void;
				public static isMutableList(param0: javalangObject): boolean;
				public static asMutableIterable(param0: javalangObject, param1: string): javalangIterable;
				public static asMutableMapEntry(param0: javalangObject): javautilMapEntry;
				public constructor();
				public static castToListIterator(param0: javalangObject): javautilListIterator;
				public static asMutableSet(param0: javalangObject): javautilSet;
				public static asMutableMap(param0: javalangObject): javautilMap;
				public static asMutableMapEntry(param0: javalangObject, param1: string): javautilMapEntry;
				public static isMutableListIterator(param0: javalangObject): boolean;
				public static getFunctionArity(param0: javalangObject): number;
				public static isMutableIterable(param0: javalangObject): boolean;
				public static asMutableCollection(param0: javalangObject): javautilCollection;
				public static castToIterable(param0: javalangObject): javalangIterable;
				public static isMutableSet(param0: javalangObject): boolean;
				public static asMutableList(param0: javalangObject): javautilList;
				public static isMutableIterator(param0: javalangObject): boolean;
				public static castToCollection(param0: javalangObject): javautilCollection;
				public static asMutableIterator(param0: javalangObject): javautilIterator;
				public static throwCce(param0: javalangClassCastException): javalangClassCastException;
				public static isMutableMapEntry(param0: javalangObject): boolean;
				public static beforeCheckcastToFunctionOfArity(param0: javalangObject, param1: number): javalangObject;
				public static castToList(param0: javalangObject): javautilList;
				public static beforeCheckcastToFunctionOfArity(param0: javalangObject, param1: number, param2: string): javalangObject;
				public static throwCce(param0: string): void;
				public static asMutableSet(param0: javalangObject, param1: string): javautilSet;
				public static castToMapEntry(param0: javalangObject): javautilMapEntry;
				public static asMutableList(param0: javalangObject, param1: string): javautilList;
				public static isMutableCollection(param0: javalangObject): boolean;
				public static asMutableListIterator(param0: javalangObject): javautilListIterator;
				public static isMutableMap(param0: javalangObject): boolean;
				public static castToSet(param0: javalangObject): javautilSet;
				public static castToMap(param0: javalangObject): javautilMap;
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMappedMarker {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMappedMarker interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableCollection {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableCollection interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterable {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterable interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableIterator {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableIterator interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableList {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableList interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableListIterator {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableListIterator interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableMap {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
				export module KMutableMap {
					export class Entry {
						/**
						 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableMap$Entry interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
					}
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module markers {
				export class KMutableSet {
					/**
					 * Constructs a new instance of the kotlin.jvm.internal.markers.KMutableSet interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
				}
			}
		}
	}
}

declare module kotlin {
	export module jvm {
		export module internal {
			export module unsafe {
				export class MonitorKt {
				}
			}
		}
	}
}

declare module kotlin {
	export module properties {
		export class Delegates {
			public static INSTANCE: kotlin.properties.Delegates;
			public observable(param0: javalangObject, param1: kotlin.jvm.functions.Function3): kotlin.properties.ReadWriteProperty;
			public vetoable(param0: javalangObject, param1: kotlin.jvm.functions.Function3): kotlin.properties.ReadWriteProperty;
			public notNull(): kotlin.properties.ReadWriteProperty;
		}
	}
}

declare module kotlin {
	export module properties {
		export class NotNullVar {
			public getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
			public setValue(param0: javalangObject, param1: kotlin.reflect.KProperty, param2: javalangObject): void;
			public constructor();
		}
	}
}

declare module kotlin {
	export module properties {
		export abstract class ObservableProperty {
			public getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
			public setValue(param0: javalangObject, param1: kotlin.reflect.KProperty, param2: javalangObject): void;
			public constructor(param0: javalangObject);
			public afterChange(param0: kotlin.reflect.KProperty, param1: javalangObject, param2: javalangObject): void;
			public beforeChange(param0: kotlin.reflect.KProperty, param1: javalangObject, param2: javalangObject): boolean;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadOnlyProperty {
			/**
			 * Constructs a new instance of the kotlin.properties.ReadOnlyProperty interface with the provided implementation.
			 */
			public constructor(implementation: {
				getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
			});
			public getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
		}
	}
}

declare module kotlin {
	export module properties {
		export class ReadWriteProperty {
			/**
			 * Constructs a new instance of the kotlin.properties.ReadWriteProperty interface with the provided implementation.
			 */
			public constructor(implementation: {
				getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
				setValue(param0: javalangObject, param1: kotlin.reflect.KProperty, param2: javalangObject): void;
			});
			public getValue(param0: javalangObject, param1: kotlin.reflect.KProperty): javalangObject;
			public setValue(param0: javalangObject, param1: kotlin.reflect.KProperty, param2: javalangObject): void;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgression {
			public static Companion: kotlin.ranges.CharProgression.Companion;
			public getFirst(): string;
			public iterator(): kotlin.collections.CharIterator;
			public toString(): string;
			public isEmpty(): boolean;
			public equals(param0: javalangObject): boolean;
			public getLast(): string;
			public getStep(): number;
			public constructor(param0: string, param1: string, param2: number);
			public hashCode(): number;
		}
		export module CharProgression {
			export class Companion {
				public fromClosedRange(param0: string, param1: string, param2: number): kotlin.ranges.CharProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharProgressionIterator extends kotlin.collections.CharIterator {
			public nextChar(): string;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
			public constructor(param0: string, param1: string, param2: number);
		}
	}
}

declare module kotlin {
	export module ranges {
		export class CharRange extends kotlin.ranges.CharProgression implements kotlin.ranges.ClosedRange {
			public static Companion: kotlin.ranges.CharRange.Companion;
			public constructor(param0: string, param1: string);
			public toString(): string;
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: javalangComparable): boolean;
			public contains(param0: string): boolean;
			public equals(param0: javalangObject): boolean;
			public getEndInclusive(): javalangCharacter;
			public getStart(): javalangCharacter;
			public constructor(param0: string, param1: string, param2: number);
			public hashCode(): number;
		}
		export module CharRange {
			export class Companion {
				public getEMPTY(): kotlin.ranges.CharRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedDoubleRange {
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public lessThanOrEquals(param0: number, param1: number): boolean;
			public equals(param0: javalangObject): boolean;
			public lessThanOrEquals(param0: javalangComparable, param1: javalangComparable): boolean;
			public getEndInclusive(): javalangDouble;
			public toString(): string;
			public contains(param0: javalangComparable): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: number): boolean;
			public getStart(): javalangDouble;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatRange {
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getStart(): javalangFloat;
			public getEndInclusive(): javalangFloat;
			public lessThanOrEquals(param0: number, param1: number): boolean;
			public equals(param0: javalangObject): boolean;
			public lessThanOrEquals(param0: javalangComparable, param1: javalangComparable): boolean;
			public toString(): string;
			public contains(param0: javalangComparable): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: number): boolean;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedFloatingPointRange {
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedFloatingPointRange interface with the provided implementation.
			 */
			public constructor(implementation: {
				contains(param0: javalangComparable): boolean;
				isEmpty(): boolean;
				lessThanOrEquals(param0: javalangComparable, param1: javalangComparable): boolean;
				getStart(): javalangComparable;
				getEndInclusive(): javalangComparable;
				contains(param0: javalangComparable): boolean;
				isEmpty(): boolean;
			});
			public lessThanOrEquals(param0: javalangComparable, param1: javalangComparable): boolean;
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public contains(param0: javalangComparable): boolean;
			public getEndInclusive(): javalangComparable;
		}
		export module ClosedFloatingPointRange {
			export class DefaultImpls {
				public static contains(param0: kotlin.ranges.ClosedFloatingPointRange, param1: javalangComparable): boolean;
				public static isEmpty(param0: kotlin.ranges.ClosedFloatingPointRange): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ClosedRange {
			/**
			 * Constructs a new instance of the kotlin.ranges.ClosedRange interface with the provided implementation.
			 */
			public constructor(implementation: {
				getStart(): javalangComparable;
				getEndInclusive(): javalangComparable;
				contains(param0: javalangComparable): boolean;
				isEmpty(): boolean;
			});
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: javalangComparable): boolean;
		}
		export module ClosedRange {
			export class DefaultImpls {
				public static contains(param0: kotlin.ranges.ClosedRange, param1: javalangComparable): boolean;
				public static isEmpty(param0: kotlin.ranges.ClosedRange): boolean;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class ComparableRange {
			public toString(): string;
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: javalangComparable): boolean;
			public equals(param0: javalangObject): boolean;
			public constructor(param0: javalangComparable, param1: javalangComparable);
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgression {
			public static Companion: kotlin.ranges.IntProgression.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public toString(): string;
			public isEmpty(): boolean;
			public getFirst(): number;
			public iterator(): kotlin.collections.IntIterator;
			public equals(param0: javalangObject): boolean;
			public getLast(): number;
			public getStep(): number;
			public hashCode(): number;
		}
		export module IntProgression {
			export class Companion {
				public fromClosedRange(param0: number, param1: number, param2: number): kotlin.ranges.IntProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntProgressionIterator extends kotlin.collections.IntIterator {
			public constructor(param0: number, param1: number, param2: number);
			public nextInt(): number;
			public constructor();
			public hasNext(): boolean;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class IntRange extends kotlin.ranges.IntProgression implements kotlin.ranges.ClosedRange {
			public static Companion: kotlin.ranges.IntRange.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public getStart(): javalangInteger;
			public getEndInclusive(): javalangInteger;
			public toString(): string;
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: javalangComparable): boolean;
			public equals(param0: javalangObject): boolean;
			public contains(param0: number): boolean;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
		export module IntRange {
			export class Companion {
				public getEMPTY(): kotlin.ranges.IntRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgression {
			public static Companion: kotlin.ranges.LongProgression.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public toString(): string;
			public isEmpty(): boolean;
			public getFirst(): number;
			public equals(param0: javalangObject): boolean;
			public getLast(): number;
			public getStep(): number;
			public iterator(): kotlin.collections.LongIterator;
			public hashCode(): number;
		}
		export module LongProgression {
			export class Companion {
				public fromClosedRange(param0: number, param1: number, param2: number): kotlin.ranges.LongProgression;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongProgressionIterator extends kotlin.collections.LongIterator {
			public constructor(param0: number, param1: number, param2: number);
			public constructor();
			public hasNext(): boolean;
			public nextLong(): number;
			public getStep(): number;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class LongRange extends kotlin.ranges.LongProgression implements kotlin.ranges.ClosedRange {
			public static Companion: kotlin.ranges.LongRange.Companion;
			public constructor(param0: number, param1: number, param2: number);
			public toString(): string;
			public getStart(): javalangComparable;
			public isEmpty(): boolean;
			public getEndInclusive(): javalangComparable;
			public contains(param0: javalangComparable): boolean;
			public equals(param0: javalangObject): boolean;
			public getStart(): javalangLong;
			public getEndInclusive(): javalangLong;
			public contains(param0: number): boolean;
			public constructor(param0: number, param1: number);
			public hashCode(): number;
		}
		export module LongRange {
			export class Companion {
				public getEMPTY(): kotlin.ranges.LongRange;
			}
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt extends kotlin.ranges.RangesKt___RangesKt {
		}
	}
}

import javalangNumber = java.lang.Number;
declare module kotlin {
	export module ranges {
		export class RangesKt__RangesKt {
			public static checkStepIsPositive(param0: boolean, param1: javalangNumber): void;
			public static rangeTo(param0: javalangComparable, param1: javalangComparable): kotlin.ranges.ClosedRange;
			public constructor();
			public static rangeTo(param0: number, param1: number): kotlin.ranges.ClosedFloatingPointRange;
		}
	}
}

declare module kotlin {
	export module ranges {
		export class RangesKt___RangesKt extends kotlin.ranges.RangesKt__RangesKt {
			public static byteRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static coerceIn(param0: number, param1: kotlin.ranges.ClosedRange): number;
			public static intRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static downTo(param0: number, param1: number): kotlin.ranges.LongProgression;
			public static until(param0: number, param1: number): kotlin.ranges.LongRange;
			public static toLongExactOrNull(param0: number): javalangLong;
			public static shortRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static doubleRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static downTo(param0: number, param1: number): kotlin.ranges.IntProgression;
			public static toByteExactOrNull(param0: number): javalangByte;
			public static reversed(param0: kotlin.ranges.LongProgression): kotlin.ranges.LongProgression;
			public static coerceAtLeast(param0: javalangComparable, param1: javalangComparable): javalangComparable;
			public static coerceAtMost(param0: number, param1: number): number;
			public static floatRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static step(param0: kotlin.ranges.IntProgression, param1: number): kotlin.ranges.IntProgression;
			public static toShortExactOrNull(param0: number): javalangShort;
			public static coerceAtLeast(param0: number, param1: number): number;
			public static downTo(param0: string, param1: string): kotlin.ranges.CharProgression;
			public static reversed(param0: kotlin.ranges.IntProgression): kotlin.ranges.IntProgression;
			public static step(param0: kotlin.ranges.CharProgression, param1: number): kotlin.ranges.CharProgression;
			public static coerceIn(param0: javalangComparable, param1: kotlin.ranges.ClosedFloatingPointRange): javalangComparable;
			public static coerceIn(param0: javalangComparable, param1: kotlin.ranges.ClosedRange): javalangComparable;
			public constructor();
			public static toIntExactOrNull(param0: number): javalangInteger;
			public static until(param0: number, param1: number): kotlin.ranges.IntRange;
			public static longRangeContains(param0: kotlin.ranges.ClosedRange, param1: number): boolean;
			public static step(param0: kotlin.ranges.LongProgression, param1: number): kotlin.ranges.LongProgression;
			public static coerceAtMost(param0: javalangComparable, param1: javalangComparable): javalangComparable;
			public static coerceIn(param0: javalangComparable, param1: javalangComparable, param2: javalangComparable): javalangComparable;
			public static reversed(param0: kotlin.ranges.CharProgression): kotlin.ranges.CharProgression;
			public static until(param0: string, param1: string): kotlin.ranges.CharRange;
			public static coerceIn(param0: number, param1: number, param2: number): number;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KAnnotatedElement {
			/**
			 * Constructs a new instance of the kotlin.reflect.KAnnotatedElement interface with the provided implementation.
			 */
			public constructor(implementation: {
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KCallable {
			/**
			 * Constructs a new instance of the kotlin.reflect.KCallable interface with the provided implementation.
			 */
			public constructor(implementation: {
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
		}
		export module KCallable {
			export class DefaultImpls {
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClass {
			/**
			 * Constructs a new instance of the kotlin.reflect.KClass interface with the provided implementation.
			 */
			public constructor(implementation: {
				getSimpleName(): string;
				getQualifiedName(): string;
				getMembers(): javautilCollection;
				getConstructors(): javautilCollection;
				getNestedClasses(): javautilCollection;
				getObjectInstance(): javalangObject;
				isInstance(param0: javalangObject): boolean;
				getTypeParameters(): javautilList;
				getSupertypes(): javautilList;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				isSealed(): boolean;
				isData(): boolean;
				isInner(): boolean;
				isCompanion(): boolean;
				equals(param0: javalangObject): boolean;
				hashCode(): number;
				getMembers(): javautilCollection;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public getMembers(): javautilCollection;
			public isFinal(): boolean;
			public isInner(): boolean;
			public getConstructors(): javautilCollection;
			public equals(param0: javalangObject): boolean;
			public getSimpleName(): string;
			public getObjectInstance(): javalangObject;
			public isCompanion(): boolean;
			public isSealed(): boolean;
			public getQualifiedName(): string;
			public isOpen(): boolean;
			public getNestedClasses(): javautilCollection;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getSupertypes(): javautilList;
			public isData(): boolean;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public isInstance(param0: javalangObject): boolean;
			public hashCode(): number;
		}
		export module KClass {
			export class DefaultImpls {
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KClassifier {
			/**
			 * Constructs a new instance of the kotlin.reflect.KClassifier interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KDeclarationContainer {
			/**
			 * Constructs a new instance of the kotlin.reflect.KDeclarationContainer interface with the provided implementation.
			 */
			public constructor(implementation: {
				getMembers(): javautilCollection;
			});
			public getMembers(): javautilCollection;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KFunction {
			/**
			 * Constructs a new instance of the kotlin.reflect.KFunction interface with the provided implementation.
			 */
			public constructor(implementation: {
				isInline(): boolean;
				isExternal(): boolean;
				isOperator(): boolean;
				isInfix(): boolean;
				isSuspend(): boolean;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public isSuspend(): boolean;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public isOperator(): boolean;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public isInline(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public isInfix(): boolean;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public isExternal(): boolean;
		}
		export module KFunction {
			export class DefaultImpls {
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty {
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty interface with the provided implementation.
			 */
			public constructor(implementation: {
				getSetter(): kotlin.reflect.KMutableProperty.Setter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KMutableProperty {
			export class Setter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty$Setter interface with the provided implementation.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty0 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty0 interface with the provided implementation.
			 */
			public constructor(implementation: {
				set(param0: javalangObject): void;
				getSetter(): kotlin.reflect.KMutableProperty0.Setter;
				get(): javalangObject;
				getDelegate(): javalangObject;
				getGetter(): kotlin.reflect.KProperty0.Getter;
				getSetter(): kotlin.reflect.KMutableProperty.Setter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(): javalangObject;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
				getAnnotations(): javautilList;
			});
			public getDelegate(): javalangObject;
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getSetter(): kotlin.reflect.KMutableProperty0.Setter;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public getGetter(): kotlin.reflect.KProperty0.Getter;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public get(): javalangObject;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public set(param0: javalangObject): void;
			public invoke(): javalangObject;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KMutableProperty0 {
			export class Setter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty0$Setter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public invoke(param0: javalangObject): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty1 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty1 interface with the provided implementation.
			 */
			public constructor(implementation: {
				set(param0: javalangObject, param1: javalangObject): void;
				getSetter(): kotlin.reflect.KMutableProperty1.Setter;
				get(param0: javalangObject): javalangObject;
				getDelegate(param0: javalangObject): javalangObject;
				getGetter(): kotlin.reflect.KProperty1.Getter;
				getSetter(): kotlin.reflect.KMutableProperty.Setter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(param0: javalangObject): javalangObject;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
				getAnnotations(): javautilList;
			});
			public getSetter(): kotlin.reflect.KMutableProperty1.Setter;
			public getAnnotations(): javautilList;
			public set(param0: javalangObject, param1: javalangObject): void;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public invoke(param0: javalangObject): javalangObject;
			public getGetter(): kotlin.reflect.KProperty1.Getter;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
			public get(param0: javalangObject): javalangObject;
			public getDelegate(param0: javalangObject): javalangObject;
		}
		export module KMutableProperty1 {
			export class Setter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty1$Setter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KMutableProperty2 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KMutableProperty2 interface with the provided implementation.
			 */
			public constructor(implementation: {
				set(param0: javalangObject, param1: javalangObject, param2: javalangObject): void;
				getSetter(): kotlin.reflect.KMutableProperty2.Setter;
				get(param0: javalangObject, param1: javalangObject): javalangObject;
				getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
				getGetter(): kotlin.reflect.KProperty2.Getter;
				getSetter(): kotlin.reflect.KMutableProperty.Setter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getSetter(): kotlin.reflect.KMutableProperty2.Setter;
			public getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public get(param0: javalangObject, param1: javalangObject): javalangObject;
			public getSetter(): kotlin.reflect.KMutableProperty.Setter;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public set(param0: javalangObject, param1: javalangObject, param2: javalangObject): void;
			public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty2.Getter;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KMutableProperty2 {
			export class Setter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KMutableProperty2$Setter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public invoke(param0: javalangObject, param1: javalangObject, param2: javalangObject): javalangObject;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KParameter {
			/**
			 * Constructs a new instance of the kotlin.reflect.KParameter interface with the provided implementation.
			 */
			public constructor(implementation: {
				getIndex(): number;
				getName(): string;
				getType(): kotlin.reflect.KType;
				getKind(): kotlin.reflect.KParameter.Kind;
				isOptional(): boolean;
				isVararg(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public getIndex(): number;
			public isOptional(): boolean;
			public getType(): kotlin.reflect.KType;
			public getName(): string;
			public getKind(): kotlin.reflect.KParameter.Kind;
			public isVararg(): boolean;
		}
		export module KParameter {
			export class DefaultImpls {
			}
			export class Kind {
				public static INSTANCE: kotlin.reflect.KParameter.Kind;
				public static EXTENSION_RECEIVER: kotlin.reflect.KParameter.Kind;
				public static VALUE: kotlin.reflect.KParameter.Kind;
				public static values(): native.Array<kotlin.reflect.KParameter.Kind>;
				public constructor(param0: string, param1: number);
				public static valueOf(param0: string): kotlin.reflect.KParameter.Kind;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty {
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty interface with the provided implementation.
			 */
			public constructor(implementation: {
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KProperty {
			export class Accessor {
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty$Accessor interface with the provided implementation.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty;
				});
				public getProperty(): kotlin.reflect.KProperty;
			}
			export class DefaultImpls {
			}
			export class Getter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty$Getter interface with the provided implementation.
				 */
				public constructor(implementation: {
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty0 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty0 interface with the provided implementation.
			 */
			public constructor(implementation: {
				get(): javalangObject;
				getDelegate(): javalangObject;
				getGetter(): kotlin.reflect.KProperty0.Getter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(): javalangObject;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getDelegate(): javalangObject;
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public getGetter(): kotlin.reflect.KProperty0.Getter;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public get(): javalangObject;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public invoke(): javalangObject;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KProperty0 {
			export class Getter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty0$Getter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public invoke(): javalangObject;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty1 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty1 interface with the provided implementation.
			 */
			public constructor(implementation: {
				get(param0: javalangObject): javalangObject;
				getDelegate(param0: javalangObject): javalangObject;
				getGetter(): kotlin.reflect.KProperty1.Getter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(param0: javalangObject): javalangObject;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public invoke(param0: javalangObject): javalangObject;
			public getGetter(): kotlin.reflect.KProperty1.Getter;
			public getVisibility(): kotlin.reflect.KVisibility;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty.Getter;
			public get(param0: javalangObject): javalangObject;
			public getDelegate(param0: javalangObject): javalangObject;
		}
		export module KProperty1 {
			export class Getter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty1$Getter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public invoke(param0: javalangObject): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KProperty2 {
			/**
			 * Constructs a new instance of the kotlin.reflect.KProperty2 interface with the provided implementation.
			 */
			public constructor(implementation: {
				get(param0: javalangObject, param1: javalangObject): javalangObject;
				getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
				getGetter(): kotlin.reflect.KProperty2.Getter;
				isLateinit(): boolean;
				isConst(): boolean;
				getGetter(): kotlin.reflect.KProperty.Getter;
				invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				getName(): string;
				getParameters(): javautilList;
				getReturnType(): kotlin.reflect.KType;
				getTypeParameters(): javautilList;
				call(param0: native.Array<javalangObject>): javalangObject;
				callBy(param0: javautilMap): javalangObject;
				getVisibility(): kotlin.reflect.KVisibility;
				isFinal(): boolean;
				isOpen(): boolean;
				isAbstract(): boolean;
				getAnnotations(): javautilList;
			});
			public getAnnotations(): javautilList;
			public isFinal(): boolean;
			public getReturnType(): kotlin.reflect.KType;
			public getDelegate(param0: javalangObject, param1: javalangObject): javalangObject;
			public getParameters(): javautilList;
			public callBy(param0: javautilMap): javalangObject;
			public call(param0: native.Array<javalangObject>): javalangObject;
			public get(param0: javalangObject, param1: javalangObject): javalangObject;
			public isLateinit(): boolean;
			public isConst(): boolean;
			public isOpen(): boolean;
			public getName(): string;
			public getVisibility(): kotlin.reflect.KVisibility;
			public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
			public getTypeParameters(): javautilList;
			public isAbstract(): boolean;
			public getGetter(): kotlin.reflect.KProperty2.Getter;
			public getGetter(): kotlin.reflect.KProperty.Getter;
		}
		export module KProperty2 {
			export class Getter {
				/**
				 * Constructs a new instance of the kotlin.reflect.KProperty2$Getter interface with the provided implementation.
				 */
				public constructor(implementation: {
					invoke(param0: javalangObject, param1: javalangObject): javalangObject;
					getProperty(): kotlin.reflect.KProperty;
					isInline(): boolean;
					isExternal(): boolean;
					isOperator(): boolean;
					isInfix(): boolean;
					isSuspend(): boolean;
					getName(): string;
					getParameters(): javautilList;
					getReturnType(): kotlin.reflect.KType;
					getTypeParameters(): javautilList;
					call(param0: native.Array<javalangObject>): javalangObject;
					callBy(param0: javautilMap): javalangObject;
					getVisibility(): kotlin.reflect.KVisibility;
					isFinal(): boolean;
					isOpen(): boolean;
					isAbstract(): boolean;
					getAnnotations(): javautilList;
				});
				public getVisibility(): kotlin.reflect.KVisibility;
				public isAbstract(): boolean;
				public isInline(): boolean;
				public getParameters(): javautilList;
				public isFinal(): boolean;
				public getAnnotations(): javautilList;
				public getName(): string;
				public getReturnType(): kotlin.reflect.KType;
				public isOperator(): boolean;
				public invoke(param0: javalangObject, param1: javalangObject): javalangObject;
				public getTypeParameters(): javautilList;
				public isInfix(): boolean;
				public isExternal(): boolean;
				public call(param0: native.Array<javalangObject>): javalangObject;
				public callBy(param0: javautilMap): javalangObject;
				public getProperty(): kotlin.reflect.KProperty;
				public isOpen(): boolean;
				public isSuspend(): boolean;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KType {
			/**
			 * Constructs a new instance of the kotlin.reflect.KType interface with the provided implementation.
			 */
			public constructor(implementation: {
				getClassifier(): kotlin.reflect.KClassifier;
				getArguments(): javautilList;
				isMarkedNullable(): boolean;
			});
			public isMarkedNullable(): boolean;
			public getClassifier(): kotlin.reflect.KClassifier;
			public getArguments(): javautilList;
		}
		export module KType {
			export class DefaultImpls {
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeParameter {
			/**
			 * Constructs a new instance of the kotlin.reflect.KTypeParameter interface with the provided implementation.
			 */
			public constructor(implementation: {
				getName(): string;
				getUpperBounds(): javautilList;
				getVariance(): kotlin.reflect.KVariance;
				isReified(): boolean;
			});
			public isReified(): boolean;
			public getName(): string;
			public getVariance(): kotlin.reflect.KVariance;
			public getUpperBounds(): javautilList;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KTypeProjection {
			public static Companion: kotlin.reflect.KTypeProjection.Companion;
			public getType(): kotlin.reflect.KType;
			public copy(param0: kotlin.reflect.KVariance, param1: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			public toString(): string;
			public equals(param0: javalangObject): boolean;
			public constructor(param0: kotlin.reflect.KVariance, param1: kotlin.reflect.KType);
			public getVariance(): kotlin.reflect.KVariance;
			public component1(): kotlin.reflect.KVariance;
			public component2(): kotlin.reflect.KType;
			public hashCode(): number;
		}
		export module KTypeProjection {
			export class Companion {
				public contravariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public covariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
				public getSTAR(): kotlin.reflect.KTypeProjection;
				public invariant(param0: kotlin.reflect.KType): kotlin.reflect.KTypeProjection;
			}
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVariance {
			public static INVARIANT: kotlin.reflect.KVariance;
			public static IN: kotlin.reflect.KVariance;
			public static OUT: kotlin.reflect.KVariance;
			public constructor(param0: string, param1: number);
			public static values(): native.Array<kotlin.reflect.KVariance>;
			public static valueOf(param0: string): kotlin.reflect.KVariance;
		}
	}
}

declare module kotlin {
	export module reflect {
		export class KVisibility {
			public static PUBLIC: kotlin.reflect.KVisibility;
			public static PROTECTED: kotlin.reflect.KVisibility;
			public static INTERNAL: kotlin.reflect.KVisibility;
			public static PRIVATE: kotlin.reflect.KVisibility;
			public static valueOf(param0: string): kotlin.reflect.KVisibility;
			public constructor(param0: string, param1: number);
			public static values(): native.Array<kotlin.reflect.KVisibility>;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class ConstrainedOnceSequence {
			public iterator(): javautilIterator;
			public constructor(param0: kotlin.sequences.Sequence);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctIterator extends kotlin.collections.AbstractIterator {
			public constructor();
			public constructor(param0: javautilIterator, param1: kotlin.jvm.functions.Function1);
			public computeNext(): void;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DistinctSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: number);
			public iterator(): javautilIterator;
			public take(param0: number): kotlin.sequences.Sequence;
			public drop(param0: number): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropTakeSequence {
			/**
			 * Constructs a new instance of the kotlin.sequences.DropTakeSequence interface with the provided implementation.
			 */
			public constructor(implementation: {
				drop(param0: number): kotlin.sequences.Sequence;
				take(param0: number): kotlin.sequences.Sequence;
				iterator(): javautilIterator;
			});
			public iterator(): javautilIterator;
			public take(param0: number): kotlin.sequences.Sequence;
			public drop(param0: number): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class DropWhileSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class EmptySequence {
			public static INSTANCE: kotlin.sequences.EmptySequence;
			public iterator(): javautilIterator;
			public drop(param0: number): kotlin.sequences.EmptySequence;
			public take(param0: number): kotlin.sequences.Sequence;
			public take(param0: number): kotlin.sequences.EmptySequence;
			public drop(param0: number): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FilteringSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: boolean, param2: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class FlatteningSequence {
			public iterator(): javautilIterator;
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class GeneratorSequence {
			public constructor(param0: kotlin.jvm.functions.Function0, param1: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class IndexingSequence {
			public iterator(): javautilIterator;
			public constructor(param0: kotlin.sequences.Sequence);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class MergingSequence {
			public iterator(): javautilIterator;
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.sequences.Sequence, param2: kotlin.jvm.functions.Function2);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class Sequence {
			/**
			 * Constructs a new instance of the kotlin.sequences.Sequence interface with the provided implementation.
			 */
			public constructor(implementation: {
				iterator(): javautilIterator;
			});
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt extends kotlin.sequences.SequencesKt___SequencesKt {
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt__SequencesKt {
			public static generateSequence(param0: kotlin.jvm.functions.Function0): kotlin.sequences.Sequence;
			public static emptySequence(): kotlin.sequences.Sequence;
			public static asSequence(param0: javautilIterator): kotlin.sequences.Sequence;
			public static generateSequence(param0: kotlin.jvm.functions.Function0, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static constrainOnce(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static unzip(param0: kotlin.sequences.Sequence): kotlin.Pair;
			public constructor();
			public static generateSequence(param0: javalangObject, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static flatten(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static sequenceOf(param0: native.Array<javalangObject>): kotlin.sequences.Sequence;
			public static flattenSequenceOfIterable(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SequencesKt___SequencesKt extends kotlin.sequences.SequencesKt__SequencesKt {
			public static associateTo(param0: kotlin.sequences.Sequence, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static max(param0: kotlin.sequences.Sequence): javalangDouble;
			public static elementAtOrElse(param0: kotlin.sequences.Sequence, param1: number, param2: kotlin.jvm.functions.Function1): javalangObject;
			public static any(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): boolean;
			public static lastOrNull(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static lastIndexOf(param0: kotlin.sequences.Sequence, param1: javalangObject): number;
			public static single(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static fold(param0: kotlin.sequences.Sequence, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static requireNoNulls(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static indexOfLast(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): number;
			public static filterIndexed(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2): kotlin.sequences.Sequence;
			public static minus(param0: kotlin.sequences.Sequence, param1: javalangObject): kotlin.sequences.Sequence;
			public static zip(param0: kotlin.sequences.Sequence, param1: kotlin.sequences.Sequence, param2: kotlin.jvm.functions.Function2): kotlin.sequences.Sequence;
			public static last(param0: kotlin.sequences.Sequence): javalangObject;
			public static filter(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static firstOrNull(param0: kotlin.sequences.Sequence): javalangObject;
			public static distinctBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static elementAtOrNull(param0: kotlin.sequences.Sequence, param1: number): javalangObject;
			public static associate(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static max(param0: kotlin.sequences.Sequence): javalangComparable;
			public static sortedBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static groupBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public constructor();
			public static first(param0: kotlin.sequences.Sequence): javalangObject;
			public static filterIndexedTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static map(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static averageOfFloat(param0: kotlin.sequences.Sequence): number;
			public static none(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): boolean;
			public static first(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static plus(param0: kotlin.sequences.Sequence, param1: javalangObject): kotlin.sequences.Sequence;
			public static associateByTo(param0: kotlin.sequences.Sequence, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static toSortedSet(param0: kotlin.sequences.Sequence): javautilSortedSet;
			public static sumOfLong(param0: kotlin.sequences.Sequence): number;
			public static mapIndexedNotNullTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static sumOfShort(param0: kotlin.sequences.Sequence): number;
			public static contains(param0: kotlin.sequences.Sequence, param1: javalangObject): boolean;
			public static minBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static filterNotNull(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static toCollection(param0: kotlin.sequences.Sequence, param1: javautilCollection): javautilCollection;
			public static min(param0: kotlin.sequences.Sequence): javalangFloat;
			public static take(param0: kotlin.sequences.Sequence, param1: number): kotlin.sequences.Sequence;
			public static all(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): boolean;
			public static distinct(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static sortedDescending(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static minus(param0: kotlin.sequences.Sequence, param1: native.Array<javalangObject>): kotlin.sequences.Sequence;
			public static foldIndexed(param0: kotlin.sequences.Sequence, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static min(param0: kotlin.sequences.Sequence): javalangDouble;
			public static toMutableList(param0: kotlin.sequences.Sequence): javautilList;
			public static filterIsInstanceTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: javalangClass): javautilCollection;
			public static none(param0: kotlin.sequences.Sequence): boolean;
			public static toHashSet(param0: kotlin.sequences.Sequence): javautilHashSet;
			public static maxBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static filterIsInstance(param0: kotlin.sequences.Sequence, param1: javalangClass): kotlin.sequences.Sequence;
			public static partition(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static singleOrNull(param0: kotlin.sequences.Sequence): javalangObject;
			public static associateBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static groupByTo(param0: kotlin.sequences.Sequence, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static firstOrNull(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static toSortedSet(param0: kotlin.sequences.Sequence, param1: javautilComparator): javautilSortedSet;
			public static indexOf(param0: kotlin.sequences.Sequence, param1: javalangObject): number;
			public static withIndex(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static sumBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): number;
			public static averageOfInt(param0: kotlin.sequences.Sequence): number;
			public static filterNotTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static reduceIndexed(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function3): javalangObject;
			public static averageOfLong(param0: kotlin.sequences.Sequence): number;
			public static indexOfFirst(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): number;
			public static plus(param0: kotlin.sequences.Sequence, param1: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static toMutableSet(param0: kotlin.sequences.Sequence): javautilSet;
			public static drop(param0: kotlin.sequences.Sequence, param1: number): kotlin.sequences.Sequence;
			public static maxWith(param0: kotlin.sequences.Sequence, param1: javautilComparator): javalangObject;
			public static last(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static filterNot(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static dropWhile(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static zip(param0: kotlin.sequences.Sequence, param1: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static lastOrNull(param0: kotlin.sequences.Sequence): javalangObject;
			public static mapTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static associateByTo(param0: kotlin.sequences.Sequence, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static sumOfByte(param0: kotlin.sequences.Sequence): number;
			public static filterNotNullTo(param0: kotlin.sequences.Sequence, param1: javautilCollection): javautilCollection;
			public static plus(param0: kotlin.sequences.Sequence, param1: native.Array<javalangObject>): kotlin.sequences.Sequence;
			public static associateBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static toList(param0: kotlin.sequences.Sequence): javautilList;
			public static sortedByDescending(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static count(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): number;
			public static forEachIndexed(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2): void;
			public static joinTo(param0: kotlin.sequences.Sequence, param1: javalangAppendable, param2: string, param3: string, param4: string, param5: number, param6: string, param7: kotlin.jvm.functions.Function1): javalangAppendable;
			public static minWith(param0: kotlin.sequences.Sequence, param1: javautilComparator): javalangObject;
			public static sumOfFloat(param0: kotlin.sequences.Sequence): number;
			public static sorted(param0: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static flatMapTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static plus(param0: kotlin.sequences.Sequence, param1: javalangIterable): kotlin.sequences.Sequence;
			public static minus(param0: kotlin.sequences.Sequence, param1: kotlin.sequences.Sequence): kotlin.sequences.Sequence;
			public static flatMap(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static toSet(param0: kotlin.sequences.Sequence): javautilSet;
			public static groupBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static elementAt(param0: kotlin.sequences.Sequence, param1: number): javalangObject;
			public static mapIndexedTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static takeWhile(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static averageOfShort(param0: kotlin.sequences.Sequence): number;
			public static mapIndexed(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2): kotlin.sequences.Sequence;
			public static filterTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static reduce(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2): javalangObject;
			public static min(param0: kotlin.sequences.Sequence): javalangComparable;
			public static max(param0: kotlin.sequences.Sequence): javalangFloat;
			public static averageOfByte(param0: kotlin.sequences.Sequence): number;
			public static mapIndexedNotNull(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2): kotlin.sequences.Sequence;
			public static single(param0: kotlin.sequences.Sequence): javalangObject;
			public static minus(param0: kotlin.sequences.Sequence, param1: javalangIterable): kotlin.sequences.Sequence;
			public static averageOfDouble(param0: kotlin.sequences.Sequence): number;
			public static joinToString(param0: kotlin.sequences.Sequence, param1: string, param2: string, param3: string, param4: number, param5: string, param6: kotlin.jvm.functions.Function1): string;
			public static any(param0: kotlin.sequences.Sequence): boolean;
			public static asIterable(param0: kotlin.sequences.Sequence): javalangIterable;
			public static sumByDouble(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): number;
			public static groupByTo(param0: kotlin.sequences.Sequence, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static singleOrNull(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): javalangObject;
			public static onEach(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static sortedWith(param0: kotlin.sequences.Sequence, param1: javautilComparator): kotlin.sequences.Sequence;
			public static mapNotNullTo(param0: kotlin.sequences.Sequence, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static mapNotNull(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
			public static count(param0: kotlin.sequences.Sequence): number;
			public static sumOfDouble(param0: kotlin.sequences.Sequence): number;
			public static forEach(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): void;
			public static sumOfInt(param0: kotlin.sequences.Sequence): number;
			public static groupingBy(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1): kotlin.collections.Grouping;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class SubSequence {
			public iterator(): javautilIterator;
			public take(param0: number): kotlin.sequences.Sequence;
			public constructor(param0: kotlin.sequences.Sequence, param1: number, param2: number);
			public drop(param0: number): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: number);
			public iterator(): javautilIterator;
			public take(param0: number): kotlin.sequences.Sequence;
			public drop(param0: number): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TakeWhileSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingIndexedSequence {
			public iterator(): javautilIterator;
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function2);
		}
	}
}

declare module kotlin {
	export module sequences {
		export class TransformingSequence {
			public constructor(param0: kotlin.sequences.Sequence, param1: kotlin.jvm.functions.Function1);
			public iterator(): javautilIterator;
			public flatten$kotlin_stdlib(param0: kotlin.jvm.functions.Function1): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module system {
		export class ProcessKt {
		}
	}
}

declare module kotlin {
	export module system {
		export class TimingKt {
			public static measureNanoTime(param0: kotlin.jvm.functions.Function0): number;
			public static measureTimeMillis(param0: kotlin.jvm.functions.Function0): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharCategory {
			public static UNASSIGNED: kotlin.text.CharCategory;
			public static UPPERCASE_LETTER: kotlin.text.CharCategory;
			public static LOWERCASE_LETTER: kotlin.text.CharCategory;
			public static TITLECASE_LETTER: kotlin.text.CharCategory;
			public static MODIFIER_LETTER: kotlin.text.CharCategory;
			public static OTHER_LETTER: kotlin.text.CharCategory;
			public static NON_SPACING_MARK: kotlin.text.CharCategory;
			public static ENCLOSING_MARK: kotlin.text.CharCategory;
			public static COMBINING_SPACING_MARK: kotlin.text.CharCategory;
			public static DECIMAL_DIGIT_NUMBER: kotlin.text.CharCategory;
			public static LETTER_NUMBER: kotlin.text.CharCategory;
			public static OTHER_NUMBER: kotlin.text.CharCategory;
			public static SPACE_SEPARATOR: kotlin.text.CharCategory;
			public static LINE_SEPARATOR: kotlin.text.CharCategory;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharCategory;
			public static CONTROL: kotlin.text.CharCategory;
			public static FORMAT: kotlin.text.CharCategory;
			public static PRIVATE_USE: kotlin.text.CharCategory;
			public static SURROGATE: kotlin.text.CharCategory;
			public static DASH_PUNCTUATION: kotlin.text.CharCategory;
			public static START_PUNCTUATION: kotlin.text.CharCategory;
			public static END_PUNCTUATION: kotlin.text.CharCategory;
			public static CONNECTOR_PUNCTUATION: kotlin.text.CharCategory;
			public static OTHER_PUNCTUATION: kotlin.text.CharCategory;
			public static MATH_SYMBOL: kotlin.text.CharCategory;
			public static CURRENCY_SYMBOL: kotlin.text.CharCategory;
			public static MODIFIER_SYMBOL: kotlin.text.CharCategory;
			public static OTHER_SYMBOL: kotlin.text.CharCategory;
			public static INITIAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public static FINAL_QUOTE_PUNCTUATION: kotlin.text.CharCategory;
			public static Companion: kotlin.text.CharCategory.Companion;
			public getValue(): number;
			public getCode(): string;
			public static valueOf(param0: string): kotlin.text.CharCategory;
			public contains(param0: string): boolean;
			public constructor(param0: string, param1: number, param2: number, param3: string);
			public static values(): native.Array<kotlin.text.CharCategory>;
		}
		export module CharCategory {
			export class Companion {
				public valueOf(param0: number): kotlin.text.CharCategory;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharDirectionality {
			public static UNDEFINED: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_ARABIC: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static EUROPEAN_NUMBER_TERMINATOR: kotlin.text.CharDirectionality;
			public static ARABIC_NUMBER: kotlin.text.CharDirectionality;
			public static COMMON_NUMBER_SEPARATOR: kotlin.text.CharDirectionality;
			public static NONSPACING_MARK: kotlin.text.CharDirectionality;
			public static BOUNDARY_NEUTRAL: kotlin.text.CharDirectionality;
			public static PARAGRAPH_SEPARATOR: kotlin.text.CharDirectionality;
			public static SEGMENT_SEPARATOR: kotlin.text.CharDirectionality;
			public static WHITESPACE: kotlin.text.CharDirectionality;
			public static OTHER_NEUTRALS: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_EMBEDDING: kotlin.text.CharDirectionality;
			public static LEFT_TO_RIGHT_OVERRIDE: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_EMBEDDING: kotlin.text.CharDirectionality;
			public static RIGHT_TO_LEFT_OVERRIDE: kotlin.text.CharDirectionality;
			public static POP_DIRECTIONAL_FORMAT: kotlin.text.CharDirectionality;
			public static Companion: kotlin.text.CharDirectionality.Companion;
			public getValue(): number;
			public static valueOf(param0: string): kotlin.text.CharDirectionality;
			public static values(): native.Array<kotlin.text.CharDirectionality>;
			public constructor(param0: string, param1: number, param2: number);
		}
		export module CharDirectionality {
			export class Companion {
				public valueOf(param0: number): kotlin.text.CharDirectionality;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt extends kotlin.text.CharsKt__CharKt {
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharJVMKt {
			public static getCategory(param0: string): kotlin.text.CharCategory;
			public static checkRadix(param0: number): number;
			public static digitOf(param0: string, param1: number): number;
			public static getDirectionality(param0: string): kotlin.text.CharDirectionality;
			public constructor();
			public static isWhitespace(param0: string): boolean;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsKt__CharKt extends kotlin.text.CharsKt__CharJVMKt {
			public constructor();
			public static equals(param0: string, param1: string, param2: boolean): boolean;
			public static isSurrogate(param0: string): boolean;
		}
	}
}

declare module kotlin {
	export module text {
		export class Charsets {
			public static UTF_8: javaniocharsetCharset;
			public static UTF_16: javaniocharsetCharset;
			public static UTF_16BE: javaniocharsetCharset;
			public static UTF_16LE: javaniocharsetCharset;
			public static US_ASCII: javaniocharsetCharset;
			public static ISO_8859_1: javaniocharsetCharset;
			public static INSTANCE: kotlin.text.Charsets;
			public UTF32_LE(): javaniocharsetCharset;
			public UTF32(): javaniocharsetCharset;
			public UTF32_BE(): javaniocharsetCharset;
		}
	}
}

declare module kotlin {
	export module text {
		export class CharsetsKt {
		}
	}
}

declare module kotlin {
	export module text {
		export class DelimitedRangesSequence {
			public iterator(): javautilIterator;
			public constructor(param0: string, param1: number, param2: number, param3: kotlin.jvm.functions.Function2);
		}
	}
}

declare module kotlin {
	export module text {
		export class FlagEnum {
			/**
			 * Constructs a new instance of the kotlin.text.FlagEnum interface with the provided implementation.
			 */
			public constructor(implementation: {
				getValue(): number;
				getMask(): number;
			});
			public getValue(): number;
			public getMask(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroup {
			public toString(): string;
			public getRange(): kotlin.ranges.IntRange;
			public component2(): kotlin.ranges.IntRange;
			public equals(param0: javalangObject): boolean;
			public constructor(param0: string, param1: kotlin.ranges.IntRange);
			public component1(): string;
			public copy(param0: string, param1: kotlin.ranges.IntRange): kotlin.text.MatchGroup;
			public getValue(): string;
			public hashCode(): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchGroupCollection {
			/**
			 * Constructs a new instance of the kotlin.text.MatchGroupCollection interface with the provided implementation.
			 */
			public constructor(implementation: {
				get(param0: number): kotlin.text.MatchGroup;
			});
			public get(param0: number): kotlin.text.MatchGroup;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchNamedGroupCollection {
			/**
			 * Constructs a new instance of the kotlin.text.MatchNamedGroupCollection interface with the provided implementation.
			 */
			public constructor(implementation: {
				get(param0: string): kotlin.text.MatchGroup;
				get(param0: number): kotlin.text.MatchGroup;
			});
			public get(param0: string): kotlin.text.MatchGroup;
			public get(param0: number): kotlin.text.MatchGroup;
		}
	}
}

declare module kotlin {
	export module text {
		export class MatchResult {
			/**
			 * Constructs a new instance of the kotlin.text.MatchResult interface with the provided implementation.
			 */
			public constructor(implementation: {
				getRange(): kotlin.ranges.IntRange;
				getValue(): string;
				getGroups(): kotlin.text.MatchGroupCollection;
				getGroupValues(): javautilList;
				getDestructured(): kotlin.text.MatchResult.Destructured;
				next(): kotlin.text.MatchResult;
			});
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public getGroupValues(): javautilList;
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
		}
		export module MatchResult {
			export class DefaultImpls {
				public static getDestructured(param0: kotlin.text.MatchResult): kotlin.text.MatchResult.Destructured;
			}
			export class Destructured {
				public constructor(param0: kotlin.text.MatchResult);
				public getMatch(): kotlin.text.MatchResult;
				public toList(): javautilList;
			}
		}
	}
}

import javautilregexMatcher = java.util.regex.Matcher;
declare module kotlin {
	export module text {
		export class MatcherMatchResult {
			public constructor(param0: javautilregexMatcher, param1: string);
			public next(): kotlin.text.MatchResult;
			public getRange(): kotlin.ranges.IntRange;
			public getGroupValues(): javautilList;
			public getDestructured(): kotlin.text.MatchResult.Destructured;
			public getGroups(): kotlin.text.MatchGroupCollection;
			public getValue(): string;
		}
	}
}

import javautilregexPattern = java.util.regex.Pattern;
declare module kotlin {
	export module text {
		export class Regex {
			public static Companion: kotlin.text.Regex.Companion;
			public constructor(param0: string, param1: javautilSet);
			public getOptions(): javautilSet;
			public matches(param0: string): boolean;
			public toPattern(): javautilregexPattern;
			public findAll(param0: string, param1: number): kotlin.sequences.Sequence;
			public replace(param0: string, param1: string): string;
			public replace(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public matchEntire(param0: string): kotlin.text.MatchResult;
			public containsMatchIn(param0: string): boolean;
			public find(param0: string, param1: number): kotlin.text.MatchResult;
			public toString(): string;
			public constructor(param0: javautilregexPattern);
			public getPattern(): string;
			public split(param0: string, param1: number): javautilList;
			public constructor(param0: string, param1: kotlin.text.RegexOption);
			public constructor(param0: string);
			public replaceFirst(param0: string, param1: string): string;
		}
		export module Regex {
			export class Companion {
				public escapeReplacement(param0: string): string;
				public escape(param0: string): string;
				public fromLiteral(param0: string): kotlin.text.Regex;
			}
		}
	}
}

declare module kotlin {
	export module text {
		export class RegexKt {
		}
	}
}

declare module kotlin {
	export module text {
		export class RegexOption {
			public static IGNORE_CASE: kotlin.text.RegexOption;
			public static MULTILINE: kotlin.text.RegexOption;
			public static LITERAL: kotlin.text.RegexOption;
			public static UNIX_LINES: kotlin.text.RegexOption;
			public static COMMENTS: kotlin.text.RegexOption;
			public static DOT_MATCHES_ALL: kotlin.text.RegexOption;
			public static CANON_EQ: kotlin.text.RegexOption;
			public getValue(): number;
			public getMask(): number;
			public constructor(param0: string, param1: number, param2: number, param3: number);
			public static values(): native.Array<kotlin.text.RegexOption>;
			public static valueOf(param0: string): kotlin.text.RegexOption;
		}
	}
}

declare module kotlin {
	export module text {
		export class ScreenFloatValueRegEx {
			public static value: kotlin.text.Regex;
			public static INSTANCE: kotlin.text.ScreenFloatValueRegEx;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt extends kotlin.text.StringsKt___StringsKt {
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__IndentKt {
			public static trimMargin(param0: string, param1: string): string;
			public static replaceIndentByMargin(param0: string, param1: string, param2: string): string;
			public static prependIndent(param0: string, param1: string): string;
			public static trimIndent(param0: string): string;
			public static replaceIndent(param0: string, param1: string): string;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__RegexExtensionsKt extends kotlin.text.StringsKt__IndentKt {
			public constructor();
		}
	}
}

import javalangStringBuilder = java.lang.StringBuilder;
declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderJVMKt extends kotlin.text.StringsKt__RegexExtensionsKt {
			public static appendln(param0: javalangAppendable): javalangAppendable;
			public constructor();
			public static appendln(param0: javalangStringBuilder): javalangStringBuilder;
		}
	}
}

import javalangCharSequence = java.lang.CharSequence;
declare module kotlin {
	export module text {
		export class StringsKt__StringBuilderKt extends kotlin.text.StringsKt__StringBuilderJVMKt {
			public static append(param0: javalangStringBuilder, param1: native.Array<javalangObject>): javalangStringBuilder;
			public static append(param0: javalangStringBuilder, param1: native.Array<string>): javalangStringBuilder;
			public constructor();
			public static append(param0: javalangAppendable, param1: native.Array<javalangCharSequence>): javalangAppendable;
			public static appendElement(param0: javalangAppendable, param1: javalangObject, param2: kotlin.jvm.functions.Function1): void;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringNumberConversionsKt extends kotlin.text.StringsKt__StringBuilderKt {
			public static toIntOrNull(param0: string): javalangInteger;
			public static toLongOrNull(param0: string, param1: number): javalangLong;
			public static toIntOrNull(param0: string, param1: number): javalangInteger;
			public static toByteOrNull(param0: string): javalangByte;
			public static toDoubleOrNull(param0: string): javalangDouble;
			public static toShortOrNull(param0: string): javalangShort;
			public static toFloatOrNull(param0: string): javalangFloat;
			public static toLongOrNull(param0: string): javalangLong;
			public static toByteOrNull(param0: string, param1: number): javalangByte;
			public static toShortOrNull(param0: string, param1: number): javalangShort;
			public constructor();
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsJVMKt extends kotlin.text.StringsKt__StringNumberConversionsKt {
			public static getCASE_INSENSITIVE_ORDER(param0: kotlin.jvm.internal.StringCompanionObject): javautilComparator;
			public static compareTo(param0: string, param1: string, param2: boolean): number;
			public static split(param0: string, param1: javautilregexPattern, param2: number): javautilList;
			public constructor();
			public static equals(param0: string, param1: string, param2: boolean): boolean;
			public static capitalize(param0: string): string;
			public static replaceFirst(param0: string, param1: string, param2: string, param3: boolean): string;
			public static replace(param0: string, param1: string, param2: string, param3: boolean): string;
			public static decapitalize(param0: string): string;
			public static startsWith(param0: string, param1: string, param2: boolean): boolean;
			public static endsWith(param0: string, param1: string, param2: boolean): boolean;
			public static isBlank(param0: string): boolean;
			public static regionMatches(param0: string, param1: number, param2: string, param3: number, param4: number, param5: boolean): boolean;
			public static startsWith(param0: string, param1: string, param2: number, param3: boolean): boolean;
			public static repeat(param0: string, param1: number): string;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt__StringsKt extends kotlin.text.StringsKt__StringsJVMKt {
			public static indexOf(param0: string, param1: string, param2: number, param3: boolean): number;
			public static indexOfAny(param0: string, param1: javautilCollection, param2: number, param3: boolean): number;
			public static replaceRange(param0: string, param1: kotlin.ranges.IntRange, param2: string): string;
			public static startsWith(param0: string, param1: string, param2: boolean): boolean;
			public static commonSuffixWith(param0: string, param1: string, param2: boolean): string;
			public static trimEnd(param0: string): string;
			public static trim(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static removeRange(param0: string, param1: kotlin.ranges.IntRange): string;
			public static removeSurrounding(param0: string, param1: string): string;
			public static findLastAnyOf(param0: string, param1: javautilCollection, param2: number, param3: boolean): kotlin.Pair;
			public static padEnd(param0: string, param1: number, param2: string): string;
			public static replaceBefore(param0: string, param1: string, param2: string, param3: string): string;
			public static substringBeforeLast(param0: string, param1: string, param2: string): string;
			public static substringAfterLast(param0: string, param1: string, param2: string): string;
			public static removeSuffix(param0: string, param1: string): string;
			public static padStart(param0: string, param1: number, param2: string): string;
			public constructor();
			public static substringBefore(param0: string, param1: string, param2: string): string;
			public static lastIndexOfAny(param0: string, param1: native.Array<string>, param2: number, param3: boolean): number;
			public static removeRange(param0: string, param1: number, param2: number): string;
			public static lastIndexOfAny(param0: string, param1: javautilCollection, param2: number, param3: boolean): number;
			public static substringAfter(param0: string, param1: string, param2: string): string;
			public static replaceAfter(param0: string, param1: string, param2: string, param3: string): string;
			public static trimStart(param0: string, param1: native.Array<string>): string;
			public static endsWith(param0: string, param1: string, param2: boolean): boolean;
			public static split(param0: string, param1: native.Array<string>, param2: boolean, param3: number): javautilList;
			public static removePrefix(param0: string, param1: string): string;
			public static removeSurrounding(param0: string, param1: string, param2: string): string;
			public static lastIndexOf(param0: string, param1: string, param2: number, param3: boolean): number;
			public static hasSurrogatePairAt(param0: string, param1: number): boolean;
			public static split(param0: string, param1: javautilregexPattern, param2: number): javautilList;
			public static replaceBeforeLast(param0: string, param1: string, param2: string, param3: string): string;
			public static trim(param0: string): string;
			public static getIndices(param0: string): kotlin.ranges.IntRange;
			public static commonPrefixWith(param0: string, param1: string, param2: boolean): string;
			public static replaceRange(param0: string, param1: number, param2: number, param3: string): string;
			public static splitToSequence(param0: string, param1: native.Array<string>, param2: boolean, param3: number): kotlin.sequences.Sequence;
			public static trimEnd(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static iterator(param0: string): kotlin.collections.CharIterator;
			public static startsWith(param0: string, param1: string, param2: number, param3: boolean): boolean;
			public static contains(param0: string, param1: string, param2: boolean): boolean;
			public static findAnyOf(param0: string, param1: javautilCollection, param2: number, param3: boolean): kotlin.Pair;
			public static getLastIndex(param0: string): number;
			public static substring(param0: string, param1: kotlin.ranges.IntRange): string;
			public static trim(param0: string, param1: native.Array<string>): string;
			public static indexOfAny(param0: string, param1: native.Array<string>, param2: number, param3: boolean): number;
			public static trimStart(param0: string): string;
			public static replaceAfterLast(param0: string, param1: string, param2: string, param3: string): string;
			public static trimStart(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static lines(param0: string): javautilList;
			public static subSequence(param0: string, param1: kotlin.ranges.IntRange): string;
			public static trimEnd(param0: string, param1: native.Array<string>): string;
			public static regionMatchesImpl(param0: string, param1: number, param2: string, param3: number, param4: number, param5: boolean): boolean;
			public static lineSequence(param0: string): kotlin.sequences.Sequence;
		}
	}
}

declare module kotlin {
	export module text {
		export class StringsKt___StringsKt extends kotlin.text.StringsKt__StringsKt {
			public static associateBy(param0: string, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static firstOrNull(param0: string, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static none(param0: string, param1: kotlin.jvm.functions.Function1): boolean;
			public static foldIndexed(param0: string, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static filterNotTo(param0: string, param1: javalangAppendable, param2: kotlin.jvm.functions.Function1): javalangAppendable;
			public static reduceRight(param0: string, param1: kotlin.jvm.functions.Function2): string;
			public static lastOrNull(param0: string): javalangCharacter;
			public static indexOfLast(param0: string, param1: kotlin.jvm.functions.Function1): number;
			public static mapNotNull(param0: string, param1: kotlin.jvm.functions.Function1): javautilList;
			public static toHashSet(param0: string): javautilHashSet;
			public static withIndex(param0: string): javalangIterable;
			public static last(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static first(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static groupByTo(param0: string, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static dropLastWhile(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static associateTo(param0: string, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static mapTo(param0: string, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static forEachIndexed(param0: string, param1: kotlin.jvm.functions.Function2): void;
			public static slice(param0: string, param1: kotlin.ranges.IntRange): string;
			public static fold(param0: string, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static filterIndexed(param0: string, param1: kotlin.jvm.functions.Function2): string;
			public static toSortedSet(param0: string): javautilSortedSet;
			public static single(param0: string): string;
			public static zip(param0: string, param1: string): javautilList;
			public static reduceIndexed(param0: string, param1: kotlin.jvm.functions.Function3): string;
			public static forEach(param0: string, param1: kotlin.jvm.functions.Function1): void;
			public constructor();
			public static slice(param0: string, param1: javalangIterable): string;
			public static groupBy(param0: string, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static filter(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static mapIndexed(param0: string, param1: kotlin.jvm.functions.Function2): javautilList;
			public static onEach(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static getOrNull(param0: string, param1: number): javalangCharacter;
			public static toMutableList(param0: string): javautilList;
			public static maxWith(param0: string, param1: javautilComparator): javalangCharacter;
			public static filterNot(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static takeLastWhile(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static toCollection(param0: string, param1: javautilCollection): javautilCollection;
			public static singleOrNull(param0: string, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static max(param0: string): javalangCharacter;
			public static zip(param0: string, param1: string, param2: kotlin.jvm.functions.Function2): javautilList;
			public static reversed(param0: string): string;
			public static any(param0: string, param1: kotlin.jvm.functions.Function1): boolean;
			public static filterIndexedTo(param0: string, param1: javalangAppendable, param2: kotlin.jvm.functions.Function2): javalangAppendable;
			public static mapIndexedTo(param0: string, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static reduce(param0: string, param1: kotlin.jvm.functions.Function2): string;
			public static takeLast(param0: string, param1: number): string;
			public static maxBy(param0: string, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static mapIndexedNotNull(param0: string, param1: kotlin.jvm.functions.Function2): javautilList;
			public static min(param0: string): javalangCharacter;
			public static firstOrNull(param0: string): javalangCharacter;
			public static foldRightIndexed(param0: string, param1: javalangObject, param2: kotlin.jvm.functions.Function3): javalangObject;
			public static flatMap(param0: string, param1: kotlin.jvm.functions.Function1): javautilList;
			public static any(param0: string): boolean;
			public static drop(param0: string, param1: number): string;
			public static partition(param0: string, param1: kotlin.jvm.functions.Function1): kotlin.Pair;
			public static toList(param0: string): javautilList;
			public static groupBy(param0: string, param1: kotlin.jvm.functions.Function1, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static minBy(param0: string, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static dropWhile(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static associateByTo(param0: string, param1: javautilMap, param2: kotlin.jvm.functions.Function1, param3: kotlin.jvm.functions.Function1): javautilMap;
			public static flatMapTo(param0: string, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static mapNotNullTo(param0: string, param1: javautilCollection, param2: kotlin.jvm.functions.Function1): javautilCollection;
			public static associateByTo(param0: string, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static reduceRightIndexed(param0: string, param1: kotlin.jvm.functions.Function3): string;
			public static toSet(param0: string): javautilSet;
			public static lastOrNull(param0: string, param1: kotlin.jvm.functions.Function1): javalangCharacter;
			public static mapIndexedNotNullTo(param0: string, param1: javautilCollection, param2: kotlin.jvm.functions.Function2): javautilCollection;
			public static foldRight(param0: string, param1: javalangObject, param2: kotlin.jvm.functions.Function2): javalangObject;
			public static asSequence(param0: string): kotlin.sequences.Sequence;
			public static singleOrNull(param0: string): javalangCharacter;
			public static last(param0: string): string;
			public static associateBy(param0: string, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static count(param0: string, param1: kotlin.jvm.functions.Function1): number;
			public static groupByTo(param0: string, param1: javautilMap, param2: kotlin.jvm.functions.Function1): javautilMap;
			public static asIterable(param0: string): javalangIterable;
			public static single(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static first(param0: string): string;
			public static filterTo(param0: string, param1: javalangAppendable, param2: kotlin.jvm.functions.Function1): javalangAppendable;
			public static none(param0: string): boolean;
			public static associate(param0: string, param1: kotlin.jvm.functions.Function1): javautilMap;
			public static take(param0: string, param1: number): string;
			public static groupingBy(param0: string, param1: kotlin.jvm.functions.Function1): kotlin.collections.Grouping;
			public static indexOfFirst(param0: string, param1: kotlin.jvm.functions.Function1): number;
			public static dropLast(param0: string, param1: number): string;
			public static takeWhile(param0: string, param1: kotlin.jvm.functions.Function1): string;
			public static minWith(param0: string, param1: javautilComparator): javalangCharacter;
			public static sumByDouble(param0: string, param1: kotlin.jvm.functions.Function1): number;
			public static map(param0: string, param1: kotlin.jvm.functions.Function1): javautilList;
			public static all(param0: string, param1: kotlin.jvm.functions.Function1): boolean;
			public static sumBy(param0: string, param1: kotlin.jvm.functions.Function1): number;
		}
	}
}

declare module kotlin {
	export module text {
		export class SystemProperties {
			public static LINE_SEPARATOR: string;
			public static INSTANCE: kotlin.text.SystemProperties;
		}
	}
}

declare module kotlin {
	export module text {
		export class TypeAliasesKt {
		}
	}
}

declare module kotlin {
	export module text {
		export class Typography {
			public static quote: string;
			public static dollar: string;
			public static amp: string;
			public static less: string;
			public static greater: string;
			public static nbsp: string;
			public static times: string;
			public static cent: string;
			public static pound: string;
			public static section: string;
			public static copyright: string;
			public static leftGuillemete: string;
			public static rightGuillemete: string;
			public static registered: string;
			public static degree: string;
			public static plusMinus: string;
			public static paragraph: string;
			public static middleDot: string;
			public static half: string;
			public static ndash: string;
			public static mdash: string;
			public static leftSingleQuote: string;
			public static rightSingleQuote: string;
			public static lowSingleQuote: string;
			public static leftDoubleQuote: string;
			public static rightDoubleQuote: string;
			public static lowDoubleQuote: string;
			public static dagger: string;
			public static doubleDagger: string;
			public static bullet: string;
			public static ellipsis: string;
			public static prime: string;
			public static doublePrime: string;
			public static euro: string;
			public static tm: string;
			public static almostEqual: string;
			public static notEqual: string;
			public static lessOrEqual: string;
			public static greaterOrEqual: string;
			public static INSTANCE: kotlin.text.Typography;
		}
	}
}

