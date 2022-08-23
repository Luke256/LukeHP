import * as React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'


const About = () => {
    return (
        <Layer PageTitle="About">
            <Content Title="Prolile">
                LukeというHNで活動している高校二年生です。プログラミングやWeb制作、電子工作を趣味にしています。<br/>
                プログラミングは読む程度なら大体の言語(BrainF**k含め)はいけると思います。競技プログラミングが好きです。<br/>
                Web制作は、このページを自力で作る程度の実力があります。<br/>
                稀によくボルダリングをやってたりしてます<br/>
                <br/>
                Name: Luke (Luke256)<br/>
                Birthday: Feb 8 2008
            </Content>
            <Content Title="About this Page">
                <p>このページはGatsby.jsで作成しています。ブログページも開設予定。</p>
            </Content>
        </Layer>
    )
}

export default About