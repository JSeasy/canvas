import Photo from "../core/Photo";
import Rect from "../core/Rect";
import Line from "../core/Line";

export interface IPoint {
  x: number;
  y: number;
}

export interface IBase {
  x: number;
  y: number;
  height: number;
  width: number;
}

export type ITarget = Rect | Photo;

export type TObjects = Array<ITarget>;

export interface IInitOptions {
  el: string;
  height: number;
  width: number;
  stored?: boolean;
}

export type TMouseAction = "dwon" | "up" | "move";

export type TController = "tr" | "tl" | "br" | "bl" | undefined;

export interface IActiveScale {
  scaleX: number;
  scaleY: number;
}

// 图片传参
export interface IPOption extends IPoint {
  src: HTMLImageElement;
  scaleX?: number;
  scaleY?: number;
}
