import * as React from 'react'
import Table from "../table";

const AchievementView = () => {
    const Items = [
        ['2022-08', 'AtCoder Algorithm:1378 / Heuristic:1103'],
        ['2022-08', 'OnlineMathContest 988'],
        ['2020-12', '第20回 日本情報オリンピック ランクB'],
        ['2021-12', '第2回 学力向上アプリコンテスト デザイン優秀賞'],
        ['2021-12', 'パソコン甲子園2021 46位'],
        ['2022-02', '第21回 日本情報オリンピック 本戦ランクC'],
    ]

    return (
        <Table items={Items}></Table>
    )
}

export default AchievementView;