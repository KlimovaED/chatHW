import React from 'react'
import sort from '../../assets/8665859_sort_filter_icon.svg'
import up from '../../assets/211623_b_up_arrow_icon.svg'
import down from '../../assets/211614_down_b_arrow_icon.svg'

// добавить в проект иконки и импортировать
const downIcon = down;
const upIcon = up;
const noneIcon = sort;

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
if (sort === ''){
    return down
}
    if (sort === down){
        return up
    }
    if (sort === up){
        return ''
    }
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img id={id + '-icon-' + sort} src={icon} style={{width:'16px', height:'12px'}}/>
        </span>
    )
}

export default SuperSort
