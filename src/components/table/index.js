import * as React from 'react'
import { tablebody, tableRow, tableDate, tableDetail } from './table.module.css'

const Table = ({ items }) => {
    const rows = items.map((item) =>
        <tr className={tableRow}>
            <td className={tableDate}>{item[0]}</td>
            <td className={tableDetail}>{item[1]}</td>
        </tr>
    );

    return (
        <table className={tablebody}>
            {rows}
        </table>
    )
}

export default Table