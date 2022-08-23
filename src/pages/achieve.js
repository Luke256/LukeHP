import * as React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'

const Achieve = () => {
    return (
        <Layer PageTitle="Achievements">
            <Content Title="Achievement">
                <ul>
                        <li>AtCoder Algorithm:1375 / Heuristic:889 (2022-03-21)</li>
                        <li>OnlineMathContest 900 (2022-3-24)</li>
                        <li>第20回 日本情報オリンピック ランクB</li>
                        <li>第2回 学力向上アプリコンテスト デザイン優秀賞</li>
                        <li>パソコン甲子園2021 46位</li>
                        <li>第21回 日本情報オリンピック 本戦ランクC</li>
                </ul>
            </Content>
        </Layer>

    );
}

export default Achieve