import {GridType,TileType} from "./types.ts";
import {MAX_COLS, MAX_ROWS} from "./constants.ts";


export const createRow = (row: number, startTile: TileType, endTile: TileType): TileType[] => {
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col++) {
        currentRow.push({
            row,
            col,
            isEnd: endTile.row === row && endTile.col === col,
            isStart: startTile.row === row && startTile.col === col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false,
            parent: null
        });
    }
    return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType): GridType => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
}