import {TileType} from "./types.ts";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION:TileType = {
    row:1,
    col:1,
    isEnd:false,
    isWall:false,
    isPath:false,
    distance:Infinity,
    isStart:true,
    parent:null
}

export const END_TILE_CONFIGURATION:TileType = {
    row: MAX_ROWS - 2,
    col: MAX_ROWS - 2,
    isEnd:false,
    isWall:false,
    isPath:false,
    distance:0,
    isStart:false,
    parent:null

}