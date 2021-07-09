export function ceil64Bytes(length: any, bpe?: number): number
export function array(Type: any, length: any, bpe?: any): any
export function arrowData(d: any): Data<any>
export function arrowVector(
  data: any
): Vector<any> | import("apache-arrow").BaseVector<any>
export function encode(data: any, idx: any, str: any): number
export function encodeInto(data: any, idx: any, str: any): number
export const encoder: TextEncoder
export function writeUtf8(data: any, idx: any, str: any): number
import { Data } from "apache-arrow/Arrow.dom.js"
import { Vector } from "apache-arrow/Arrow.dom.js"
