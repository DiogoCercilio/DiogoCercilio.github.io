export const getOffset = (offset, index, e)=> {
    if(!e) return;

    offset[index].min = e.offsetTop + 20;

    if (offset[index - 1]) offset[index - 1].max = e.offsetTop;
    if (!offset[index + 1]) offset[index].max = e.offsetTop * 2;

    return offset;
}

export const initialOffset = [
    { id: 1, min: null, max: null },
    { id: 2, min: null, max: null },
    { id: 3, min: null, max: null }
]

export const findOffset = (offset, scroll)=> {
    return offset.find(i=> scroll.y >= i.min && scroll.y <= i.max)
}