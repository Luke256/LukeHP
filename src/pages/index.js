import * as React from 'react'
import Layer from '../components/layer'
import MarkedContent from '../components/marked_content'
import Content from '../components/content';
import JumpLink from '../components/jumplink';

const Index = () => {
    // var color, rating;
    // fetch("https://kyopro-ratings.herokuapp.com/json?atcoder=yuta28")
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((blob) => {
    //         color = blob.atcoder.color;
    //         rating = blob.atcoder.rating;
    //         console.log(color);
    //         console.log(rating);
    //     })
    //     .catch((reason) => {
    //         console.log(reason)
    //     });

    return (
        <main>
            <Layer PageTitle="Home">
                <MarkedContent Title="About Me" background="#DADEE5">
                    <p>
                        プログラミング好きの高校二年生です。中学一年生からC++に触れて、Pythonなども使いながら競技プログラミング/アプリ開発などをやってます。<br/>
                        たまにボルダリングをやってたりします
                    </p>
                </MarkedContent>
                <MarkedContent Title="Skills">
                    <Content Title="プログラミング">
                        競技プログラミングがメインで、その次にアプリ/ゲーム開発、AI開発をやっています。 <br/>
                        競技プログラミングでは現在水色コーダーとして絶賛競技中で、アプリ開発ではある大会でデザイン優秀賞を受賞、他にもOpenSiv3Dというライブラリに多少の貢献をしていたりしてます!<br/>
                        AI開発は、自力でニューラルネットワークを組む程度には実力があります
                    </Content>
                    <Content Title="Web開発">
                        時々htmlやjsなどを叩いてます。このページも自作です
                    </Content>
                </MarkedContent>
                <MarkedContent Title="Achievements" background="#D3DAE5">
                    <ul>
                        <li>AtCoder Algorithm:1375 / Heuristic:889 (2022-03-21)</li>
                        <li>OnlineMathContest 900 (2022-3-24)</li>
                        <li>第20回 日本情報オリンピック ランクB</li>
                        <li>第2回 学力向上アプリコンテスト デザイン優秀賞</li>
                        <li>パソコン甲子園2021 46位</li>
                        <li>第21回 日本情報オリンピック 本戦ランクC</li>
                        
                    </ul>
                </MarkedContent>
                <MarkedContent Title="Links">
                    <JumpLink Href="https://twitter.com/luke02561">Twitter</JumpLink>
                    <JumpLink Href="https://github.com/Luke256">GitHub</JumpLink>
                    <JumpLink Href="https://atcoder.jp/yuta28">AtCoder</JumpLink>
                    <JumpLink Href="https://qiita.com/luke02561">Qiita</JumpLink>
                    <JumpLink Href="https://zenn.dev/luke02561">Zenn</JumpLink>
                    <JumpLink Href="https://www.resume.id/luke256">resume</JumpLink>
                </MarkedContent>
            </Layer>
        </main>
    );
};

export default Index;