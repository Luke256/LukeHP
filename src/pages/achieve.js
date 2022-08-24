import * as React from 'react'
import Layer from '../components/layer'
import Content from '../components/content'
import AchievementView from '../components/achievement'
import Seo from '../components/seo'

const Achieve = () => {
    return (
        <Layer PageTitle="Achievements">
            <Seo title="LukeHome"
                description="Student / Programmer" 
                image="/icons/icon-512x512.png" 
                lang="ja"
            />
            <Content Title="Achievement">
                <AchievementView></AchievementView>
            </Content>
        </Layer>

    );
}

export default Achieve