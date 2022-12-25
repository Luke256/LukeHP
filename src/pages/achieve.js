import * as React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'
import AchievementView from '../components/achievement'
import Seo from '../components/seo'

const Achieve = () => {
    return (
        <Layer PageTitle="Achievements">
            <Content Title="Achievement">
                <AchievementView></AchievementView>
            </Content>
        </Layer>

    );
}

export default Achieve

export const Head = () => (
    <Seo title="Achievement" pathname="achieve"/>
)